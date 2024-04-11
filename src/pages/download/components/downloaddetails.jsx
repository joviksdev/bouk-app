import React from 'react';
import Grid from '@mui/material/Grid';

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
const Downloaddetails = () => {
	return (
		<div>
			<Box
				sx={{
					backgroundColor: '#F7F8FB',
					paddingTop: '2%',
					height: { xs: '700px', sm: '600px' },
				}}
			>
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
						<img
							style={{ width: '50%' }}
							src='images/boukofficials-biolink.png'
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Stores>
							<Button
								onClick={(event) =>
									(window.location.href =
										'https://play.google.com/store/apps/details?id=ng.bouk.bouk_driver')
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
										'https://apps.apple.com/us/app/bouk-driver/id1625693857')
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

export default Downloaddetails;
