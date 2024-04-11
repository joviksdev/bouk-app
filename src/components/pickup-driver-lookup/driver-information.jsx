import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import {
	Phone,
	TwoWheeler,
	LocalShipping,
	AirportShuttle,
} from '@mui/icons-material';

const Vehicles = {
	car: <AirportShuttle />,
	bike: <TwoWheeler />,
	truck: <LocalShipping />,
};

const List = ({ name, value }) => {
	return (
		<Box
			sx={{
				display: 'grid',
				gap: '10px',
				gridTemplateColumns: '3fr 7fr',
			}}
		>
			<Typography>{name}</Typography>
			<Typography>{value}</Typography>
		</Box>
	);
};

const DriverInformation = ({ driver, isDeliveryPickup }) => {
	const vehicle = driver && JSON.parse(JSON.stringify(driver['Vehicle']));

	const handleCall = () => {
		const a = document.createElement('a');
		a.href = `tel:${driver['PhoneNumber']}`;
		a.click();
	};

	console.log('isDeliveryPickup::', isDeliveryPickup);

	return (
		<Box
			sx={{
				display: 'grid',
				gap: '20px',
			}}
		>
			<Typography
				sx={{
					marginBottom: '30px',
				}}
				variant={'h5'}
			>
				{isDeliveryPickup
					? 'Your delivery is en route...'
					: 'Driver is on his way to Pick up ...'}
			</Typography>
			<Box>
				<Typography sx={{ marginBottom: '15px' }} variant={'body1'}>
					Driver Details
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						gap: '15px',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							gap: '30px',
						}}
					>
						<Avatar
							sx={{
								height: '40px',
								width: '40px',
								marginBottom: '10px',
							}}
							src={driver['PhotoURL']}
							alt={'Driver Photo'}
						/>

						<List name={'Name:'} value={driver['Name']} />
					</Box>
					<IconButton onClick={handleCall}>
						<Phone />
					</IconButton>
				</Box>
			</Box>
			<Box>
				<Typography sx={{ marginBottom: '15px' }} variant={'body1'}>
					Vehicle Details
				</Typography>
				<Box
					sx={{
						display: 'grid',
						gap: '8px',
					}}
				>
					{Vehicles[vehicle?.Type]}
					<List name={'Plate Number:'} value={vehicle?.PlateNumber} />
					<List name={'Type:'} value={vehicle?.Type} />
					<List name={'Color:'} value={vehicle?.Color} />
				</Box>
			</Box>
		</Box>
	);
};

export default DriverInformation;
