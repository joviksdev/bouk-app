import React, {
	useImperativeHandle,
	forwardRef,
	useState,
	useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Box,
	Typography,
	CircularProgress,
	Button as MuiButton,
	Alert,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import {
	GoogleMap,
	Marker,
	Circle,
	DirectionsRenderer,
} from '@react-google-maps/api';
import ModalLayout from '../modal/modal-layout';
import { useCancelDelivery } from '../../hooks';
import { onMessageListener } from '../../messaging_init_in_sw';
import DriverInformation from './driver-information';
import { getDeliveryDriverCoordinate } from '../../redux/orderSlice';

const DELIVERY_STATUS = {
	Canceled: 'canceled',
	Pickedup: 'picked-up',
	Accepted: 'accepted',
};

const center = {
	lat: 0,
	lng: -180,
};

const circleOptions = {
	fillColor: 'coral',
	fillOpacity: 0.3,
	strokeWeight: 2,
	strokeColor: 'coral',
	clickable: false,
	editable: true,
	zIndex: 1,
};

const mapOptions = {
	mapId: '8eed96cf7d7126b4',
	disableDefaultUI: true,
	clickableIcons: false,
};

const radius = 10000;

const Button = ({ text, onClick, loading, ...rest }) => {
	return (
		<MuiButton
			{...rest}
			sx={{
				textTransform: 'unset !important',
				backgroundColor: '#3E236E !important',
				color: 'white',
				minWidth: '140px',
			}}
			onClick={onClick}
		>
			{loading ? 'Processing...' : text}
		</MuiButton>
	);
};

const PickupDriverLookup = (props, ref) => {
	const [isDisplay, setDisplay] = useState(false);
	const [isDeliveryPickup, setDeliveryPickup] = useState(false);
	const [driverCoordinates, setDriverCoordinates] = useState(null);
	const [driverDetails, setDriverDetails] = useState(null);
	const [directions, setDirections] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const deliveryId = props?.deliveryId;
	const message = props?.message;

	const google = (window.google = window.google ? window.google : {});
	const pickupCoordinate = props.pickupCoordinate;

	const handleGoHome = () => {
		setDisplay(false);
		navigate('/');
	};

	const {
		cancelDelivery,
		isLoading: isCancelingDelivery,
		closeError,
		cancelDeliveryError,
	} = useCancelDelivery(() => {
		console.log('cancelling delivery');
		handleGoHome();
	});

	const getRoute = async () => {
		const service = new google.maps.DirectionsService();

		try {
			// Get Driver coordinates
			const response = await dispatch(
				getDeliveryDriverCoordinate(deliveryId)
			).unwrap();
			if (response.status === 'successful') {
				const data = response.data;
				const destination = {
					lat: parseFloat(data.coordinates.latitude),
					lng: parseFloat(data.coordinates.longitude),
				};

				setDriverCoordinates(destination);
				service.route(
					{
						origin: destination,
						destination: pickupCoordinate,
						travelMode: google.maps.TravelMode.DRIVING,
					},
					(result, status) => {
						if (status === 'OK' && result) {
							setDirections(result);
						}
					}
				);
			}
		} catch (error) {
			console.log(`${error}`);
		}
	};

	useEffect(
		() => {
			const interval = setInterval(() => {
				if (driverDetails) {
					getRoute();
				}
			}, 5000);

			return () => {
				clearInterval(interval);
			};
		},

		// eslint-disable-next-line
		[driverDetails]
	);

	onMessageListener()
		.then((payload) => {
			const data = payload.data && JSON.parse(JSON.stringify(payload.data));

			if (data) {
				if (data.deliveryStatus === DELIVERY_STATUS.Accepted) {
					const body = JSON.parse(JSON.parse(JSON.stringify(data.body)));

					setDriverDetails(body);
				}

				if (data.deliveryStatus === DELIVERY_STATUS.Pickedup) {
					setDeliveryPickup(true);
				}

				if (data.deliveryStatus === DELIVERY_STATUS.Canceled) {
				}
			}
		})
		.catch((err) => console.log('failed: ', err));

	useImperativeHandle(
		ref,
		() => ({
			init: () => {
				setDisplay(true);
			},
		}),
		[]
	);

	const closeModal = () => setDisplay(false);
	const handleCanDelivery = () => cancelDelivery(deliveryId);

	if (isDisplay) {
		return (
			<ModalLayout
				isOpen={isDisplay}
				sx={{
					maxWidth: '640px',
				}}
				hasCloseButton={false}
				closeModal={closeModal}
			>
				{message && (
					<Alert
						sx={{
							marginBottom: '25px',
						}}
						severity={'success'}
					>
						{message}
					</Alert>
				)}
				{cancelDeliveryError && (
					<Alert
						onClose={() => {
							closeError();
						}}
						sx={{
							marginBottom: '25px',
						}}
						severity={'error'}
					>
						{cancelDeliveryError}
					</Alert>
				)}

				<Box
					sx={{
						marginBottom: '25px',
					}}
				>
					<GoogleMap
						zoom={10}
						center={pickupCoordinate}
						mapContainerStyle={{
							width: '100%',
							height: 360,
							borderRadius: 4,
							display: 'block',
						}}
						options={mapOptions}
					>
						{driverCoordinates ? (
							<>
								<DirectionsRenderer
									directions={directions}
									options={{
										polylineOptions: {
											zIndex: 50,
											strokeColor: '#1976D2',
											strokeWeight: 5,
										},
									}}
								/>
								<Marker
									position={driverCoordinates}
									icon={'https://maps.google.com/mapfiles/ms/micons/cabs.png'}
								/>
								<Marker position={pickupCoordinate} />
							</>
						) : (
							<>
								<Marker position={pickupCoordinate} />
								<Circle
									center={pickupCoordinate}
									radius={radius}
									options={circleOptions}
								/>
							</>
						)}
					</GoogleMap>
				</Box>

				{driverDetails ? (
					<Box>
						<DriverInformation
							isDeliveryPickup={isDeliveryPickup}
							driver={driverDetails}
						/>

						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: 'repeat(2, 1fr)',
								gap: '15px',
								marginTop: '30px',
							}}
						>
							<Button
								text={'View Pickup History'}
								onClick={() => {
									closeModal();
									navigate('/profile');
								}}
							/>
							<Button
								text={'Close'}
								onClick={() => {
									closeModal();
									navigate('/');
								}}
							/>
						</Box>
					</Box>
				) : (
					<>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '20px',
								marginTop: '20px',
								width: '100%',
							}}
						>
							<Typography>Looking for nearby Driver...</Typography>
							<CircularProgress />
							<Box
								sx={{
									display: 'flex',
									gap: '15px',
								}}
							>
								<Button
									onClick={handleGoHome}
									disabled={isCancelingDelivery}
									text={'Back to Home'}
								/>
								<Button
									onClick={handleCanDelivery}
									disabled={isCancelingDelivery}
									loading={isCancelingDelivery}
									text={'Cancel Delivery'}
								/>
							</Box>
						</Box>
					</>
				)}
			</ModalLayout>
		);
	}

	return null;
};

export default forwardRef(PickupDriverLookup);
