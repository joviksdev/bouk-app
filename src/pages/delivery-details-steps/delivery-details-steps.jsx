import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import DrawerAppBar from '../../components/Navbar';
import PickupDeliveryDetails from './pickup-delivery-details/pickup-delivery-details';
import AddDeliveryItems from './add-delivery-items/add-delivery-items';
import MakePayment from './make-payment/make-payment';
import DeliveryDetailTimeline from './delivery-details-timeline/delivery-details-timeline';
import DeliverySummary from './delivery-summary/delivery-summary';
import { useSelector, useDispatch } from 'react-redux';
import {
	setDeliverInputValue,
	setDeliverValue,
	setPickupOptions,
	setReceiverName,
	setReceiverNumber,
	setdeliverOptions,
	setpickUpValue,
	setpickupInputValue,
} from '../../redux/mapSlice';

const Container = styled.div`
width: '80%'
  margin: auto;
  padding: 0 20px;
  font-family: "Oxygen", sans-serif;
`;

const DeliveryDetailsSteps = () => {
	const MIN_STEP = 1;
	const MAX_STEP = 4;

	const location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const step = location.state?.step;

	const [currentStep, setCurrentStep] = React.useState(MIN_STEP);

	const statePickupData = location.state?.pickupData;

	const pickupData = useSelector((state) => state.map);

	const handleGoBack = () => NavigationPreloadManager(-1);

	useEffect(
		() => {
			if (statePickupData && Object.keys(statePickupData).length > 0) {
				if (!pickupData.pickupvalue && statePickupData.pickupvalue)
					dispatch(setpickUpValue(statePickupData.pickupvalue));
				if (!pickupData.pickupoptions && statePickupData.pickupoptions)
					dispatch(setPickupOptions(statePickupData.pickupoptions));
				if (!pickupData.pickupinputValue && statePickupData.pickupinputValue)
					dispatch(setpickupInputValue(statePickupData.pickupinputValue));

				if (!pickupData.delivervalue && statePickupData.delivervalue)
					dispatch(setDeliverValue(statePickupData.delivervalue));
				if (!pickupData.deliveroptions && statePickupData.deliveroptions)
					dispatch(setdeliverOptions(statePickupData.deliveroptions));
				if (!pickupData.deliverinputValue && statePickupData.deliverinputValue)
					dispatch(setDeliverInputValue(statePickupData.deliverinputValue));

				if (!pickupData.receivername && statePickupData.receivername)
					dispatch(setReceiverName(statePickupData.receivername));
				if (!pickupData.receivernumber && statePickupData.receivernumber)
					dispatch(setReceiverNumber(statePickupData.receivernumber));
			}
		},
		//eslint-disable-next-line
		[pickupData, statePickupData]
	);

	// useEffect(() => {
	// 	const step = new URLSearchParams(window.location.search).get(
	// 		'current_step'
	// 	);
	// 	console.log(step);
	// 	if (step != null) {
	// 		setCurrentStep(3);
	// 	}
	// }, []);

	useEffect(() => {
		if (step) {
			setCurrentStep(step);
		}
	}, [step]);

	const increaseStep = React.useCallback(() => {
		setCurrentStep((prev) => Math.min(prev + 1, MAX_STEP));
	}, [MAX_STEP]);

	const decreaseStep = React.useCallback(() => {
		setCurrentStep((prev) => Math.min(prev - 1, MAX_STEP));
	}, [MAX_STEP]);

	function renderBasedOnCurrentView() {
		switch (currentStep) {
			case 1:
				return <PickupDeliveryDetails increaseStep={increaseStep} />;

			case 2:
				return (
					<AddDeliveryItems
						increaseStep={increaseStep}
						decreaseStep={decreaseStep}
					/>
				);

			case 3:
				return (
					<MakePayment
						increaseStep={increaseStep}
						decreaseStep={decreaseStep}
						handleGoBack={handleGoBack}
					/>
				);
			case 4:
				return <DeliverySummary />;
			default:
				return null;
		}
	}

	return (
		<Box
			style={{
				maxWidth: '1200px',
				width: '100%',
				margin: '2rem auto',
				padding: ['15px, 20px'],
				display: 'grid',
				gap: '2rem',
			}}
		>
			<DrawerAppBar />

			<DeliveryDetailTimeline currentStep={currentStep} />

			<Container>{renderBasedOnCurrentView()}</Container>
		</Box>
	);
};

export default DeliveryDetailsSteps;
