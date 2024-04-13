import React from 'react';
import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar } from '@mui/material';
import Footer from '../Footer';

const AppContainer = ({ children }) => {
	return (
		<Box>
			<AppBar
				position='static'
				sx={{
					backgroundColor: 'unset',
					boxShadow: 'unset',
				}}
			>
				<Toolbar>
					<Link href='/'>
						<img
							style={{ width: '100px' }}
							src='images/whatsapp-image-2021-05-30-at-12-52@2x.png'
							alt='img'
						/>
					</Link>
				</Toolbar>
			</AppBar>
			<Box>{children}</Box>
			<Footer />
		</Box>
	);
};

export default AppContainer;
