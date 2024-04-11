import React from 'react';
import CustomModal from '../../../components/modal/modal';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

const PaymentModal = ({ isOpen, closeModal, increaseStep, from }) => {
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
