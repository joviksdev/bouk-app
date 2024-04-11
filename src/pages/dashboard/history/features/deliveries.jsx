import * as React from 'react';
import styled from '@emotion/styled';
import FormInput from '../../../../components/form-input/form-input';
import { DeliveriesData } from '../features/data';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { getDeliveries } from '../../../../redux/orderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Rings } from 'react-loader-spinner';

const OrdersContainer = styled.div`
	padding: 20px 30px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;

	@media screen and (max-width: 1100px) {
		display: flex;
		flex-direction: column;
	}
`;

const FirstSection = styled.div`
	// padding: 0;
`;

const OrdersCard = styled.div`
	background: #ffffff;
	border: 1px solid #e2e2e2;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 15px 0 0 0;
`;

const StyledOrder = styled.div`
	display: flex;
	justify-content: space-between;
	border-right: 3px solid #6438b0;
	padding: 0 15px;

	& > div:nth-of-type(1) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		p {
			font-weight: 700;
			font-size: 14px;
			color: #6438b0;
			font-family: 'Oxygen', sans-serif;
		}

		span {
			font-weight: 400;
			font-size: 12px;
			color: #7c7c7c;
			font-family: 'Oxygen', sans-serif;
		}
	}

	& > div:nth-of-type(2) {
		display: flex;
		align-items: end;
		justify-content: space-between;
		flex-direction: column;
		font-size: 17px;

		span {
			font-weight: 700;
			font-size: 14px;
			color: #6438b0;
			font-family: 'Oxygen', sans-serif;
		}
	}

	& > div:nth-of-type(2) {
		font-weight: 700;
		font-size: 14px;
		color: #181725;
	}
`;

const SectionDivider = styled.div`
	background: #e2e2e2;
	height: 1px;
	width: 92%;
	margin: 0 auto;
`;

const SecondSection = styled.div`
	background: #ffffff;
	border: 1px solid #e2e2e2;
	border-radius: 4px;

	& > div:nth-of-type(1) {
		display: flex;
		justify-content: space-between;
		background: #fffce5;
		border-bottom: 1px solid #e2e2e2;
		padding: 20px;
		border-radius: 4px 4px 0 0;

		& > div:nth-of-type(1) {
			p {
				font-weight: 700;
				font-size: 15px;
				color: #181725;
				font-family: 'Oxygen', sans-serif;
			}

			span {
				font-weight: 700;
				font-size: 12px;
				color: #7c7c7c;

				span {
					font-weight: 400;
					font-size: 12px;
					color: #7c7c7c;
					margin-right: 5px;
				}
			}
		}

		& > div:nth-of-type(2) {
			display: flex;
			flex-direction: column;
			align-items: end;
			justify-content: space-between;

			& > span:nth-of-type(1) {
				font-weight: 700;
				font-size: 15px;
				color: #181725;
			}

			& > span:nth-of-type(2) {
				font-weight: 700;
				font-size: 12px;
				color: #7c7c7c;
			}
		}
	}

	& > div:nth-of-type(2) {
		padding: 15px 20px;

		& > p:nth-of-type(1) {
			font-weight: 400;
			font-size: 18px;
			color: #181725;
			font-family: 'Oxygen', sans-serif;
			padding-bottom: 5px;
		}

		& > span:nth-of-type(1) {
			font-weight: 700;
			font-size: 15px;
			color: #181725;
		}

		& > span:nth-of-type(2) {
			display: block;
			font-weight: 400;
			font-size: 12px;
			color: #7c7c7c;
			border-bottom: 1px solid #e2e2e2;
			padding-bottom: 10px;
		}

		& > p:nth-of-type(2) {
			font-weight: 400;
			font-size: 18px;
			color: #181725;
			font-family: 'Oxygen', sans-serif;
			padding-bottom: 5px;
			padding-top: 10px;
		}
	}
`;

const ItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const ItemCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 5px 0;
	width: 100%;

	p {
		font-weight: 700;
		font-size: 14px;
		color: #181725;
		font-family: 'Oxygen', sans-serif;
	}

	span {
		font-weight: 700;
		font-size: 12px;
		color: #7c7c7c;
		font-family: 'Oxygen', sans-serif;
	}
`;

const Deliveries = () => {
	const [currentView, setCurrentView] = React.useState(1);
	const [deliveryData, setDeliveryData] = React.useState([]);
	const [state, setstate] = React.useState({
		query: '',
		list: [],
	});

	const dispatch = useDispatch();
	const handleChange = (e) => {
		const results = deliveryData.filter((data) => {
			if (e.target.value === '') return data;
			return data.description
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
		});
		setstate({
			query: e.target.value,
			list: results,
		});
	};
	const getData = async () => {
		try {
			const res = await dispatch(getDeliveries()).unwrap();
			if (res.status === 'success') {
				const data = res.data.slice(0, 11).sort(function (x, y) {
					return new Date(x.createdTimestamp) < new Date(y.createdTimestamp)
						? 1
						: -1;
				});
				console.log(data);
				setDeliveryData(data);
				setstate({ list: data });
			}
		} catch (err) {
			console.log(err);
		}
	};

	React.useEffect(
		() => {
			getData();
		},
		// eslint-disable-next-line
		[]
	);

	return (
		<OrdersContainer>
			<FirstSection>
				<div>
					<FormInput
						placeholder='Search Deliveries'
						label='search'
						type='text'
						name='search'
						value={state.query}
						onChange={handleChange}
					/>
					<OrdersCard>
						{state.list.length === 0 ? (
							<div>
								<Rings
									height='80'
									width='80'
									color='#3E236E'
									radius='6'
									wrapperStyle={{}}
									wrapperClass=''
									visible={true}
									ariaLabel='rings-loading'
								/>
							</div>
						) : (
							state.list.map((order, i) => (
								<>
									<StyledOrder key={i}>
										<div>
											<p>{order.description}</p>
											<span>{order.createdTimestamp}</span>
										</div>
										<div>
											<span>{order.cashPaid}</span>
											<MdKeyboardArrowRight
												onClick={() => setCurrentView(order.deliveryId)}
												cursor='pointer'
											/>
										</div>
									</StyledOrder>
									<SectionDivider />
								</>
							))
						)}
					</OrdersCard>
				</div>
			</FirstSection>
			<SecondSection>
				{state.list
					.filter((delivery) => delivery.id === currentView)
					.map((data, i) => (
						<>
							<div>
								<div>
									<p>{data.description}</p>
									<span>
										<span>Ordered:</span>
										{data.createdTimestamp}
									</span>
								</div>
								<div>
									<span>{data.cashPaid}</span>
									<span>{data.completed ? 'Completed' : 'Uncompleted'}</span>
								</div>
							</div>
							<div>
								<p>Deliver to</p>
								<span>{data.customerName}</span>
								<span>{data.packageLocation.address}</span>

								<p>Delivery Items</p>
								<ItemsContainer>
									{data.items.map((item, i) => (
										<ItemCard key={i}>
											<p>{item.packageName}</p>
											<span>{item.weight}</span>
										</ItemCard>
									))}
								</ItemsContainer>
							</div>
						</>
					))}
			</SecondSection>
		</OrdersContainer>
	);
};

export default Deliveries;
