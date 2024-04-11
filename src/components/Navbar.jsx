import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import Link from '@mui/material/Link';
import AuthView from '../features/auth-view/auth-view';

import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { logout, setUser } from '../redux/authSlice';
import { setProfile } from '../redux/profileSlice';
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 15px;
	// border: 1px solid red;
	margin: 0 auto;
	font-family: 'Oxygen', sans-serif;
	width: 100%;
	max-width: 1200px;

	@media screen and (min-width: 576px) {
		padding: 15px 20px;
	}
`;

const HeaderActions = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const SignUp = styled.button`
	background: #3e236e;
	border-radius: 4px;
	color: #f7f8fb;
	border: none;
	outline: none;
	padding: 10px 20px;
	cursor: pointer;
`;

const Login = styled.button`
	border: none;
	outline: none;
	background: transparent;
	color: #3e236e;
	font-weight: 700;
	cursor: pointer;
	padding: 10px 20px;
`;

function DrawerAppBar(props) {
	const { window } = props;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [isLoginModalOpen, toggleLoginModal] = React.useState(false);
	const [isSignupModalOpen, toggleSignupModal] = React.useState(false);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const { currentUser } = useSelector((state) => state.auth);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleLogout = () => {
		dispatch(setProfile(null));
		dispatch(setUser(null));

		dispatch(logout());
		handleCloseUserMenu();
	};

	const handleNavigate = (link) => {
		setAnchorElUser(null);
		navigate(link);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant='h6' sx={{ my: 2 }}>
				<img
					style={{ width: '100px' }}
					src='images/whatsapp-image-2021-05-30-at-12-52@2x.png'
				/>
			</Typography>
			<Divider />
			<List>
				<ListItem disablePadding>
					<ListItemButton
						onClick={handleClickOpen}
						sx={{ textAlign: 'center' }}
					>
						<ListItemText primary='Login' />
					</ListItemButton>
				</ListItem>
				<Divider />
				<ListItem disablePadding>
					<ListItemButton
						component='a'
						href='#simple-list'
						sx={{ textAlign: 'center' }}
					>
						<ListItemText primary='Sign up' />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box>
			<StyledHeader>
				<Box>
					<IconButton
						color='secondary'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { xs: 'block', sm: 'none', md: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<Link href='/'>
							<img
								style={{ width: '100px' }}
								src='images/whatsapp-image-2021-05-30-at-12-52@2x.png'
							/>
						</Link>
					</IconButton>
				</Box>
				<Box
					sx={{
						display: { xs: 'none', sm: 'flex', md: 'flex' },
					}}
				>
					{!localStorage.getItem('persist:root') && !currentUser ? (
						<HeaderActions>
							<Login onClick={() => toggleLoginModal(true)}>Login</Login>
							<SignUp onClick={() => toggleSignupModal(true)}>Sign up</SignUp>
						</HeaderActions>
					) : (
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title='Open settings'>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                    const settings = ["Profile", "Account", "Dashboard", "Logout"];
                ))} */}
								<MenuItem onClick={() => handleNavigate('/profile')}>
									Profile
								</MenuItem>

								<MenuItem onClick={handleLogout}>
									<Typography textAlign='center'>Logout</Typography>
								</MenuItem>
							</Menu>
						</Box>
					)}
				</Box>
			</StyledHeader>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>

			{isLoginModalOpen && (
				<AuthView
					isOpen={isLoginModalOpen}
					closeModal={() => toggleLoginModal(false)}
					exact='SIGNIN'
				/>
			)}

			{isSignupModalOpen && (
				<AuthView
					isOpen={isSignupModalOpen}
					closeModal={() => toggleSignupModal(false)}
					exact='SIGNUP'
				/>
			)}
		</Box>
	);
}

export default DrawerAppBar;
