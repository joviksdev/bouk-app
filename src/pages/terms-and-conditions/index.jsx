import React from 'react';
import { Box, Typography, Container, styled } from '@mui/material';
import AppContainer from '../../components/container/app-container';

const TermsAndConditions = () => {
	return (
		<AppContainer>
			<Container
				sx={{
					display: 'grid',
					gap: '20px',
					marginTop: ['2rem'],
					marginBottom: ['2rem'],
				}}
			>
				<BoldText variant='h4' sx={{ textAlign: 'center' }}>
					Terms and Conditions of Service - United States
				</BoldText>
				<BoldText sx={{ textAlign: 'center' }}>
					BOUK Users <br />
					Terms and Conditions Agreement
				</BoldText>
				<Typography sx={{ textAlign: 'center' }}>
					ESSENTIAL: KINDLY PERUSE THE TERMS AND CONDITIONS THOROUGHLY. THE
					TERMS AND CONDITIONS (
					<BoldText component='span'>“AGREEMENT”</BoldText>) REPRESENT A LAWFUL
					AGREEMENT BETWEEN YOU AND BOUK LLC (COMPANY REGISTRATION NUMBER EIN
					88-0635653), LOCATED AT 321 WESTLAWN ROAD, COLUMBIA, 29210, SOUTH
					CAROLINA, UNITED STATES OF AMERICA (COLLECTIVELY,
					<BoldText component='span'>“BOUK,” “WE,” “US,” OR “OUR”</BoldText>
					).
				</Typography>
				<BoldText>
					IT IS KEY THAT YOU PAY PARTICULAR ATTENTION TO {'  '}
					<span sx={{ color: 'red' }}>PARAGRAPH 13</span>
					{'  '}
					OF THIS AGREEMENT THAT GOVERN DISPUTE RESOLUTIONS BETWEEN YOU AND
					BOUK.
				</BoldText>
			</Container>
		</AppContainer>
	);
};

const BoldText = styled(Typography)({
	fontWeight: 'bold',
});

export default TermsAndConditions;
