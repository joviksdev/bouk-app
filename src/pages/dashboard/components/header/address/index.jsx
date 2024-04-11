import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Address = ({ type, isDefault, address, handleChange }) => {
	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					marginBottom: '10px',
					justifyContent: 'space-between',
				}}
			>
				<Typography sx={{ fontWeight: 'bold' }}>{type} Address</Typography>
				{isDefault && (
					<Box
						sx={{
							border: `0.5px solid rgba(0, 0, 0, 0.4)`,
						}}
					>
						<Typography>default</Typography>
					</Box>
				)}
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'space-between',
				}}
			>
				<Typography variant={'body'}>{address}</Typography>
				<Button
					sx={{
						fontWeight: 'bold',
						color: 'black',
						textTransform: 'unset !important',
					}}
					onClick={handleChange}
				>
					Change
				</Button>
			</Box>
		</Box>
	);
};

export default Address;
