import React, { useState } from 'react';
import Box from '@mui/material/Box';
import DrawerAppBar from '../components/Navbar';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';

import Chip from '@mui/material/Chip';
import CssBaseline from '@mui/material/CssBaseline';

import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';

import Footer from '../components/Footer';
import ColorButton from '../components/Button';

import { useDispatch, useSelector } from 'react-redux';
import { useJsApiLoader } from '@react-google-maps/api';

import {
	setpickUpValue,
	setpickupInputValue,
	setDeliverValue,
	setDeliverInputValue,
	setPickupOptions,
	setdeliverOptions,
} from '../redux/mapSlice';
import FormIcons from '../components/form-icons/form-icons';
import Community from './home/components/community';
import WhyBouk from './home/components/why-bouk';
import Support from './home/components/support';
import Testimonials from './home/components/testimonials';
import Cta from './home/components/cta';
import Partners from './home/components/partners';
import Offer from './home/components/offer';
import AuthView from '../features/auth-view/auth-view';

const styles = {
	heroContainer: {
		backgroundImage: `url(${'images/background2.png'})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'right',
		objectFit: 'contain',
	},
	leftContainer: {},
	iphone: {
		position: 'relative',
		top: '35%',
		height: '40vh',
		left: '30%',
		objectFit: 'cover',
	},
	section2: {
		backgroundColor: '#3e236e',
		padding: '40px 40px 50px',
		margin: '0 auto',
		fontFamily: 'Oxygen, sans-serif',
	},
};
const items = [
	{
		name: 'Random Name #1',
		description: 'Probably the most random thing you have ever seen!',
	},
	{
		name: 'Random Name #2',
		description: 'Hello World!',
	},
];
React.state = {
	name: '',

	email: '',

	buttonText: 'Send Message',
};

const autocompleteService = { current: null };
const libraries = ['places'];
const HomePage = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries: libraries,
	});
	var [isAuthModalOpen, toggleAuthModal] = React.useState(false);
	// if(!isLoaded) {
	//   return;
	// }
	// const google = window.google = window.google ? window.google : {}

	const loaded = React.useRef(false);
	const dispatch = useDispatch();
	const pickupData = useSelector((state) => state.map);

	const {
		pickupvalue,
		pickupinputValue,
		delivervalue,
		deliverinputValue,
		pickupoptions,
		deliveroptions,
	} = pickupData;

	const navigate = useNavigate();

	const [pickupInputError, setPickupInputError] = useState('');
	const [deliveryInputError, setDeliveryInputError] = useState('');

	const profileState = useSelector((store) => store.profile);
	const user = profileState.profile;

	const fetch = React.useMemo(
		() =>
			throttle((request, callback) => {
				autocompleteService.current.getPlacePredictions(request, callback);
			}, 200),
		[]
	);

	React.useEffect(
		() => {
			let active = true;

			if (!autocompleteService.current && window.google && isLoaded) {
				autocompleteService.current =
					new window.google.maps.places.AutocompleteService();
			}
			if (!autocompleteService.current) {
				return undefined;
			}
			if (pickupinputValue === '') {
				dispatch(setPickupOptions(pickupvalue ? [pickupvalue] : []));
				return undefined;
			}

			fetch({ input: pickupinputValue }, (results) => {
				if (active) {
					let newOptions = [];

					if (pickupvalue) {
						newOptions = [pickupvalue];
					}

					if (results) {
						newOptions = [...newOptions, ...results];
					}

					dispatch(setPickupOptions(newOptions));
				}
			});

			return () => {
				active = false;
			};
		},
		// eslint-disable-next-line
		[pickupvalue, pickupinputValue, fetch]
	);

	React.useEffect(
		() => {
			let active = true;

			if (!autocompleteService.current && window.google && isLoaded) {
				autocompleteService.current =
					new window.google.maps.places.AutocompleteService();
			}

			if (!autocompleteService.current) {
				return undefined;
			}

			if (deliverinputValue === '') {
				dispatch(setdeliverOptions(delivervalue ? [delivervalue] : []));
				return undefined;
			}

			fetch({ input: deliverinputValue }, (results) => {
				if (active) {
					let newOptions = [];

					if (delivervalue) {
						newOptions = [delivervalue];
					}

					if (results) {
						newOptions = [...newOptions, ...results];
					}

					dispatch(setdeliverOptions(newOptions));
				}
			});

			return () => {
				active = false;
			};
		},
		// eslint-disable-next-line

		[delivervalue, deliverinputValue, fetch]
	);
	if (!isLoaded) return '';

	const handleNavigate = () =>
		navigate(`/delivery-steps`, {
			state: {
				pickupData,
				step: 1,
			},
		});

	const handleSubmit = () => {
		if (!delivervalue) setDeliveryInputError('Enter delivery address');
		if (!pickupvalue) setPickupInputError('Enter pick up address');

		if (user && Object.keys(user).length > 0) {
			if (pickupvalue && delivervalue) {
				// Clear state
				setDeliveryInputError('');
				setPickupInputError('');

				handleNavigate();
			}
			return;
		}

		toggleAuthModal(true); // Display Login Modal
		// if (pickupvalue && delivervalue) {
		// 	// Clear state
		// 	setDeliveryInputError('');
		// 	setPickupInputError('');

		// 	toggleAuthModal(true);
		// }
	};

	return (
		<div className='app'>
			<CssBaseline />
			<DrawerAppBar />
			<Box
				sx={{
					position: 'relative',
				}}
				component='main'
			>
				<Box
					sx={{
						position: 'relative',
						minHeight: ['640px'],
						width: '100%',
						overflow: 'hidden',
						paddingBottom: ['2rem'],
						display: 'flex',
					}}
				>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: ['1fr', '1fr', 'repeat(2, 1fr)'],
							maxWidth: '1200px',
							width: '100%',
							height: '100%',
							margin: 'auto',
						}}
					>
						<Box
							sx={{
								padding: { xs: '0px 15px', sm: '0px 15px 2rem', lg: '0px' },
							}}
						>
							<Chip
								sx={{
									backgroundColor: '#E0CFFF',
									color: '#884DF0',
								}}
								label='Coming soon'
							/>
							<Typography
								variant='h2'
								sx={{
									fontWeight: '500',
									fontSize: ['36px', '48px', '56px'],
									margin: '15px 0px',
								}}
							>
								Avoid the trip
								<br />
								Leave it to us
							</Typography>
							<Typography variant='subtitle1'>
								Request an item pick up, or order from any location/website and
								we will deliver
							</Typography>
							<Box
								style={{
									display: 'flex',
									gap: '10px',
									marginTop: '25px',
								}}
							>
								<Box sx={{ marginTop: '8px' }}>
									<FormIcons />
								</Box>

								<Box
									component='form'
									sx={{
										flex: '1',
										display: 'grid',
										gap: '20px',
										'& .MuiTextField-root': { m: 0, width: '100%' },
									}}
									noValidate
									autoComplete='off'
								>
									<Box>
										<Autocomplete
											id='pick up'
											sx={{ width: '100%' }}
											getOptionLabel={(option) =>
												typeof option === 'string' ? option : option.description
											}
											filterOptions={(x) => x}
											options={pickupoptions}
											autoComplete
											includeInputInList
											filterSelectedOptions
											value={pickupvalue}
											onChange={(event, newValue) => {
												dispatch(
													setPickupOptions(
														newValue
															? [newValue, ...pickupoptions]
															: pickupoptions
													)
												);

												dispatch(setpickUpValue(newValue));
											}}
											onInputChange={(event, newInputValue) => {
												dispatch(setpickupInputValue(newInputValue));
												setPickupInputError('');
											}}
											renderInput={(params) => (
												<TextField
													{...params}
													required
													id='standard-required'
													label='Pick up item at?'
													InputLabelProps={{
														shrink: true,
													}}
													defaultValue=''
													variant='standard'
													size='medium'
													placeholder='Enter pick up address'
													fullWidth
													style={{ width: '100%' }}
													helperText={pickupInputError}
													error={Boolean(pickupInputError)}
												/>
											)}
											renderOption={(props, option) => {
												const matches =
													option.structured_formatting
														.main_text_matched_substrings;
												const parts = parse(
													option.structured_formatting.main_text,
													matches.map((match) => [
														match.offset,
														match.offset + match.length,
													])
												);

												return (
													<li {...props}>
														<Grid container alignItems='center'>
															<Grid item>
																<Box
																	component={LocationOnIcon}
																	sx={{ color: 'text.secondary', mr: 2 }}
																/>
															</Grid>
															<Grid item xs>
																{parts.map((part, index) => (
																	<span
																		key={index}
																		style={{
																			fontWeight: part.highlight ? 700 : 400,
																		}}
																	>
																		{part.text}
																	</span>
																))}

																<Typography
																	variant='body2'
																	color='text.secondary'
																>
																	{option.structured_formatting.secondary_text}
																</Typography>
															</Grid>
														</Grid>
													</li>
												);
											}}
										/>
									</Box>

									<Box>
										<Autocomplete
											id='delivery'
											sx={{ width: '100%' }}
											getOptionLabel={(option) =>
												typeof option === 'string' ? option : option.description
											}
											filterOptions={(x) => x}
											options={deliveroptions}
											autoComplete
											includeInputInList
											filterSelectedOptions
											value={delivervalue}
											onChange={(event, newValue) => {
												dispatch(
													setdeliverOptions(
														newValue
															? [newValue, ...deliveroptions]
															: deliveroptions
													)
												);
												dispatch(setDeliverValue(newValue));
											}}
											onInputChange={(event, newInputValue) => {
												dispatch(setDeliverInputValue(newInputValue));
												setDeliveryInputError('');
											}}
											renderInput={(params) => (
												<TextField
													{...params}
													required
													id='standard-required'
													label='Deliver Item at'
													InputLabelProps={{
														shrink: true,
													}}
													defaultValue=''
													variant='standard'
													size='medium'
													placeholder='Enter delivery address'
													fullWidth
													value={React.state.name}
													style={{ width: '100%' }}
													helperText={deliveryInputError}
													error={Boolean(deliveryInputError)}
												/>
											)}
											renderOption={(props, option) => {
												const matches =
													option.structured_formatting
														.main_text_matched_substrings;
												const parts = parse(
													option.structured_formatting.main_text,
													matches.map((match) => [
														match.offset,
														match.offset + match.length,
													])
												);

												return (
													<li {...props}>
														<Grid container alignItems='center'>
															<Grid item>
																<Box
																	component={LocationOnIcon}
																	sx={{ color: 'text.secondary', mr: 2 }}
																/>
															</Grid>
															<Grid item xs>
																{parts.map((part, index) => (
																	<span
																		key={index}
																		style={{
																			fontWeight: part.highlight ? 700 : 400,
																		}}
																	>
																		{part.text}
																	</span>
																))}

																<Typography
																	variant='body2'
																	color='text.secondary'
																>
																	{option.structured_formatting.secondary_text}
																</Typography>
															</Grid>
														</Grid>
													</li>
												);
											}}
										/>
									</Box>

									<ColorButton width='100%' onClick={handleSubmit}>
										Get started
									</ColorButton>
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								height: ['420px', '420px', '540px', '580px'],
								width: { xs: '100%', md: '50%' },
								position: { xs: 'relative', md: 'absolute' },
								right: '0px',
								top: '0px',
								// bottom: '0px',
								backgroundSize: ['180%'],
							}}
							style={styles.heroContainer}
						></Box>
					</Box>
				</Box>

				<Community />
				{/* <WhyBouk /> */}
				<WhyBouk />
				<Offer />
				<Support />
				<Testimonials />
				<Cta />
				<Partners />
				<Footer />
			</Box>
			{isAuthModalOpen && (
				<AuthView
					isOpen={isAuthModalOpen}
					closeModal={() => toggleAuthModal(false)}
					exact='SIGNIN'
					callback={handleNavigate}
				/>
			)}
		</div>
	);
};

export default HomePage;
