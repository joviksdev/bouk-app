import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import FormIcons from '../../../components/form-icons/form-icons';
// import { ReactComponent as Edit } from '../../../assets/mode_edit.svg';
import { ReactComponent as ArrowRight } from '../../../assets/arrow-right.svg';
import PickupDriverLookup from '../../../components/pickup-driver-lookup';
import { useDispatch, useSelector } from 'react-redux';
import AppAlert from '../../../components/alert';
import {
	Typography,
	Box,
	Divider,
	Button,
	CircularProgress,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import {
	getCostBreakdown,
	getDeliveryPaymentToken,
} from '../../../redux/orderSlice';
import { setPaymentModal } from '../../../redux/transactionSlice';
import PaymentModal from './PaymentModal';
import PaymentCheckout from '../../../components/payment-checkout';
import { useCancelDelivery } from '../../../hooks';

const BoxContainer = styled(Box)({
	borderRadius: '5px',
	border: '1px solid rgba(0, 0, 0, 0.1)',
	padding: '15px',
	backgroundColor: 'white',
});

const BoldText = styled(Typography)({
	fontWeight: 'bold',

	span: {
		fontWeight: '400',
		color: '#7C7C7C',
		fontSize: '13px',
	},
});

const Flex = styled(Box)({
	display: 'flex',
	gap: '15px',
	width: '100%',
	justifyContent: 'space-between',
});

const MakePayment = ({ increaseStep }) => {
	const { pickupvalue, delivervalue } = useSelector((state) => state.map);
	const navigate = useNavigate();

	const paymentCheckoutRef = useRef(null);
	const pickupRef = React.useRef(null);
	const alertRef = useRef(null);

	const [isCancelingDelivery, setCancelingDelivery] = useState(false);

	const { cancelDelivery, isLoading } = useCancelDelivery((status, msg) => {
		setCancelingDelivery(false);
		if (status === 'failed') {
			alertRef.current.show({
				message: `${msg}`,
				type: 'error',
			});

			return;
		}
		navigate('/');
	});

	const [costBreakdown, setCostBreakdown] = useState(null);
	const [isGettingToken, setGettingToken] = useState(false);
	const [paymentResponse, setPaymentResponse] = useState('');

	const location = useLocation();
	const statePickupData = location.state?.pickupData;

	const { loading, error } = useSelector((state) => state.order);
	const { showPaymentModal } = useSelector((state) => state.transaction);
	const dispatch = useDispatch();

	const handleGetPriceBreakdown = async (id) => {
		try {
			const response = await dispatch(getCostBreakdown(id)).unwrap();
			if (response.status === 'successful') {
				const data = response.data;
				setCostBreakdown(data);
			}
		} catch (error) {
			alertRef.current.show({
				message: `${error}`,
				type: 'error',
			});
		}
	};

	useEffect(
		() => {
			if (
				statePickupData &&
				statePickupData.deliveryData &&
				statePickupData.deliveryData.id
			) {
				handleGetPriceBreakdown(statePickupData.deliveryData.id);
			}
		},
		// eslint-disable-next-line
		[statePickupData]
	);

	const deliveryId =
		statePickupData &&
		statePickupData.deliveryData &&
		statePickupData?.deliveryData?.id;

	const handleProceedPayment = async (e) => {
		e.preventDefault();
		setGettingToken(true);

		try {
			const response = await dispatch(
				getDeliveryPaymentToken(deliveryId)
			).unwrap();
			if (response.status === 'successful') {
				const token = response.data.client_token;

				paymentCheckoutRef.current.initialize(token);
				// dispatch(setPaymentModal(false));
			}
		} catch (error) {
			alertRef.current.show({
				message: `${error.message}`,
				type: 'error',
			});
		}

		setGettingToken(false);
	};

	const handleNavigate = () => {
		navigate(`/delivery-steps`, {
			state: {
				pickupData: statePickupData,
				step: 4,
			},
		});
	};

	const handleCallback = (status, message) => {
		switch (status) {
			case 'success':
				pickupRef.current.init();
				setPaymentResponse(message);
				setTimeout(() => {
					setPaymentResponse('');
				}, 5000);

				break;

			default:
				break;
		}
	};

	// Cancel Delivery
	const handleCancelDelivery = () => {
		setCancelingDelivery(true);
		cancelDelivery(deliveryId);
	};

	if (loading === 'loading' && !costBreakdown) {
		return (
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: '2rem auto',
				}}
			>
				<CircularProgress />
			</Box>
		);
	}

	if (loading === 'failed' && !costBreakdown) {
		return (
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					margin: '1rem auto',
				}}
			>
				<Typography>{error}</Typography>
			</Box>
		);
	}

	if (costBreakdown && Object.keys(costBreakdown).length > 0) {
		const { delivery_cost, service_charge, total_amount } = costBreakdown;
		return (
			<>
				<PickupDriverLookup
					ref={pickupRef}
					pickupCoordinate={statePickupData?.pickupCoordinate}
					deliveryId={deliveryId}
					message={paymentResponse}
				/>
				<Box>
					<PaymentCheckout ref={paymentCheckoutRef} callback={handleCallback} />
					<AppAlert sx={{ marginBottom: '25px' }} ref={alertRef} />
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: ['1fr', 'repeat(2, 1fr)'],
							gap: { xs: '1rem', md: '3rem' },
						}}
					>
						<Box>
							<Box
								sx={{
									display: 'grid',
									gap: '1rem',
								}}
							>
								<BoxContainer sx={{ display: 'flex', gap: '25px' }}>
									<FormIcons lineStyle={{ height: '40px' }} />
									<Box>
										<BoldText
											sx={{
												marginBottom: '20px',
											}}
										>
											Pickup up at? <br />
											<span style={{ fontWeight: '500' }}>
												{pickupvalue.description}
											</span>
										</BoldText>
										<BoldText>
											Deliver at? <br />
											<span style={{ fontWeight: '500' }}>
												{delivervalue.description}
											</span>
										</BoldText>
									</Box>
								</BoxContainer>
								<BoxContainer
									sx={{
										padding: '0px !important',
										paddingTop: '15px !important',
									}}
								>
									<Box
										sx={{
											marginBottom: '10px !important',
											padding: '0px 15px',
										}}
									>
										<BoldText
											sx={{
												fontSize: ['18px', '24px'],
											}}
											component={'h3'}
										>
											Your Delivery Item
										</BoldText>
									</Box>
									<Divider />
									<Box
										sx={{
											padding: '0px 15px',
										}}
									>
										{statePickupData &&
											statePickupData.items &&
											Array.isArray(statePickupData.items) &&
											statePickupData.items.map((item, index) => {
												const isLastItem =
													statePickupData.items.length === index + 1;
												return (
													<Box key={index}>
														<Box
															sx={{
																display: 'flex',
																gap: '15px',
																justifyContent: 'space-between',
																padding: '15px 0px',
															}}
														>
															<Box>
																<BoldText>
																	{item.name} <br />
																	<span>{item.description}</span>
																</BoldText>
															</Box>
															<BoldText>{item.weight}lbs</BoldText>
														</Box>
														{!isLastItem && <Divider />}
													</Box>
												);
											})}
									</Box>
								</BoxContainer>
							</Box>
						</Box>
						<Box>
							<Box
								sx={{
									display: 'grid',
									gap: '1rem',
								}}
							>
								<BoxContainer
									sx={{
										display: 'grid',
										gap: '15px',
									}}
								>
									<Flex>
										<BoldText>Price</BoldText>
										<BoldText>${delivery_cost}</BoldText>
									</Flex>
									<Flex>
										<BoldText>Service Charge</BoldText>
										<BoldText>${service_charge}</BoldText>
									</Flex>
									<Flex>
										<BoldText>Total</BoldText>
										<BoldText sx={{ fontSize: '18px' }}>
											${total_amount}
										</BoldText>
									</Flex>
								</BoxContainer>

								<BoxContainer>
									<BoldText>
										Note
										<br />
										<span>{statePickupData?.note}</span>
									</BoldText>
								</BoxContainer>
								<Button
									disabled={isGettingToken}
									onClick={handleProceedPayment}
									sx={{
										backgroundColor: '#3E236E !important',
										color: 'white',
										display: 'flex',
										justifyContent: isGettingToken ? 'center' : 'space-between',
										textTransform: 'capitalize',
										padding: '15px',
										height: '50px',
									}}
									fullWidth
								>
									{isGettingToken ? (
										'Processing...'
									) : (
										<>
											<span>Proceed to make payment</span>
											<ArrowRight />
										</>
									)}
								</Button>

								<Button
									onClick={handleCancelDelivery}
									disabled={isGettingToken || isCancelingDelivery}
									sx={{
										textTransform: 'capitalize',
										color: '#3E236E !important',
										justifySelf: 'center',
									}}
								>
									{isCancelingDelivery ? 'Canceling request' : 'Cancel Request'}
								</Button>
							</Box>
						</Box>
					</Box>

					{showPaymentModal && (
						<PaymentModal
							isOpen={showPaymentModal}
							closeModal={() => dispatch(setPaymentModal(false))}
							increaseStep={increaseStep}
							from='delivery'
						/>
					)}
				</Box>
			</>
		);
	}

	return null;
};

export default MakePayment;
