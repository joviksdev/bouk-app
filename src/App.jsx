import React, { Component, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import HomePage from './pages/HomePage';
import BOUKIndependentContractorAgreement from './pages/BOUKIndependentContractorAgreement';
import BoukMerchantsSecurityofDataandPrivacyPolicy from './pages/BoukMerchantsSecurityofDataandPrivacyPolicy';
import BOUKtermsandConditions from './pages/BOUKtermsandConditions';
import PrivacyPolicyforDrivers from './pages/PrivacyPolicyforDrivers';
import PrivacyPolicyforusersorCustomers from './pages/PrivacyPolicyforusersorCustomers ';
//import Download from "./pages/Download";
import FAQs from './pages/FAQs';
import DeliveryDetailsSteps from './pages/delivery-details-steps/delivery-details-steps';
import Home from './pages/home/home';
import Faqs from './pages/faqs/faqs';
import ContactUs from './pages/contact-us/contact-us';
import AboutUs from './pages/about-us/about-us';
import Driver from './pages/driver/driver';
import Merchant from './pages/merchant/merchant';
import Download from './pages/download/download';
import PaymentModal from './pages/delivery-details-steps/make-payment/PaymentModal';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutForm from './pages/delivery-details-steps/make-payment/CheckoutForm';
import DeliverySummaryTest from './pages/Login';
import './messaging_init_in_sw.js';

import protectedRoutes from './routes/user-protected-route/protected-routes';
import Dashboard from './pages/dashboard/dashboard';
import { onMessageListener } from './messaging_init_in_sw.js';
import { getTokens } from './messaging_init_in_sw.js';
import { sendToken } from './redux/generalReducer';
import { getProfile, setProfile } from './redux/profileSlice.js';
import { setUser } from './redux/authSlice.js';
import PrivacyPolicies from './pages/privacy-policies/index.jsx';
import TermsAndConditions from './pages/terms-and-conditions/index.jsx';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

const App = () => {
	const { transactionPayload } = useSelector((state) => state.transaction);
	const [show, setShow] = useState(false);
	const { webToken } = useSelector((state) => state.general);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const profile = useSelector((store) => store.profile.profile);
	const currentUser = useSelector((store) => store.auth.currentUser);

	const sendWebToken = async (token) => {
		try {
			const res = await dispatch(sendToken({ token })).unwrap();
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	const retrieveUser = async () => {
		const response = await dispatch(getProfile()).unwrap();
		if (response.status === false) {
			// Clear local storage and state
			localStorage.removeItem('auth:details');
			dispatch(setProfile(null));
			dispatch(setUser(null));
			navigate('/');
		}
	};

	onMessageListener()
		.then((payload) => {
			const { title, body } = payload.notification;
			enqueueSnackbar(
				`
			${title}, ${body}
			`,
				{
					variant: 'info',
				}
			);
		})
		.catch((err) => console.log('failed: ', err));

	useEffect(
		() => {
			const authDetails = localStorage.getItem('auth:details');
			if (authDetails) {
				const parseJson = JSON.parse(authDetails);
				dispatch(setUser(parseJson));
				retrieveUser(); // Load user details
			}
			getTokens((fbToken) => {
				if (fbToken && currentUser) {
					sendWebToken(fbToken);
				}
			});
		},
		//eslint-disable-next-line
		[]
	);

	const appearance = {
		theme: 'stripe',
	};

	let clientSecret = transactionPayload?.clientSecret;
	const options = {
		appearance,
	};
	const stripePublishableKey = process.env.REACT_APP_STRIPE;
	return (
		<Elements options={options} stripe={stripePromise}>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/home' element={<Home />} />
				{/* <Route path="/store" element={<Home />} /> */}

				{/* <Route path="product/:productId" element={<Product />} />
      <Route path="products/:category" element={<ProductList />} /> */}
				<Route path='FAQs' element={<Faqs />} />

				<Route path='about' element={<AboutUs />} />
				<Route path='download' element={<Download />} />
				<Route path='contact' element={<ContactUs />} />
				<Route path='driver' element={<Driver />} />
				<Route path='merchant' element={<Merchant />} />
				<Route path='payment' element={<CheckoutForm />} />
				<Route path='TestSummary' element={<DeliverySummaryTest />} />
				<Route
					path='IndependentContractorAgreement'
					element={<BOUKIndependentContractorAgreement />}
				/>
				<Route
					path='MerchantsSecurityofDataandPrivacyPolicy'
					element={<BoukMerchantsSecurityofDataandPrivacyPolicy />}
				/>
				<Route path='terms-and-conditions' element={<TermsAndConditions />} />
				<Route
					path='DriverPrivacyPolicy'
					element={<PrivacyPolicyforDrivers />}
				/>
				<Route path='privacy-policies' element={<PrivacyPolicies />} />

				<Route path='delivery-steps' element={<DeliveryDetailsSteps />} />
				<Route element={<Dashboard />}>
					{protectedRoutes.map((route, i) => (
						<Route key={i} path={route.path} element={<route.element />} />
					))}
				</Route>
			</Routes>
		</Elements>
	);
};

export default App;
