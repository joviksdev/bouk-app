import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
const Stores = styled.div`
	display: flex;
	padding-top: 3%;
	gap: 30px;
	//   margin: 0 auto;
	width: 100%;
	justify-content: center;
	//   padding-top: 30px;

	.appstore {
		width: 200px;
	}
	.playstore {
		width: 200px;
	}

	@media screen and (max-width: 576px) {
		.appstore {
			width: 170px;
		}
		.playstore {
			width: 170px;
		}
	}
`;
const Merchantdetails = () => {
	return (
		<div>
			<Box
				sx={{
					backgroundColor: '#F7F8FB',
					paddingTop: '2%',
					height: { xs: '800px', sm: '600px' },
				}}
			>
				<Typography
					variant='h3'
					gutterBottom
					sx={{
						color: '#181725',
						fontWeight: 700,
						marginTop: '20px',
						fontSize: '24px',
						lineHeight: '30px',
						fontFamily: '"Oxygen", sans-serif',
						textAlign: 'center',
					}}
				>
					Sign up details
				</Typography>

				<Grid
					sx={{
						paddingLeft: '10%',
						textAlign: 'left',
					}}
					container
					spacing={1}
				>
					<Grid
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
						item
						xs={12}
						sm={6}
						md={6}
					>
						<Typography
							sx={{
								color: '#181725',
								fontWeight: 700,
								marginTop: '20px',
								fontSize: '16px',
								lineHeight: '20px',
								fontFamily: '"Oxygen", sans-serif',
							}}
							variant='p'
							gutterBottom
						>
							Open the mobile app or web page and click on sign up
						</Typography>{' '}
						<br />
						<Typography
							sx={{
								color: '#181725',
								fontWeight: 700,
								marginTop: '20px',
								fontSize: '16px',
								lineHeight: '20px',
								fontFamily: '"Oxygen", sans-serif',
							}}
							variant='p'
							gutterBottom
						>
							Proceed to provide your name, phone number, email address, and
							password
						</Typography>{' '}
						<br />
						<Typography
							sx={{
								color: '#181725',
								fontWeight: 700,
								marginTop: '20px',
								fontSize: '16px',
								lineHeight: '20px',
								fontFamily: '"Oxygen", sans-serif',
							}}
							variant='p'
							gutterBottom
						>
							An OTP will be sent to the mobile number provided, enter this and
							your account will be up
						</Typography>{' '}
						<br />
						<Typography
							sx={{
								color: '#181725',
								fontWeight: 700,
								marginTop: '20px',
								fontSize: '16px',
								lineHeight: '20px',
								fontFamily: '"Oxygen", sans-serif',
							}}
							variant='p'
							gutterBottom
						>
							Click on become a merchant
						</Typography>{' '}
						<br />
						<Typography
							sx={{
								color: '#181725',
								fontWeight: 700,
								marginTop: '20px',
								fontSize: '16px',
								lineHeight: '20px',
								fontFamily: '"Oxygen", sans-serif',
							}}
							variant='p'
							gutterBottom
						>
							Proceed to provide store name, address, and image
						</Typography>{' '}
						<br />
						<Typography
							sx={{
								color: '#181725',
								fontWeight: 700,
								marginTop: '20px',
								fontSize: '16px',
								lineHeight: '20px',
								fontFamily: '"Oxygen", sans-serif',
							}}
							variant='p'
							gutterBottom
						>
							Finally click on register and your store will be up
						</Typography>{' '}
						<br />
						<Typography
							sx={{
								color: '#181725',
								fontWeight: 700,
								marginTop: '20px',
								fontSize: '16px',
								lineHeight: '20px',
								fontFamily: '"Oxygen", sans-serif',
							}}
							variant='p'
							gutterBottom
						>
							You can now proceed to upload your items, fill in description and
							prices
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Stores>
							<Button
								onClick={(event) =>
									(window.location.href =
										'https://play.google.com/store/apps/details?id=com.bouk&hl=en_ZA&gl=US')
								}
							>
								<img
									alt={'playstore'}
									class='playstore'
									src='images/playstore.png'
								/>{' '}
							</Button>
							<Button
								onClick={(event) =>
									(window.location.href =
										'https://apps.apple.com/us/app/bouk/id1623909945')
								}
							>
								<img
									alt={'appstore'}
									class='appstore'
									src='images/appstore.png'
								/>{' '}
							</Button>
						</Stores>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default Merchantdetails;
