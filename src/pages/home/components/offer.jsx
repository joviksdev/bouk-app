import React from 'react';

import DeliveryCards from '../../../assets/delivery-cards.svg';
import Commerce from '../../../assets/commerce-screen.svg';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import ColorButton from '../../../components/Button';
import { Link } from '@mui/material';

export default function Offer() {
	return (
		<Box
			sx={{
				maxWidth: '1200px',
				width: '100%',
				padding: ['15px', '20px'],
				margin: ['4rem auto', '6rem auto'],
				fontFamily: '"Oxygen", sans-serif',
			}}
		>
			<Typography
				sx={{
					fontFamily: '"Oxygen", sans-serif',
					color: '#181725',
					fontWeight: 800,
					fontSize: ['32px', '40px'],
					textAlign: 'center',
					marginBottom: ['2rem', '4rem'],
				}}
				variant='h2'
				component='h3'
			>
				What we offer
			</Typography>
			<Box
				sx={{
					borderRadius: '20px',
					padding: ['2rem 0px', '10px 2rem'],
					backgroundColor: '#E0CFFF',
					display: 'grid',
					gap: ['0px', '2rem', '15px'],
					gridTemplateColumns: ['1fr', '1fr', '4fr 6fr'],
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: ['4rem', '6rem'],
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignTtems: 'start',
						gap: '10px',
						padding: ['20px', '1rem', '1rem 2rem'],
					}}
				>
					<Typography
						sx={{
							fontWeight: '500',
							fontSize: ['24px', '28px', '32px'],
						}}
						variant='h3'
						component='h2'
					>
						A logistics solution
					</Typography>
					<Typography sx={{}}>
						We provide logistics solutions to business and users.
					</Typography>
					<Typography sx={{}}>
						<b>Live tracking</b> - Track your items in real time.
					</Typography>
					<Box
						sx={{
							marginTop: ['40px', '120px'],
						}}
					>
						<Link href='/download'>
							<ColorButton sx={{ width: ['120px', '140px'] }}>
								{' '}
								Learn more
							</ColorButton>
						</Link>
					</Box>
				</Box>
				<Box
					sx={{
						height: ['100%', '100%', 'unset'],

						img: {
							width: '100%',
						},
					}}
				>
					<img src={DeliveryCards} alt='DeliveryCards' />
				</Box>
			</Box>
			<Box
				sx={{
					borderRadius: '20px',
					backgroundColor: '#FFCFCF',
					display: 'grid',
					gap: ['2rem', '15px'],
					gridTemplateColumns: ['1fr', '1fr', '4fr 6fr'],
					alignItems: 'center',
					justifyContent: 'center',
					padding: ['2rem 0px', '10px 2rem'],
				}}
			>
				<Box
					sx={{
						// textAlign: { xs: 'center', sm: 'left', md: 'left' },
						display: 'flex',
						flexDirection: 'column',
						alignIItems: 'start',
						gap: '10px',
						padding: ['15px', '1rem', '1rem 2rem'],
					}}
				>
					<Typography
						sx={{
							fontWeight: '500',

							fontSize: ['24px', '28px', '32px'],
						}}
						variant='h4'
						component='h2'
					>
						An e-commerce platform
					</Typography>
					<Typography sx={{}}>
						While creating an avenue for business owners to sell their products
						on the platform.
					</Typography>
					<Typography
						sx={{
							fontWeight: 'bold',
						}}
					>
						Easy and secure checkout
					</Typography>
					<Typography sx={{}}>Pay safely and securely.</Typography>
					<Box
						sx={{
							marginTop: ['40px', '120px'],
						}}
					>
						<Link href='/merchant'>
							<ColorButton sx={{ width: ['120px', '140px'] }}>
								{' '}
								Learn more
							</ColorButton>
						</Link>
					</Box>
				</Box>
				<Box
					sx={{
						height: ['100%', '100%', 'unset'],

						img: {
							width: '100%',
						},
					}}
				>
					<img src={Commerce} alt='commerce screens' />
				</Box>
			</Box>
		</Box>
	);
}
