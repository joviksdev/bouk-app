import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, TextField, Checkbox, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import FormIcons from '../../../components/form-icons/form-icons';
import FormInput from '../../../components/form-input/form-input';
import SectionDivider from '../../../components/section-divider/section-divider';
import { ReactComponent as Clear } from '../../../assets/clear.svg';
import DeliveryItemCard from '../../../components/delivery-item-card/delivery-item-card';
import Btn from '../../../components/btn/btn';
import FormUploadInput from '../../../components/form-upload-input/form-upload-input';
import { useDispatch, useSelector } from 'react-redux';
import AppAlert from '../../../components/alert';
import {
	addItem,
	removeItem,
	setNote,
	createDelivery,
} from '../../../redux/orderSlice';
import {
	setpickUpValue,
	setpickupInputValue,
	setDeliverValue,
	setDeliverInputValue,
	setPickupOptions,
	setdeliverOptions,
	setReceiverName,
	setReceiverNumber,
} from '../../../redux/mapSlice';

import CircularProgress from '@mui/material/CircularProgress';
const Label = styled.label`
	font-size: 16px;
	font-weight: 700;
	color: #181725;
	margin-left: 5px;
`;

const ButtonGroup = ({
	handleGoBack,
	loading = false,
	handleAddItem,
	items,
	handleSubmit,
	sx = {},
}) => {
	return (
		<Box
			sx={{
				display: 'grid',
				gap: '25px',
				...sx,
			}}
		>
			<Button
				variant={'small'}
				sx={{
					backgroundColor: '#EFE5FF !important',
					color: '#6438b0',
					justifySelf: 'flex-start',
					textTransform: 'capitalize',
				}}
				onClick={handleAddItem}
			>
				{items.length > 0 ? 'Add another item' : 'Add item'}
			</Button>

			<Btn type='button' look='primary-filled' onClick={handleSubmit}>
				{loading === 'loading' ? (
					<CircularProgress size={'16px'} />
				) : (
					'Continue'
				)}
			</Btn>

			<Button
				sx={{
					justifySelf: 'center',
					textTransform: 'capitalize',
					color: 'black',
				}}
				onClick={handleGoBack}
			>
				Back
			</Button>
		</Box>
	);
};

