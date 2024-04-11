import React from 'react';
import CustomModal from '../../../components/modal/modal';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

const PaymentModal = ({ isOpen, closeModal, increaseStep, from }) => {
	const { transactionPayload } = useSelector((state) => state.transaction);
	const appearance = {
		theme: 'stripe',
	};
	console.log('stripe promise', process.env.REACT_APP_STRIPE);
	let clientSecret = transactionPayload.clientSecret;
	const options = {
		clientSecret,
		appearance,
	};

	return (
		<div>
			<CustomModal isOpen={isOpen} closeModal={closeModal}>
				<Elements stripe={stripePromise}>
					<CheckoutForm
						increaseStep={increaseStep}
						from={from}
						closeModal={closeModal}
					/>
				</Elements>
			</CustomModal>
		</div>
	);
};

export default PaymentModal;
