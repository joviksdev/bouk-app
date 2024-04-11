import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
	Box,
	Button,
	Typography,
	CircularProgress,
	Divider,
} from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import Header from './components/header/header';
import protectedRoutes from '../../routes/user-protected-route/protected-routes';
import { FiLogOut } from 'react-icons/fi';
import { deleteAccount, logout } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import ModalLayout from '../../components/modal/modal-layout';
import { setProfile } from '../../redux/profileSlice';
import { useToastAlert } from '../../hooks';
const DashboardContainer = styled.div`
	// overflow-y: auto;
	// // border: 2px solid red;

	// & ::-webkit-scrollbar {
	//   display: none;
	// }
`;

const StyledDashboard = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	margin: 90px auto 0;
	font-family: 'Oxygen', sans-serif;
	background-color: #f7f8fb;
	padding: 10px 60px 0px 60px;

	@media screen and (max-width: 1200px) {
		padding: 10px 20px 0px 20px;
	}
`;

const StyledSidebar = styled.div`
	width: 322px;
	position: fixed;
	z-index: 2;
	background-color: #fff;
	padding: 10px 0 40px 20px;
	border-radius: 5px;
	border: 1px solid #e2e2e2;

	ul {
		width: 300px;
		list-style-type: none;
		padding-left: 0 !important;
	}

	li {
		width: 100%;
		padding: 5px 0 5px 0;
	}

	.navItem {
		display: inline-flex;
		font-family: inherit;
		font-size: 25px;
		font-weight: 700;
		line-height: 1;
		align-items: center;
		column-gap: 1rem;
		color: #181725;
		text-decoration: none;
		transition: all 100ms ease;
		padding: 5px 0 0 0;
		width: 100%;

		span {
			font-size: 16px;
		}
	}

	.navItem:hover {
		color: #6438b0;
	}

	li {
	}

	@media screen and (max-width: 1200px) {
		width: 270px;

		ul {
			width: 248px;
		}
	}
`;

const MainContentContainer = styled.div`
	background-color: #fff;
	width: 100%;
	font-family: 'Oxygen', sans-serif;
	border-radius: 5px;
	position: relative;
	border: 1px solid #e2e2e2;
	min-height: 80vh;
`;

const RightContainer = styled.div`
	padding: 0 10px 0 10px;
	width: calc(100% - 340px);
	margin-left: 320px;

	@media screen and (max-width: 1200px) {
		width: calc(100% - 288px);
		margin-left: 270px;
	}
`;

function Dashboard() {
	return (
		<>
			<DashboardContainer>
				<Header />
				<div
					style={{
						backgroundColor: '#f7f8fb',
						minHeight: '100vh',
						paddingTop: '1px',
						paddingBottom: '30px',
					}}
				>
					<StyledDashboard>
						<div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
							<Sidebar />
						</div>
						<RightContainer>
							<MainContent />
						</RightContainer>
					</StyledDashboard>
				</div>
			</DashboardContainer>
		</>
	);
}

function Sidebar() {
	const { pathname } = useLocation();
	const alert = useToastAlert();
	const dispatch = useDispatch();
	const [isDisplayDeleteModal, setDisplayDeleteModal] = useState(false);
	const [isDeleting, setDeleting] = useState(false);

	const handleDeleteAccount = async () => {
		setDisplayDeleteModal(false);
		setDeleting(true);
		const res = await dispatch(deleteAccount()).unwrap();
		setDeleting(false);

		if (res.status === 'success' || res.status === 'successful') {
			// Clear Data in local storage
			localStorage.removeItem('auth:details');
			dispatch(setProfile(null));
		}

		if (res.status === false) {
			alert({
				message: res.message,
				type: 'danger',
			});
		}
	};

	return (
		<>
			{isDeleting && (
				<Box
					sx={{
						position: 'fixed',
						top: '0px',
						left: '0px',
						height: '100vh',
						width: '100%',
						backgroundColor: 'rgba(40, 83, 107, 0.7)',
						zIndex: (theme) => theme.zIndex.modal,
						overflow: 'auto',
						padding: '15px',
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
					}}
				>
					<CircularProgress />
					<Typography>Deleting account...</Typography>
				</Box>
			)}
			<ModalLayout
				isOpen={isDisplayDeleteModal}
				closeModal={() => setDisplayDeleteModal(false)}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
					}}
				>
					<Typography sx={{ marginBottom: '10px' }} variant='h5'>
						Delete Account
					</Typography>
					<Typography>{`Delete Account, We are sorry to see you go. By deleting this account, please note that all personal information including previous requests and pending requests will be deleted and none retrievable. We look forward to seeing you back`}</Typography>
					<Box
						sx={{
							display: 'flex',
							gap: '15px',
							justifyContent: 'flex-end',
						}}
					>
						<Button
							sx={{ textTransform: 'capitalize' }}
							variant={'outlined'}
							onClick={() => setDisplayDeleteModal(false)}
						>
							Cancel
						</Button>
						<Button
							onClick={handleDeleteAccount}
							sx={{
								backgroundColor: 'red !important',
								color: 'white',
								textTransform: 'capitalize',
							}}
						>
							Delete
						</Button>
					</Box>
				</Box>
			</ModalLayout>

			<StyledSidebar>
				<div>
					<ul>
						{protectedRoutes.map((route, i) => {
							const activeStyle = {
								color: '#6438B0',
								backgroundColor: 'transparent',
								borderRight: '3px solid #6438B0',
							};

							return (
								<li key={i}>
									<NavLink
										to={route.path}
										style={({ isActive }) =>
											isActive ? activeStyle : undefined
										}
										className='navItem'
									>
										{route.path === pathname
											? route.iconActive
											: route.iconInactive}

										<span>{route.title}</span>
									</NavLink>
								</li>
							);
						})}
					</ul>

					<Divider />

					<Button
						sx={{
							display: 'flex',
							gap: '20px',
							alignItems: 'center',
							textTransform: 'capitalize',
						}}
						onClick={() => {
							dispatch(logout());
							window.location.href = '/';
						}}
					>
						<FiLogOut />
						<span>Log out</span>
					</Button>

					<Button
						sx={{
							textTransform: 'capitalize',
							marginTop: '3rem',
							color: 'red',
							// borderColor: 'red !important',
							padding: '0px',
							display: 'flex',
							gap: '16px',
						}}
						onClick={() => setDisplayDeleteModal(true)}
					>
						<DeleteOutlined />
						<span>Delete account</span>
					</Button>
				</div>
			</StyledSidebar>
		</>
	);
}

function MainContent() {
	return (
		<MainContentContainer>
			<Outlet />
		</MainContentContainer>
	);
}

export default Dashboard;
