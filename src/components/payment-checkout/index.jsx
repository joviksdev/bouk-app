import React, {
	forwardRef,
	useImperativeHandle,
	useState,
	useRef,
} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { Button, Box, CircularProgress, Typography } from '@mui/material';
import {
	CardElement,
	Elements,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js';
import ModalLayout from '../modal/modal-layout';
import AppAlert from '../alert';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

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

const CheckoutForm = ({ clientSecret, callback }) => {
	const stripe = useStripe();
	const elements = useElements();

	const alertRef = useRef(null);

	const [isProcessingPayment, setProcessingPayment] = useState(false);

	const profile = useSelector((store) => store.profile.profile);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		// Trigger form validation and wallet collection
		const { error: submitError } = await elements.submit();
		if (submitError) {
			alertRef.current.show({ message: submitError.message, type: 'error' });

			return;
		}

		setProcessingPayment(true);

		const { error } = await stripe.confirmCardPayment(clientSecret, {
			receipt_email: profile.email,
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: profile.name,
					email: profile.email,
				},
			},
		});

		if (error) {
			setProcessingPayment(false);

			alertRef.current.show({ message: error.message, type: 'error' });
			// callback('error', error.message);
		} else {
			callback('success', 'Payment succeeded!');
			setProcessingPayment(false);
			// const { paymentIntent } = stripe.retrievePaymentIntent(clientSecret);

			// switch (paymentIntent.status) {
			// 	case 'succeeded':
			// 		callback('success', 'Payment succeeded!');
			// 		break;
			// 	case 'processing':
			// 		callback('pending', 'Your payment is processing.');
			// 		break;
			// 	case 'requires_payment_method':
			// 		callback(
			// 			'unsuccessful',
			// 			'Your payment was not successful, please try again.'
			// 		);
			// 		break;
			// 	default:
			// 		callback('default', 'Something went wrong.');
			// 		break;
			// }
		}
	};

	if (stripe && elements) {
		return (
			<form onSubmit={handleSubmit}>
				<AppAlert
					ref={alertRef}
					sx={{
						marginBottom: '15px',
					}}
				/>

				<Box
					sx={{
						marginBottom: '3rem',
					}}
				>
					<Typography
						sx={{
							marginBottom: '6px',
							fontSize: ['18px', '24px'],
							fontWeight: '600',
						}}
						variant='h2'
					>
						Make Payment
					</Typography>
					<Typography variant={'body1'}>
						Enter your card detail to continue with payment
					</Typography>
				</Box>
				<CardElement
					className='form_input_container'
					options={cardStyle}
					// onChange={handleChange}
				/>
				<Button
					fullWidth
					sx={{
						backgroundColor: '#3E236E !important',
						textTransform: 'capitalize',
						color: 'white',
					}}
					type='submit'
				>
					{isProcessingPayment ? 'Processing...' : 'Pay'}
				</Button>
			</form>
		);
	}

	return (
		<Box
			sx={{
				isDisplay: 'flex',
				flexDirection: 'column',
				gap: '8px',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<CircularProgress size={18} />
			<Typography>Loading...</Typography>
		</Box>
	);
};

const PaymentCheckout = (props, ref) => {
	const { callback } = props;

	const [isDisplay, setDisplay] = useState(false);
	const [clientSecret, setClientSecret] = useState('');

	useImperativeHandle(
		ref,
		() => {
			return {
				initialize: (clientSecret = '') => {
					setClientSecret(clientSecret);
					setDisplay(true);
				},
			};
		},
		[]
	);

	const closeModal = () => setDisplay(false);

	const handleCallback = (status, res) => {
		typeof callback === 'function' && callback(status, res);
		setDisplay(false); // Close Modal
	};

	if (isDisplay) {
		return (
			<ModalLayout
				isOpen={isDisplay}
				hasCloseButton={false}
				closeModal={closeModal}
			>
				<Elements stripe={stripePromise}>
					<CheckoutForm clientSecret={clientSecret} callback={handleCallback} />
				</Elements>
			</ModalLayout>
		);
	}

	return null;
};

export default forwardRef(PaymentCheckout);
