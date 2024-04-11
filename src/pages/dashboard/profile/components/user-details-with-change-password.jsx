import React from 'react';
import {
	Box,
	Divider,
	Avatar,
	Typography,
	IconButton,
	Button,
} from '@mui/material';
import { Edit, ChevronRight } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const UserDetailsWithChangePassword = () => {
	const profile = useSelector((store) => store.profile.profile);
	return (
		<Box
			sx={{
				backgroundColor: '#FFFCE5',
				padding: ['15px', '20px'],
				borderRadius: '8px',
				display: 'grid',
				gap: '20px',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '20px',
					justifyContent: 'space-between',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '20px',
					}}
				>
					<Avatar />
					<Box>
						<Typography variant={'h5'}>{profile?.name}</Typography>
						<Typography>{profile?.email}</Typography>
					</Box>
				</Box>
				<IconButton>
					<Edit />
				</IconButton>
			</Box>
			<Divider />
			<Button
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					textTransform: 'unset !important',
					color: 'black',
				}}
				fullWidth
			>
				<span>Change Password</span>
				<ChevronRight />
			</Button>
		</Box>
	);
};

export default UserDetailsWithChangePassword;
