import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Divider } from '@mui/material';

import { getProfile } from '../../../redux/profileSlice';
import { useDispatch } from 'react-redux';
import UserDetailsWithChangePassword from './components/user-details-with-change-password';
import Address from '../components/header/address';

const Container = styled(Box)({
	padding: '20px',
});

const Profile = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const getUser = async () => {
		const res = await dispatch(getProfile()).unwrap();
		if (res.status === false) {
			navigate('/');
		}
	};
	React.useEffect(() => {
		getUser();
		return () => {
			//cleanup;
		};
	}, []);

	return (
		<>
			<Box>
				<Container>
					<Typography variant='h5'>My Profile</Typography>
				</Container>
				<Divider />
				<Container
					sx={{
						display: 'grid',
						gap: ['15px', '20px'],
						gridTemplateColumns: {
							xs: '1fr',
							md: 'repeat(2, 1fr)',
						},
					}}
				>
					<UserDetailsWithChangePassword />
					<Box
						sx={{
							padding: ['15px', '20px'],
							borderRadius: '6px',
							border: `1px solid rgba(0, 0, 0, 0.3)`,
						}}
					>
						<Address />
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Profile;
