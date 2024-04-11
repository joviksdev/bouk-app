import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import FormIcons from '../../../components/form-icons/form-icons';
import { ReactComponent as Edit } from '../../../assets/mode_edit.svg';
import { useDispatch, useSelector } from 'react-redux';
import Btn from '../../../components/btn/btn';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import Rating from '@mui/material/Rating';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { ThreeDots } from 'react-loader-spinner';
import {
	getCostBreakdown,
	setDeliveryBreakdown,
	submitDelivery,
	setSubmitDeliveryLoading,
} from '../../../redux/orderSlice';
import {
	initializeTransaction,
	setTransactionPayload,
	setPaymentModal,
} from '../../../redux/transactionSlice';
import Box from '@mui/material/Box';

import CircularProgress from '@mui/material/CircularProgress';
import OrderView from '../../../features/order-view/orderView';
import PaymentLoader from '../../../components/payment-loader/PaymentLoader';
import { sendToken } from '../../../redux/generalReducer';

const Container = styled.div`
	display: flex;
	padding-bottom: 50px;
`;

const LeftContainer = styled.div`
	padding: 0 30px;
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const RightContainer = styled.div`
	padding: 0 30px;
	width: 50%;
	// border: 1px solid red;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const LocationDiv = styled.div`
	background-color: #ffffff;
	display: flex;
	border-radius: 5px;
	padding: 20px;
	gap: 10px;
`;

const LocationTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	p {
		font-size: 17px;
		font-weight: 700;
	}
`;
const DeliveryListContainer = styled.div`
	background-color: #ffffff;
	border-radius: 5px;
`;

const DeliveryTitle = styled.div`
	padding: 20px 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #e2e2e2;

	h3 {
		font-weight: 700;
		font-size: 28px;
	}
	span {
		padding: 10px 17px;
		border-radius: 50%;
		background-color: #ffeb52;
		font-size: 17px;
		font-weight: 700;
		color: #6438b0;
	}

	div {
		display: flex;
		align-items: center;
		gap: 20px;
	}
`;
const Button = styled.button`
	border: none;
	outline: none !important;
	width: 100%;
	padding: 11px 15px;
	font-size: 17px;
	cursor: pointer;
	border-radius: 5px;
	background-color: #e0cfff;
	color: #3e236e;
`;

const PriceContainer = styled.div`
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 8px;
	border-radius: 5px;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	span {
		font-weight: 700;
		font-size: 18px;
	}

	.total {
		font-size: 30px;
	}
`;

const Notes = styled.div`
	padding: 20px;
	background-color: #fff;
	border-radius: 5px;

	p {
		margin-bottom: 10px;
		font-size: 18px;
		font-weight: 700;
	}

	span {
		color: #7c7c7c;
	}
`;
const Summary = styled.div`
	padding: 20px;
	background-color: #fff;
	border-radius: 5px;

	p {
		margin-bottom: 10px;
		font-size: 18px;
		font-weight: 700;
	}

	span {
		color: #7c7c7c;
	}
`;
// const PriceContainerDiv = styled.div`
// display: flex;
//     justify-content: space-between;
//     align-items: center;
// `

const ItemCard = styled.div`
	background-color: #ffffff;
	display: flex;
	justify-content: space-between;
	padding: 10px 0;
	width: 100%;
	border-bottom: 1px solid #e2e2e2;
`;

const ItemDetail = styled.div`
	p {
		font-weight: 700;
		color: #181725;
		margin-bottom: 5px;
	}

	span {
		font-weight: 300;
		color: #7c7c7c;
	}
`;

const ItemWeight = styled.span`
	font-weight: 700;
	color: #181725;
`;

const Stores = styled.div`
	display: flex;
	padding-top: 3%;
	gap: 30px;
	//   margin: 0 auto;
	width: 100%;
	justify-content: flex-start;
	//   padding-top: 30px;

	.appstore {
		width: 200px;
	}
	.playstore {
		width: 200px;
	}

	@media screen and (max-width: 576px) {
		.appstore {
			width: 170px;
		}
		.playstore {
			width: 170px;
		}
	}
`;

const Bottom = styled.div`
	display: flex;
`;

const Person = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	p {
		margin-bottom: 5px;
		margin-top: 0;
		font-weight: 700;
		font-size: 16px;
	}

	span {
		font-weight: 400;
		font-size: 14px;
		font-family: 'Oxygen', sans-serif;
		color: #7c7c7c;
		margin-top: 2px;
		line-height: 18px;
	}
