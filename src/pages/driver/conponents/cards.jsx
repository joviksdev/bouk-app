import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const Cards = () => {
	return (
		<div>
			<Typography
				sx={{
					fontFamily: '"Oxygen", sans-serif',
					color: '#181725',
					fontWeight: 700,
					fontSize: '40px',
					textAlign: 'center',
					marginBottom: '5%',
					lineHeight: '56px',
					marginTop: '5%',
				}}
				gutterBottom
				variant='h1'
				component='h3'
			>
				Why deliver with Bouk?
			</Typography>
			<Grid
				sx={{
					paddingLeft: '5%',
					display: 'flex',
					justifyContent: 'space-around',
				}}
				container
				spacing={3}
			>
				<Grid item xs={12} sm={4} md={4}>
					<Card
						square={true}
						sx={{
							height: '100%',
							textAlign: 'left',
							flexDirection: 'column',
							width: '70%',
							padding: '5%',
							display: 'flex',
							justifyContent: 'flex-start',
							border: 'none',
							boxShadow: 'none',
						}}
					>
						<CardMedia
							component='img'
							sx={{ width: '100px', paddingLeft: '16px' }}
							image='images/debit-card.png'
							alt='random'
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography
								sx={{
									'& .css-2r3irp-MuiCardContent-root': { padding: 0 },
									color: '#181725',
									fontWeight: 700,
									marginTop: '20px',
									fontSize: '24px',
									lineHeight: '30px',
									fontFamily: '"Oxygen", sans-serif',
								}}
								gutterBottom
								variant='h3'
								component='h2'
							>
								Get paid for assisting in your community
							</Typography>
							<Typography
								sx={{
									color: '#5A5F63',
									fontSize: '16px',
									lineHeight: '150%',
									marginBottom: '10px',
									fontFamily: '"Oxygen", sans-serif',
								}}
							>
								Help others around you to run quick errands by signing-up and
								accepting requests with Bouk.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<Card
						square={true}
						sx={{
							height: '100%',
							textAlign: 'left',
							flexDirection: 'column',
							width: '70%',
							padding: '5%',
							display: 'flex',
							justifyContent: 'flex-start',
							border: 'none',
							boxShadow: 'none',
						}}
					>
						<CardMedia
							component='img'
							sx={{
								width: '100px',
								alignSelf: 'flex-start',
								paddingLeft: '16px',
							}}
							image='images/contract.png'
							alt='random'
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography
								sx={{
									color: '#181725',
									fontWeight: 700,
									marginTop: '20px',
									fontSize: '24px',
									lineHeight: '30px',
									fontFamily: '"Oxygen", sans-serif',
								}}
								gutterBottom
								variant='h3'
								component='h2'
							>
								Easy sign up, Fast money
							</Typography>
							<Typography
								sx={{
									color: '#5A5F63',
									fontSize: '16px',
									lineHeight: '150%',
									marginBottom: '10px',
									fontFamily: '"Oxygen", sans-serif',
								}}
							>
								Only few details required to sign up and the bucks starts
								rolling in.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid sx={{ margin: 0, padding: 0 }} item xs={12} sm={4} md={4}>
					<Card
						square={true}
						sx={{
							height: '100%',
							textAlign: 'left',
							flexDirection: 'column',
							width: '70%',
							padding: '5%',
							display: 'flex',
							justifyContent: 'flex-start',
							border: 'none',
							boxShadow: 'none',
						}}
					>
						<CardMedia
							component='img'
							sx={{ width: '100px', paddingLeft: '16px' }}
							image='images/schedule.png'
							alt='random'
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography
								sx={{
									color: '#181725',
									fontWeight: 700,
									marginTop: '20px',
									fontSize: '24px',
									lineHeight: '30px',
									fontFamily: '"Oxygen", sans-serif',
								}}
								gutterBottom
								variant='h3'
								component='h2'
							>
								Work at your own pace, be your own boss
							</Typography>
							<Typography
								sx={{
									color: '#5A5F63',
									fontSize: '16px',
									lineHeight: '150%',
									marginBottom: '10px',
									fontFamily: '"Oxygen", sans-serif',
								}}
							>
								Answer to no one, enjoy flexible working schedule and earn while
								using the bouk platform.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<Card
						square={true}
						sx={{
							height: '100%',
							textAlign: 'left',
							flexDirection: 'column',
							width: '70%',
							padding: '5%',
							display: 'flex',
							justifyContent: 'flex-start',
							border: 'none',
							boxShadow: 'none',
						}}
					>
						<CardMedia
							component='img'
							sx={{ width: '100px', paddingLeft: '16px' }}
							image='images/delivery-truck.png'
							alt='random'
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography
								sx={{
									color: '#181725',
									fontWeight: 700,
									marginTop: '20px',
									fontSize: '24px',
									lineHeight: '30px',
									fontFamily: '"Oxygen", sans-serif',
								}}
								gutterBottom
								variant='h3'
								component='h2'
							>
								Register multiple modes of delivery
							</Typography>
							<Typography
								sx={{
									color: '#5A5F63',
									fontSize: '16px',
									lineHeight: '150%',
									marginBottom: '10px',
									fontFamily: '"Oxygen", sans-serif',
								}}
							>
								Do you have a car, truck, or bike? You can register them all
								under your profile and select which ever you want to use at a
								time.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<Card
						square={true}
						sx={{
							height: '100%',
							textAlign: 'left',
							flexDirection: 'column',
							width: '70%',
							padding: '5%',
							display: 'flex',
							justifyContent: 'flex-start',
							border: 'none',
							boxShadow: 'none',
						}}
					>
						<CardMedia
							component='img'
							sx={{ width: '100px', paddingLeft: '16px' }}
							image='images/money.png'
							alt='random'
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography
								sx={{
									color: '#181725',
									fontWeight: 700,
									marginTop: '20px',
									fontSize: '24px',
									lineHeight: '30px',
									fontFamily: '"Oxygen", sans-serif',
								}}
								gutterBottom
								variant='h3'
								component='h2'
							>
								Weekly payouts directly into your bank account
							</Typography>
							<Typography
								sx={{
									color: '#5A5F63',
									fontSize: '16px',
									lineHeight: '150%',
									marginBottom: '10px',
									fontFamily: '"Oxygen", sans-serif',
								}}
							>
								You will be smiling on the weekends when those payment
								notifications come.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<Card
						square={true}
						sx={{
							height: '100%',
							textAlign: 'left',
							flexDirection: 'column',
							width: '70%',
							padding: '5%',
							display: 'flex',
							justifyContent: 'flex-start',
							border: 'none',
							boxShadow: 'none',
						}}
					>
						<CardMedia
							component='img'
							sx={{ width: '100px', paddingLeft: '16px' }}
							image='images/map.png'
							alt='random'
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography
								sx={{
									color: '#181725',
									fontWeight: 700,
									marginTop: '20px',
									fontSize: '24px',
									lineHeight: '30px',
									fontFamily: '"Oxygen", sans-serif',
								}}
								gutterBottom
								variant='h3'
								component='h2'
							>
								Flexibility to deliver in any location
							</Typography>
							<Typography
								sx={{
									color: '#5A5F63',
									fontSize: '16px',
									lineHeight: '150%',
									marginBottom: '10px',
									fontFamily: '"Oxygen", sans-serif',
								}}
							>
								Step out of your door and start accepting requests in your
								neighborhood or in a city you are visiting.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<Card
						square={true}
						sx={{
							height: '100%',
							textAlign: 'left',
							flexDirection: 'column',
							width: '70%',
							margin: 0,

							padding: '5%',
							display: 'flex',
							justifyContent: 'flex-start',
							border: 'none',
							boxShadow: 'none',
						}}
					>
						<CardMedia
							component='img'
							sx={{ width: '100px', paddingLeft: '16px' }}
							image='images/money2.png'
							alt='random'
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography
								sx={{
									color: '#181725',
									fontWeight: 700,
									marginTop: '20px',
									fontSize: '24px',
									lineHeight: '30px',
									fontFamily: '"Oxygen", sans-serif',
								}}
								gutterBottom
								variant='h3'
								component='h2'
							>
								Know how much you will make
							</Typography>
							<Typography
								sx={{
									color: '#5A5F63',
									fontSize: '16px',
									lineHeight: '150%',
									marginBottom: '10px',
									fontFamily: '"Oxygen", sans-serif',
								}}
							>
								With our simple charging format, we offer you an opportunity to
								escape ridiculous percentages.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4} md={4}></Grid>
				<Grid item xs={12} sm={4} md={4}></Grid>
			</Grid>
		</div>
	);
};

export default Cards;
