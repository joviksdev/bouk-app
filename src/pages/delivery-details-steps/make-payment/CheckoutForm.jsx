import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import './Checkout.css';
import Btn from '../../../components/btn/btn';
import PaymentLoader from '../../../components/payment-loader/PaymentLoader';
import PaymentSummary from './PaymentSummary';
import { tipDriver } from '../../../redux/orderSlice';

const CheckoutForm = ({ increaseStep, from, closeModal }) => {
	const { transactionPayload } = useSelector((state) => state.transaction);
	const { deliveryBreakdown, tip } = useSelector((state) => state.order);
	const user = localStorage.getItem('persist:root')
		? JSON.parse(localStorage.getItem('persist:root'))
		: null;
	const currentUser = user && user.user;
	const stripe = useStripe();
	let elements = useElements();
	const dispatch = useDispatch();
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	let clientSecret = transactionPayload.clientSecret;

	// const options = {
	//   showIcon: true,
	//   style: {
	//     width: "100%",
	//     height: 50,
	//     marginVertical: 30,
	//     borderWidth: 0.5,
	//     borderColor: "#ccc",
	//     borderRadius: 8,
	//   },
	// };

	useEffect(() => {
		console.log(stripe);
		if (!stripe) {
			return;
		}

		console.log('secret', clientSecret);
		console.log('user', currentUser);
		if (!clientSecret) {
			return;
		}

		stripe
			.retrievePaymentIntent(clientSecret)
			.then(({ paymentIntent }) => {
				console.log('payment intent', paymentIntent);

				switch (paymentIntent.status) {
					case 'succeeded':
						setMessage('Payment succeeded!');
						break;
					case 'processing':
						setMessage('Your payment is processing.');
						break;
					case 'requires_payment_method':
						setMessage('Your payment was not successful, please try again.');
						break;
					default:
						setMessage('Something went wrong.');
						break;
				}
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(message);
	}, [stripe]);
	const cardStyle = {
		style: {
			base: {
				color: '#32325d',
				fontFamily: 'Arial, sans-serif',
				fontSmoothing: 'antialiased',
				fontSize: '16px',
				'::placeholder': {
					color: '#32325d',
				},
			},
			invalid: {
				fontFamily: 'Arial, sans-serif',
				color: '#fa755a',
				iconColor: '#fa755a',
			},
		},
	};
	// const CARD_ELEMENT_OPTIONS = {
	//   iconStyle: "solid",
	//   hidePostalCode: true,
	//   style: {
	//     base: {
	//       iconColor: "rgb(240, 57, 122)",
	//       color: "rgb(240, 57, 122)",
	//       fontSize: "16px",
	//       fontFamily: '"Open Sans", sans-serif',
	//       fontSmoothing: "antialiased",
	//       "::placeholder": {
	//         color: "#CFD7DF"
	//       }
	//     },
	//     invalid: {
	//       color: "#e5424d",
	//       ":focus": {
	//         color: "#303238"
	//       }
	//     }
	//   }
	// };
	const handleChange = async (event) => {
		// Listen for changes in the CardElement
		// and display any errors as the customer types their card details
		setDisabled(event.empty);
		setError(event.error ? event.error.message : '');
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}
		console.log('from', from);
		console.log('tip', tip);
		console.log('elements', elements);
		setProcessing(true);
		if (from === 'tip') {
			try {
				const res = await dispatch(tipDriver(tip)).unwrap();
				if (res === 'success') {
					setSucceeded(true);
					setProcessing(false);
				}
			} catch (err) {
				console.log(err);
			}
		}

		//   setTimeout(function() {
		//     setProcessing(false)
		//     setSucceeded(true);

		// }, 5000);
		console.log(clientSecret);
		console.log(elements.getElement(CardElement));
		const { error } = await stripe.confirmCardPayment(clientSecret, {
			receipt_email: currentUser.email,
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					// include billing details if you want to
					// charge the customer later
					name: currentUser.name,
					email: currentUser.email,
				},
			},
		});
		console.log('intoini');
		// This point will only be reached if there is an immediate error when
		// confirming the payment. Otherwise, your customer will be redirected to
		// your `return_url`. For some payment methods like iDEAL, your customer will
		// be redirected to an intermediate site first to authorize the payment, then
		// redirected to the `return_url`.

		if (error) {
			console.log(error);
			console.log(processing);
			setProcessing(false);
			console.log(processing);
			setError(`Payment failed ${error.message}`);
		}

		if (!error) {
			setError(null);
			setProcessing(false);
			setSucceeded(true);
			increaseStep();
		}
	};

	return (
		<div>
			<form id='payment-form' className='form' onSubmit={handleSubmit}>
				{!processing && !succeeded && (
					<>
						<CardElement
							className='form_input_container'
							options={cardStyle}
							onChange={handleChange}
						/>
						<Btn
							type='submit'
							look='primary-filled'
							disabled={processing || disabled || succeeded}
							id='submit'
						>
							<span id='button-text'>Pay now</span>
						</Btn>
					</>
				)}
				{processing && (
					<PaymentLoader text='processing payment ...' />
					// <div className="spinner" id="spinner"></div>
				)}
				{/* Show any error that happens when processing the payment */}
				{/* {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )} */}
				{/* Show a success message upon completion */}
				{succeeded && from === 'delivery' && (
					// <p className="result-message ">Payment successful. Redirecting ...</p>
					<PaymentSummary
						closeModal={closeModal}
						amount={deliveryBreakdown?.deliveryCost}
						serviceCharge={deliveryBreakdown?.serviceCharge}
						userName={currentUser.name}
						increaseStep={increaseStep}
						from='delivery'
					/>
				)}
				{succeeded && from === 'tip' && (
					// <p className="result-message ">Payment successful. Redirecting ...</p>
					<PaymentSummary
						driverName='Kolade David'
						closeModal={closeModal}
						amount={tip}
						serviceCharge={0}
						userName={currentUser.name}
						increaseStep={increaseStep}
						from='tip'
					/>
				)}
				{error !== null && (
					// <p className="result-message ">Payment successful. Redirecting ...</p>
					<span> {error} </span>
				)}
			</form>
		</div>
	);
};

export default CheckoutForm;