`;
const DeliverySummary = ({ decreaseStep }) => {
	const { pickupvalue, delivervalue } = useSelector((state) => state.map);
	const {
		packageLocation,
		packageDestination,
		items,
		cost,
		deliveryBreakdown,
		note,
		currentDelivery,
		loading,
	} = useSelector((state) => state.order);
	const [isCancelModalOpen, toggleCancelModal] = React.useState(false);
	const [isTipModalOpen, toggleTipModal] = React.useState(false);
	const [isCompletedModalOpen, toggleCompletedModal] = React.useState(false);
	const [isTippedModalOpen, toggleTippedModal] = React.useState(false);
	const navigate = useNavigate();
	const { webToken } = useSelector((state) => state.general);
	const dispatch = useDispatch();
	const [show, setShow] = React.useState(false);

	const getWeight = () => {
		let weight = 0;

		items.map((item, index) => {
			weight += parseFloat(item.weight);
		});

		return weight;
	};
	const getCost = async () => {
		let data = {
			pickup: {
				longitude: packageLocation.lng + '',
				latitude: packageLocation.lat + '',
			},
			dropoff: {
				longitude: packageDestination.lng + '',
				latitude: packageDestination.lat + '',
			},
			type: 'delivery',
			deliveryWeight: getWeight(),
		};
		let cost = 0;
		try {
			const res = await dispatch(getCostBreakdown(data)).unwrap();
			// handle result here

			if (res.status === 'success') {
				dispatch(setDeliveryBreakdown(res.data.deliveryBreakdown));
			}
		} catch (err) {
			// handle error here
			console.error(err);
		}
	};
	useEffect(() => {
		getCost();
		let timer1 = setTimeout(() => setShow(true), 9000);
		let timer2 = setTimeout(() => toggleCompletedModal(true), 20000);

		// this will clear Timeout
		// when component unmount like in willComponentUnmount
		// and show will not change to true
		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, [cost]);

	const handleProceed = async () => {
		//toggleAuthModal(true);

		const data = {
			pickupCordinates: {
				longitude: packageLocation.lng + '',
				latitude: packageLocation.lat + '',
			},
			destinationCordinates: {
				longitude: packageDestination.lng + '',
				latitude: packageDestination.lat + '',
			},
			price:
				parseFloat(deliveryBreakdown?.deliveryCost) +
				parseFloat(deliveryBreakdown?.serviceCharge),
		};

		let submit = {
			data,
			id: currentDelivery.id,
		};

		const transactionData = {
			deliveryAmount: deliveryBreakdown?.deliveryCost,
			totalAmount: deliveryBreakdown?.deliveryCost,
			type: 'delivery',
			deliveryId: currentDelivery?.id,
		};
		try {
			const res = await dispatch(submitDelivery(submit)).unwrap();
			// handle result here
			console.log(res);
			if (res.status == 'success') {
				const transactionres = await dispatch(
					initializeTransaction(transactionData)
				).unwrap();

				if (transactionres.status == 'success') {
					dispatch(setSubmitDeliveryLoading('succeeded'));
					dispatch(setTransactionPayload(transactionres.data));
					dispatch(setPaymentModal(true));
					//navigate("/payment");
				}
			}
		} catch (err) {
			// handle error here
			console.error(err);
		}
	};

	return (
		<>
			<Container>
				<LeftContainer>
					<LocationDiv>
						<FormIcons />
						<LocationTextContainer>
							<div>
								<p>Pick up at?</p>
								<span>{pickupvalue.description}</span>
							</div>

							<div>
								<p>Deliver at?</p>
								<span>{delivervalue.description}</span>
							</div>
						</LocationTextContainer>
					</LocationDiv>
					<DeliveryListContainer>
						<DeliveryTitle>
							<h3>Your delivery items</h3>
							<div>
								{items.length === 0 ? (
									<div>0</div>
								) : (
									<span>{items.length}</span>
								)}
								<Edit cursor='pointer' onClick={() => decreaseStep()} />
							</div>
						</DeliveryTitle>
						<div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
							{items.length === 0 ? (
								<div>
									<Typography sx={{ textAlign: 'center' }}>
										{' '}
										No items added
									</Typography>
								</div>
							) : (
								items.map((item, i) => (
									<ItemCard key={i}>
										<ItemDetail>
											<p>{item.name}</p>
											<span>{item.description}</span>
										</ItemDetail>
										<ItemWeight>{item.weight}lbs</ItemWeight>
									</ItemCard>
								))
							)}
						</div>
					</DeliveryListContainer>
				</LeftContainer>

				<RightContainer>
					{loading === 'loading' && (
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								paddingTop: '2%',
							}}
						>
							<CircularProgress />
						</Box>
					)}
					{loading === 'succeeded' && (
						<PriceContainer>
							<div>
								<span>Price</span>
								<span>${deliveryBreakdown.deliveryCost}</span>
							</div>
							<div>
								<span>Service Charge</span>
								<span>${deliveryBreakdown.serviceCharge}</span>
							</div>
							<div>
								<span>Total</span>
								<span className='total'>
									$
									{(
										deliveryBreakdown.deliveryCost +
										parseFloat(deliveryBreakdown.serviceCharge)
									).toFixed(2)}
								</span>
							</div>
						</PriceContainer>
					)}

					<Notes>
						<p>Notes</p>

						{note === '' ? (
							<span> No notes added </span>
						) : (
							<span> {note} </span>
						)}
					</Notes>

					<Summary>
						{show ? (
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<Bottom>
									<div>
										<PersonIcon />
										<br />
										<br />
									</div>
									<Person>
										<p>Kolade David</p>
										<Box
											sx={{
												'& > legend': { mt: 2 },
											}}
										>
											<Rating
												name='read-only'
												value={4}
												readOnly
												size='large'
											/>
										</Box>
										{currentDelivery.completed ? (
											<span>Delivery completed</span>
										) : (
											<>
												<span>Delivery in progress</span>
												<ThreeDots
													height='30'
													width='30'
													radius='9'
													color='#3E236E'
													ariaLabel='three-dots-loading'
													wrapperStyle={{}}
													wrapperClassName=''
													visible={true}
												/>
											</>
										)}
									</Person>
								</Bottom>

								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
									}}
								>
									<div
										style={{
											backgroundColor: '#E0CFFF',
											width: '30px',
											height: '30px',
											display: 'flex',
											justifyContent: 'center',
											borderRadius: '20px',
											alignItems: 'center',
											alignSelf: 'flex-end',
										}}
									>
										<CallRoundedIcon style={{ color: '#6438B0' }} />
									</div>

									<p style={{ marginTop: 'auto' }}>+879 089 87889987</p>
								</div>
							</div>
						) : (
							<PaymentLoader text='Finding Driver ...' />
						)}

						<hr />
						<div style={{ display: ' flex', justifyContent: 'center' }}>
							<button
								onClick={() => toggleCancelModal(true)}
								style={{
									color: '#6438B0',
									fontWeight: 700,
									fontSize: '14px',
									lineHeight: '18px',
									textAlign: 'center',
									cursor: 'pointer',
									outline: 'inherit',
									border: 'none',
									background: 'none',
								}}
							>
								{' '}
								Cancel request
							</button>
						</div>
					</Summary>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<div style={{ display: 'flex', flexDirection: 'row' }}>
							<div
								style={{
									backgroundColor: '#E0CFFF',
									width: '30px',
									height: '30px',
									display: 'flex',
									justifyContent: 'center',
									borderRadius: '20px',
									alignItems: 'center',
								}}
							>
								<LocalShippingOutlinedIcon style={{ color: '#6438B0' }} />{' '}
							</div>

							<p style={{ marginLeft: '10px', color: '#6438B0' }}>
								Track Request
							</p>
						</div>
						<div>
							<ArrowForwardIosOutlinedIcon />
						</div>
					</Box>
					{!currentDelivery.paid && (
						<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<div
									style={{
										backgroundColor: '#E0CFFF',
										width: '30px',
										height: '30px',
										display: 'flex',
										justifyContent: 'center',
										borderRadius: '20px',
										alignItems: 'center',
									}}
								>
									<AccountBalanceIcon style={{ color: '#6438B0' }} />{' '}
								</div>

								<p style={{ marginLeft: '10px', color: '#6438B0' }}>Pay</p>
							</div>
							<div>
								<ArrowForwardIosOutlinedIcon />
							</div>
						</Box>
					)}
					<hr />

					<Stores>
						<Button onClick={(event) => console.log()}>Back To Homepage</Button>
						<Btn
							look='primary-filled'
							onClick={(event) => navigate('/profile')}
						>
							Done
						</Btn>
					</Stores>
				</RightContainer>
			</Container>

			{isCancelModalOpen && (
				<OrderView
					isOpen={isCancelModalOpen}
					closeModal={() => toggleCancelModal(false)}
					exact='CANCEL'
				/>
			)}
			{isTipModalOpen && (
				<OrderView
					isOpen={isTipModalOpen}
					closeModal={() => toggleTipModal(false)}
					exact='TIP_DRIVER'
				/>
			)}
			{isCompletedModalOpen && (
				<OrderView
					isOpen={isCompletedModalOpen}
					closeModal={() => toggleCompletedModal(false)}
					exact='DELIVERY_COMPLETE'
				/>
			)}
			{isTippedModalOpen && (
				<OrderView
					isOpen={isTippedModalOpen}
					closeModal={() => toggleTippedModal(false)}
					exact='DRIVER_TIPPED'
				/>
			)}
		</>
	);
};

export default DeliverySummary;
