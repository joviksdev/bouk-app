import React, {
	useState,
	useMemo,
	useCallback,
	useRef,
	useEffect,
} from 'react';
import Geocode from 'react-geocode';
import Btn from '../../../components/btn/btn';
import FormIcons from '../../../components/form-icons/form-icons';

import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import Chip from '@mui/material/Chip';
import mapStyles from './mapStyles';
import {
	GoogleMap,
	Marker,
	DirectionsRenderer,
	useJsApiLoader,
} from '@react-google-maps/api';

import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import { useNavigate, useLocation } from 'react-router-dom';

import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';

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
import {
	setPackageDestination,
	setPackageLocation,
} from '../../../redux/orderSlice';

import { useDispatch, useSelector } from 'react-redux';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const autocompleteService = { current: null };

const libraries = ['places'];
const mapContainerStyle = {
	height: '100vh',
	width: '100vw',
};
const options = {
	styles: mapStyles,
	disableDefaultUI: true,
	zoomControl: true,
};
const center = {
	lat: 43.6532,
	lng: -79.3832,
};

const PickupDeliveryDetails = ({ increaseStep }) => {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries: libraries,
	});

	const location = useLocation();
	const navigate = useNavigate();
	const statePickupData = location.state?.pickupData;

	const [errors, setErrors] = useState({
		deliveryAddress: '',
		pickupAddress: '',
		recipientName: '',
		recipientPhone: '',
	});

	const dispatch = useDispatch();
	Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

	// set response language. Defaults to english.
	Geocode.setLanguage('en');

	const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
	const [directions, setDirections] = useState();
	const [p, setP] = useState();
	const [d, setD] = useState();
	const google = (window.google = window.google ? window.google : {});
	const options = useMemo(
		() => ({
			mapId: '8eed96cf7d7126b4',
			disableDefaultUI: true,
			clickableIcons: false,
		}),
		[]
	);
	const mapRef = useRef();
	const onLoad = useCallback(
		(map) => (mapRef.current = map),

		[]
	);
	const fetch = React.useMemo(
		() =>
			throttle((request, callback) => {
				autocompleteService.current.getPlacePredictions(request, callback);
			}, 200),
		[]
	);
	// if (typeof window !== "undefined" && !loaded.current) {
	//   if (!document.querySelector("#google-maps")) {
	//     loadScript(
	//       `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
	//       document.querySelector("head"),
	//       "google-maps"
	//     );
	//   }

	//   loaded.current = true;
	// }

	const fetchDirections = async () => {
		let p = {};
		let d = {};
		let service = null;
		if (!pickupvalue && !delivervalue) {
			return;
		}
		try {
			// const pickup = await getGeocode({ address: pickupvalue });
			// const dropoff = await getGeocode({ address: pickupvalue });

			// const { pickuplat, pickuplng } = await getLatLng(pickup[0]);
			// const { dropofflat, dropofflng } = await getLatLng(dropoff[0]);
			await Geocode.fromAddress(pickupvalue.description).then(
				(response) => {
					const { lat, lng } = response.results[0].geometry.location;

					p = { lat, lng };
					setP({ lat, lng });
				},
				(error) => {
					console.error('error occured', error);
				}
			);

			await Geocode.fromAddress(delivervalue.description).then(
				(response) => {
					const { lat, lng } = response.results[0].geometry.location;

					d = { lat, lng };
					setD({ lat, lng });
				},
				(error) => {
					console.error(error);
				}
			);
			service = new google.maps.DirectionsService();
			dispatch(setPackageLocation(p));
			dispatch(setPackageDestination(d));

			service.route(
				{
					origin: p,
					destination: d,
					travelMode: google.maps.TravelMode.DRIVING,
				},
				(result, status) => {
					if (status === 'OK' && result) {
						setDirections(result);
					}
				}
			);
		} catch (error) {
			console.log('😱 Error: ', error);
		}
	};

	const pickupData = useSelector((state) => state.map);
	const {
		pickupvalue,
		pickupinputValue,
		delivervalue,
		deliverinputValue,
		pickupoptions,
		deliveroptions,
		receivername,
		receivernumber,
	} = pickupData;

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
			}

			fetchDirections();
		},
		//eslint-disable-next-line
		[pickupData, statePickupData]
	);

	React.useEffect(() => {
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
	}, [pickupvalue, pickupinputValue, fetch]);

	useEffect(() => {
		if (pickupvalue && delivervalue) fetchDirections();
	}, [delivervalue, pickupvalue]);

	React.useEffect(() => {
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
	}, [delivervalue, deliverinputValue, fetch]);

	// Handle increase step
	const handleContinue = () => {
		// Update State
		if (!receivername)
			setErrors((prev) => ({ ...prev, recipientName: 'Enter recipient name' }));
		if (!delivervalue)
			setErrors((prev) => ({
				...prev,
				deliveryAddress: 'Enter delivery address',
			}));
		if (!pickupvalue)
			setErrors((prev) => ({ ...prev, pickupAddress: 'Enter pickup address' }));
		if (!receivernumber)
			setErrors((prev) => ({
				...prev,
				recipientPhone: 'Enter recipient phone',
			}));

		if (receivername && delivervalue && pickupvalue && receivernumber) {
			setErrors({
				recipientName: '',
				recipientPhone: '',
				pickupAddress: '',
				deliveryAddress: '',
			});

			navigate(`/delivery-steps`, {
				state: {
					pickupData: {
						...pickupData,
						receivernumber,
						receivername,
						pickupCoordinate: p,
						deliveryCoordinate: d,
					},

					step: 2,
				},
			});
		}
	};

	if (!isLoaded)
		return (
			<Box
				sx={{
					margin: '20px 0px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography variant={'body1'}>Loading...</Typography>
			</Box>
		);

	return (
		<Box>
			{/* <div className={styles.first}>
        <p>Please enter pickup address and delivery address for your package</p>
        <form className={styles.formContainer}>
          <FormIcons />

          <div className={styles.inputContainer}>
            <FormInput
              label="Pick up item at?"
              type="text"
              name="pickupLocation"
              placeholder="Enter pickup address"
              value={deliverydetails.pickup.description}
              onChange={handleChange}
            />
            <FormInput
              label="Deliver item at?"
              type="text"
              name="deliveryLocation"
              placeholder="Enter delivery address"
              value={deliverydetails.dropoff.description}
              onChange={handleChange}
            />
            <Btn
              type="button"
              look="primary-filled"
              onClick={() => increaseStep()}
            >
              Get Started
            </Btn>
          </div>
        </form>
      </div> */}
			<Box
				sx={{
					margin: 0,
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr',
						md: 'repeat(2,1fr)',
					},

					gap: '3rem',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box
					sx={{
						order: {
							xs: '2',
							md: '1',
						},
					}}
				>
					<Typography sx={{ marginBottom: '15px' }} variant='subtitle1'>
						Please enter pickup address and delivery address for your package
					</Typography>
					<Box
						sx={{
							display: 'flex',
							gap: '8px',
						}}
					>
						<Box
							sx={
								{
									// marginTop: '10px',
								}
							}
						>
							<FormIcons
								lineStyle={{
									height: '60px',
								}}
							/>
						</Box>
						<Box
							sx={{
								flex: '1',
							}}
						>
							<Box
								sx={{
									display: 'grid',
									gap: '25px',
								}}
								component='form'
								noValidate
								autoComplete='off'
							>
								<Box>
									<Typography
										sx={{
											marginBottom: '8px',
											fontWeight: 'bold',
										}}
									>
										Pick up item at?
									</Typography>
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
										}}
										renderInput={(params) => (
											<TextField
												{...params}
												error={Boolean(errors.pickupAddress)}
												helperText={errors.pickupAddress}
												required
												id='standard-required'
												defaultValue=''
												variant='standard'
												size='medium'
												placeholder='Enter pick up address'
												fullWidth
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
									<Typography
										sx={{
											marginBottom: '8px',
											fontWeight: 'bold',
										}}
									>
										Deliver Item at
									</Typography>
									<Autocomplete
										id='delivery'
										sx={{ width: '100%', padding: 0 }}
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
										}}
										renderInput={(params) => (
											<TextField
												{...params}
												error={Boolean(errors.deliveryAddress)}
												helperText={errors.deliveryAddress}
												required
												id='standard-required'
												defaultValue=''
												variant='standard'
												size='medium'
												placeholder='Enter delivery address'
												fullWidth
												value={React.state.name}
												style={{
													width: '100%',
												}}
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

								<TextField
									variant={'standard'}
									error={Boolean(errors.recipientName)}
									helperText={errors.recipientName}
									// label="Reciever's Name"
									type='text'
									placeholder='Name of reciever'
									value={receivername}
									fullWidth
									onChange={(e) => {
										setErrors((prev) => ({ ...prev, recipientName: '' }));
										dispatch(setReceiverName(e.target.value));
									}}
								/>
								<TextField
									variant={'standard'}
									error={Boolean(errors.recipientPhone)}
									helperText={errors.recipientPhone}
									// label="Reciever's Phone Number"
									type='number'
									placeholder={`Reciever's Phone Number`}
									value={receivernumber}
									fullWidth
									onChange={(e) => {
										setErrors((prev) => ({ ...prev, recipientPhone: '' }));
										dispatch(setReceiverNumber(e.target.value));
									}}
								/>
								<Btn
									type='button'
									look='primary-filled'
									onClick={handleContinue}
								>
									Continue
								</Btn>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box
					sx={{
						width: '100%',
						order: {
							xs: '1',
							md: '2',
						},
					}}
					// className='map'
				>
					<GoogleMap
						zoom={10}
						center={center}
						mapContainerClassName='map-container'
						options={options}
						onLoad={onLoad}
					>
						{directions && (
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
						)}

						{p && d && (
							<>
								<Marker
									position={p}
									icon='https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
								/>

								<Marker
									key={d.lat}
									position={d}
									// onClick={() => {
									//   fetchDirections();
									// }}
								/>
							</>
						)}
					</GoogleMap>
				</Box>
			</Box>
		</Box>
	);
};

export default PickupDeliveryDetails;