const AddDeliveryItems = ({ increaseStep, decreaseStep }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const profile = useSelector((store) => store.profile.profile);
	const location = useLocation();

	const alertRef = useRef(null);

	const statePickupData = location.state?.pickupData;

	const { loading, error: orderError } = useSelector((state) => state.order);
	const {
		items,
		note,
		destinationName,
		destinationPhoneNumber,
		packageLocation,
		packageDestination,
	} = useSelector((state) => state.order);

	const pickupData = useSelector((state) => state.map);
	const { pickupvalue, delivervalue, receivername, receivernumber } =
		pickupData;

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

	const [isImageInputOpen, setIsImageInputOpen] = React.useState(false);
	const [isNoteOpen, setIsNoteOpen] = React.useState(false);
	const [error, setError] = React.useState('');
	const [itemDetail, setItemDetail] = React.useState({
		name: '',
		description: '',
		weight: '',
	});

	const [errors, setErrors] = useState({
		name: '',
		description: '',
		weight: '',
	});

	const [alert, setAlert] = useState('');

	const [image, setImage] = React.useState();
	function handleChange(name, value) {
		setItemDetail((prev) => ({ ...prev, [name]: value }));
	}
	function handleNote({ target: { name, value } }) {
		dispatch(setNote(value));
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (items && Array.isArray(items) && items.length === 0) {
			return alertRef.current.show({
				message: 'Please a delivery item.',
				type: 'info',
			});
		}

		if (!image)
			return alertRef.current.show({
				message: 'Please upload item image',
				type: 'info',
			});
		if (!note)
			return alertRef.current.show({
				message: 'Please add a note about item(s)',
				type: 'info',
			});

		setAlert('');

		const formData = new FormData();

		const package_location = `lat: ${statePickupData.pickupCoordinate.lat}, lng: ${statePickupData.pickupCoordinate.lng}`;
		const package_destination = `lat: ${statePickupData.deliveryCoordinate.lat}, lng: ${statePickupData.deliveryCoordinate.lng}`;

		formData.append('package_location', package_location);
		formData.append('package_destination', package_destination);
		formData.append('destination_formatted_address', delivervalue.description);
		formData.append('destination_name', receivername);
		formData.append('destination_phone_number', receivernumber);
		formData.append('location_formatted_address', pickupvalue.description);
		formData.append('location_name', profile.name);
		formData.append('location_phone_number', profile.phoneNumber);
		formData.append('note', note);

		const weights = items.map((value) => value.weight).join(' ');
		const description = items.map((value) => value.description).join(', ');
		const packageNames = items.map((value) => value.name).join(',');

		formData.append('files', image);
		formData.append('weights', weights);
		formData.append('description', description);
		formData.append('package_names', packageNames);

		try {
			const res = await dispatch(createDelivery(formData)).unwrap();
			// handle result here
			if (res.status === 'successful') {
				const deliveryData = res.data;

				navigate(`/delivery-steps`, {
					state: {
						pickupData: {
							...statePickupData,
							deliveryData,
							items,
							note,
						},

						step: 3,
					},
				});
			}
		} catch (error) {
			return alertRef.current.show({
				message: `${error.message}`,
				type: 'error',
			});
		}
	};

	const handleImageUpload = (e) => {
		// setImage({
		//   url: URL.createObjectURL(e.target.files[0]),
		//   name: e.target.files[0].name,
		// });
		setImage(e.target.files[0]);
	};

	const handleGoBack = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	const handleSetErrors = (name, value) => {
		if (!name && !value) {
			setErrors({
				name: '',
				description: '',
				weight: '',
			});

			return;
		}
		setErrors((prev) => ({ ...prev, [name]: value }));
	};

	const handleAddItem = (e) => {
		e.preventDefault();

		if (!itemDetail.name) handleSetErrors('name', 'Enter item name');

		if (!itemDetail.description)
			handleSetErrors('description', 'Enter item description');
		if (!itemDetail.weight) handleSetErrors('weight', 'Enter item weight');

		if (itemDetail.name && itemDetail.description && itemDetail.weight) {
			dispatch(addItem(itemDetail));

			handleSetErrors();
			setItemDetail({
				name: '',
				description: '',
				weight: '',
			});
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: {
					xs: 'column',
					md: 'row',
				},
				gap: ['20px', '2rem', '3rem'],
			}}
		>
			<Box flex={'1'}>
				<Typography
					sx={{
						marginBottom: '30px',
					}}
					variant={'body1'}
				>
					Please enter details of the items you want to send for delivery. You
					can add multiple items.
				</Typography>
				<AppAlert ref={alertRef} sx={{ marginBottom: '25px' }} />

				<Box
					sx={{
						display: 'flex',
						gap: '20px',
					}}
				>
					<FormIcons
						lineStyle={{
							height: errors.name ? '80px' : '60px',
						}}
					/>

					<Box
						sx={{
							display: 'grid',
							gap: '25px',
							flex: '1',
						}}
						component={'form'}
					>
						<Box>
							<Typography sx={{ marginBottom: '6px' }}>Item</Typography>
							<TextField
								type='text'
								variant={'standard'}
								fullWidth
								placeholder='Name/Description of item'
								value={itemDetail.name}
								onChange={(e) => {
									handleSetErrors('name', ''); // Clear error on input chnage
									setItemDetail((prev) => ({ ...prev, name: e.target.value }));
								}}
								helperText={errors.name}
								error={Boolean(errors.name)}
							/>
						</Box>
						<Box>
							<Typography sx={{ marginBottom: '6px' }}>Description</Typography>
							<TextField
								fullWidth
								variant={'standard'}
								placeholder='Enter item description'
								value={itemDetail.description}
								onChange={(e) => {
									handleSetErrors('description', '');
									handleChange('description', e.target.value);
								}}
								helperText={errors.description}
								error={Boolean(errors.description)}
							/>
						</Box>
						<Box>
							<Typography sx={{ marginBottom: '6px' }}>
								Item Weight (pounds/lbs)
							</Typography>
							<TextField
								type='number'
								fullWidth
								variant={'standard'}
								placeholder='0'
								value={itemDetail.weight}
								onChange={(e) => {
									handleSetErrors('weight', '');
									handleChange('weight', e.target.value);
								}}
								helperText={errors.weight}
								error={Boolean(errors.weight)}
							/>
						</Box>
						<ButtonGroup
							sx={{
								display: {
									xs: 'none',
									md: 'grid',
								},
							}}
							handleAddItem={handleAddItem}
							loading={loading}
							handleSubmit={handleSubmit}
							handleGoBack={handleGoBack}
							items={items}
						/>
					</Box>
				</Box>
			</Box>

			<SectionDivider
				sx={{
					display: {
						xs: 'none',
						md: 'block',
					},
				}}
			/>
			{/* <Box className={styles.second}>{EmptyState()}</Box> */}

			{items && Array.isArray(items) && items.length > 0 ? (
				<Box sx={{ flex: 1 }}>
					<Box
						sx={{
							flex: '1',
							display: 'grid',
							gap: '10px',
						}}
					>
						<Typography
							sx={{ fontWeight: 'bold', marginBottom: '8px' }}
							variant={'h5'}
						>
							Your delivery items
						</Typography>
						<Box
							sx={{
								display: 'grid',
								gap: '8px',
							}}
						>
							{items.map((item, i) => {
								return (
									<Box
										key={i}
										sx={{
											display: 'flex',
											gap: '8px',
										}}
									>
										<DeliveryItemCard item={item} key={i} />
										<Clear
											cursor='pointer'
											onClick={() => {
												dispatch(removeItem(i));
											}}
										/>
									</Box>
								);
							})}
						</Box>
						<Box>
							<Box
								sx={{
									display: 'flex',
									gap: '8px',
									alignItems: 'center',
								}}
							>
								<Checkbox
									checked={isImageInputOpen}
									onChange={(e) => setIsImageInputOpen(e.target.checked)}
								/>{' '}
								<Typography variant={'body1'}>
									Upload receipt/Item Image
								</Typography>
							</Box>

							{isImageInputOpen && (
								<Box
									style={{
										marginTop: '10px',
									}}
								>
									<FormUploadInput
										onChange={handleImageUpload}
										image={image}
										setImage={setImage}
									/>
								</Box>
							)}
						</Box>
						<Box>
							<Box
								sx={{
									display: 'flex',
									gap: '8px',
									alignItems: 'center',
								}}
							>
								<Checkbox
									checked={isNoteOpen}
									onChange={(e) => setIsNoteOpen(e.target.checked)}
								/>{' '}
								<Typography variant={'body1'}>Add notes</Typography>
							</Box>

							{isNoteOpen && (
								<Box
									style={{
										paddingTop: '10px',
									}}
								>
									<FormInput
										type='text'
										name='note'
										placeholder='Add some additional notes here'
										value={note}
										onChange={handleNote}
									/>
								</Box>
							)}
						</Box>
					</Box>
				</Box>
			) : (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						gap: '20px',
						flex: '1',
					}}
				>
					<Box
						sx={{
							maxWidth: '320px',
							img: {
								width: '100%',
							},
						}}
					>
						<img
							src='images/illustration---shopping--e-commerce---purchase--shopping--shop--@2x.svg'
							alt=''
						/>
					</Box>
					<Typography
						sx={{
							textAlign: 'center',
							maxWidth: '240px',
						}}
					>
						{' '}
						Items added to your package will appear here
					</Typography>
				</Box>
			)}
			<ButtonGroup
				sx={{
					display: {
						xs: 'grid',
						md: 'none',
					},
				}}
				handleAddItem={handleAddItem}
				loading={loading}
				handleSubmit={handleSubmit}
				handleGoBack={handleGoBack}
				items={items}
			/>
		</Box>
	);
};

export default AddDeliveryItems;
