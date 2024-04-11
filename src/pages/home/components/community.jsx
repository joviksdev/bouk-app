import React from 'react';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ListItem = ({ img, title, description, buttonText, link }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				maxWidth: ['100%', '300px'],
				alignItems: ['center', 'center', 'flex-start'],
			}}
		>
			<Box
				sx={{
					width: ['120px', '160px', '200px'],
					height: ['120px', '160px', '200px'],
					marginBottom: ['2rem'],
					img: { width: '100%' },
				}}
			>
				<img src={img} alt={img} />
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					flex: '1',
					justifyContent: 'space-between',
					gap: '20px',
				}}
			>
				<Box>
					<Typography
						sx={{
							color: '#ffffff',
							fontWeight: 700,
							fontSize: '30px',
							fontFamily: '"Oxygen", sans-serif',
							marginBottom: '20px',
							textAlign: ['center', 'center', 'unset'],
						}}
						variant='h3'
						component='h2'
					>
						{title}
					</Typography>
					<Typography
						sx={{
							color: '#efe6ff',
							fontSize: '15px',
							fontFamily: '"Oxygen", sans-serif',
							textAlign: ['center', 'center', 'unset'],
						}}
					>
						{description}
					</Typography>
				</Box>
				<Link
					sx={{
						alignSelf: ['center', 'center', 'unset'],
					}}
					href={link}
				>
					<Button
						sx={{
							color: '#fed385',
							fontWeight: 700,
							fontSize: '17px',
							display: 'inline-block',
							padding: '0px',
						}}
						size='large'
					>
						{buttonText}
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default function Community() {
	return (
		<Box
			sx={{
				backgroundColor: '#3e236e',
				padding: ['4rem 15px', '6rem 20px'],
				fontFamily: 'Oxygen, sans-serif',
			}}
		>
			<Typography
				sx={{
					textAlign: 'center',
					fontWeight: 700,
					color: '#ffffff',
					fontSize: ['28px', '36px'],
					fontFamily: '"Oxygen", sans-serif',
					marginBottom: ['2rem', '4rem'],
				}}
				variant='h2'
				gutterBottom
			>
				Be a part of our community
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: ['column', 'column', 'row'],
					gap: ['4rem', '4rem', '15px'],
					justifyContent: 'space-between',
					alignItems: 'center',
					maxWidth: '1200px',
					margin: 'auto',
					width: '100%',
				}}
			>
				<ListItem
					img={'images/079-food-delivery-colour-1@2x.png'}
					title={'Be a Bouker'}
					description={`Call the shots, work for yourself, enjoy flexible working
								schedule and earn while using the bouk platform.`}
					link={'/driver'}
					buttonText={'	Start Earning'}
				/>

				<ListItem
					img={'images/undraw-add-to-cart-re-wrdo-1@2x.png'}
					title={'	Be a merchant'}
					description={`Extend your reach, make more sales, and grow your business by
          partnering with us at bouk.`}
					link={'/merchant'}
					buttonText={'Setup your store'}
				/>

				<ListItem
					img={'/images/layer-2@2x.png'}
					title={'Download the app'}
					description={`Experience our easy-to-use app with live tracking.`}
					link={'/download'}
					buttonText={'Download the app'}
				/>
			</Box>
		</Box>
	);
}
