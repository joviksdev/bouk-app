import React from 'react';
import styled from '@emotion/styled';
// import { ReactComponent as Checked } from "../../../assets/checked.svg";
import CheckedIcon from '../../../assets/shadowChecked.svg';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import YoutubeEmbed from '../../../components/Youtube';

const Flex = styled(Box)({
	display: 'flex',
	gap: '15px',
	h2: {},
});

const ListItem = ({ leadText, text }) => {
	return (
		<Flex>
			<Box
				sx={{
					width: ['35px', '50px'],
				}}
			>
				<img
					style={{ width: '100%' }}
					// src="/images/circlecheckfull.png"
					src={CheckedIcon}
					alt='checked'
				/>
			</Box>
			<Box>
				<Typography
					gutterBottom
					variant='h5'
					component='h2'
					style={{
						fontFamily: '"Oxygen", sans-serif',
						color: '#181725',
						fontWeight: 700,
						fontSize: '20px',
						marginBottom: '8px',
					}}
				>
					{leadText}
				</Typography>
				<Typography
					style={{
						fontFamily: '"Oxygen", sans-serif',
						color: '#181725',
						fontSize: '15px',
						// border: 1px solid blue;
						maxWidth: '350px',
						display: 'block',
					}}
				>
					{text}
				</Typography>
			</Box>
		</Flex>
	);
};

export default function WhyBouk() {
	return (
		<Box
			sx={{
				width: '100%',
				maxWidth: '1200px',
				margin: ['4rem auto', '6rem auto'],
				padding: ['15px', '20px'],
			}}
		>
			<Box
				sx={{
					padding: '',
					display: 'grid',
					gridTemplateColumns: ['1fr', '1fr', 'repeat(2, 1fr)'],
					gap: ['3rem', '4rem', '15px'],
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box>
					<Typography
						sx={{
							fontFamily: '"Oxygen", sans-serif',
							color: '#181725',
							fontWeight: 700,
							fontSize: ['28px', '32px', '40px'],
							marginBottom: '30px',
							lineHeight: '56px',
						}}
						gutterBottom
						variant='h2'
						component='h2'
					>
						Why send Bouk?
					</Typography>
					<Box
						sx={{
							display: 'grid',
							gap: '20px',
						}}
					>
						<ListItem
							leadText={`We're fast`}
							text={'90% of requests are delivered in minutes'}
						/>

						<ListItem
							leadText={`	We're trustworthy`}
							text={`We use well monitored technology and strategy to ensure the
									safety and careful handling of your item.`}
						/>

						<ListItem
							leadText={`	We're reliable`}
							text={`You can count on our boukers to go the extra mile for you.`}
						/>

						<ListItem
							leadText={`We're affordable`}
							text={`With our simple charging format, we offer you an opportunity to
								escape ridiculous delivery charges.`}
						/>
					</Box>
				</Box>
				<Box
					sx={{
						alignContent: 'center',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<YoutubeEmbed embedId='rxWde4GQTM8' />
				</Box>
			</Box>
		</Box>
	);
}

//   <YoutubeEmbed embedId="rxWde4GQTM8" />
