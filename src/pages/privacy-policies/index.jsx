import React from 'react';
import { Box, Typography, styled, Container } from '@mui/material';
import { Circle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AppContainer from '../../components/container/app-container';
import {
	POLICIES_SECTIONS,
	PRIVACY_POLICIES,
} from '../../constant/privacy-policies';

const PrivacyPolicies = () => {
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
				<BoldText variant={'h4'}>Privacy Policy for Users/Customers</BoldText>
				<Typography>
					<BoldText component='span' variant='body1'>
						Bouk LLC{' '}
					</BoldText>
					(Company Registration Number EIN 88-0635653) situated at 321 Westlawn
					Road, Columbia, South Carolina, 29210, United States of America, is
					the controller of personal data of Customers.
				</Typography>
				<Typography>
					The terms “Our”, “Us” or “We” contained herein, are words that are
					collectively referred to as
					<BoldText component='span'>“Bouk LLC”</BoldText>, a limited liability
					company incorporated & registered under the laws of The United States
					of America, which is highly devoted to protecting your privacy.
				</Typography>
				<Typography variant='body1'>
					In striving to be a Bouk Customer/User, your access to, and use of our
					services are subject to our{' '}
					<Link to='/terms-and-conditions'>Terms and Conditions (T&C)</Link>{' '}
					which clearly define some of the terms used in every part of this
					Policy. You are enjoined to make sure that you have meticulously read
					and understand the Terms and Conditions before you make use of our
					services. By making use of our services, you accept the T&C, and
					accept our privacy practices outlined in this Policy. If you are not
					confident or feel unsettled with any part of this Policy or our T&C,
					you are at liberty to refrain from using or accessing our services.
				</Typography>
				<Typography variant='body1'>
					Bouk uses wide range of network of independent third-party contractors
					(herein referred to as “Boukers”) who provide delivery services to our
					Users and Merchants. Boukers should refer to the{' '}
					<Link to='privacy-policies'>
						<BoldText component='span'>Bouker Privacy Policy</BoldText>
					</Link>{' '}
					for information on how Bouk collects and uses Boukers’ Personal
					Information.
				</Typography>
				<Typography variant='body1'>
					Your access to and use of our services if you are a Bouk Merchant are
					dependent on the Merchant Terms of Service or other master services
					agreement executed between you and Bouk.
				</Typography>
				<Typography variant='body1'>
					Bouk services may change from time to time. As a result, we reserve
					the sole and absolute right to change, revise, or update this Policy
					at any time and without notice. If we make any material changes to the
					way we process your Personal Information, we will put you on notice
					before such changes are effective. If you object to any changes, you
					must halt using our Services. We urge you to review this Policy
					recurrently. This Policy became effective on the date you accept it.
					Continued use of our services following any changes or updates to this
					Policy signifies your acceptance of the amended Policy's contents.
				</Typography>

				{PRIVACY_POLICIES.map((value, i) => (
					<Box
						sx={{
							display: 'grid',
							gap: '15px',
						}}
						key={i}
					>
						<BoldText>
							<span>{i + 1}.</span>
							<span
								style={{
									textDecoration: 'underline',
								}}
							>
								{' '}
								{value.name}
							</span>
						</BoldText>
						{value.description && (
							<Typography variant='body1'>{value.description}</Typography>
						)}
						<Box sx={{ marginLeft: '20px', display: 'grid', gap: '10px' }}>
							{value.list &&
								value.list.map((item) => (
									<Box sx={{ display: 'flex', gap: '10px' }} key={item}>
										<Circle sx={{ fontSize: '12px', marginTop: '5px' }} />
										<Typography variant='body1'>{item}</Typography>
									</Box>
								))}
						</Box>
					</Box>
				))}
				<BoldText
					sx={{
						textDecoration: 'underline',
						textAlign: 'center',
						marginTop: '2rem',
					}}
				>
					Security of Data and Privacy Policy <br />
					United States <br />
					Bouk Merchants
				</BoldText>
				<BoldText>
					Before you use the products and services, please read these terms
					carefully. By executing the agreement or master agreement (herein
					referred to as “agreement”) with Bouk or using the services, platform,
					and/or products, you, and any entities that you represent and all your
					franchisees and/or affiliates (if any) ("you" or "merchant") agree to
					be bound by the terms contained herein in addition to the terms in the
					agreement (as defined herein). The terms of this agreement apply only
					to the subject matter herein.
				</BoldText>
				{POLICIES_SECTIONS.map((value, i) => (
					<Box
						sx={{
							display: 'grid',
							gap: '6px',
						}}
						key={i}
					>
						<BoldText>{value.name}</BoldText>
						<BoldText>{value.title}</BoldText>
						{value.description && (
							<Typography variant='body1'>{value.description}</Typography>
						)}
						{value.list &&
							value.list.map((item, i) => (
								<Box sx={{ display: 'flex', gap: '6px' }} key={item}>
									<span>{i + 1}.</span>
									<Typography>{item}</Typography>
								</Box>
							))}
					</Box>
				))}
			</Container>
		</AppContainer>
	);
};

const BoldText = styled(Typography)({
	fontWeight: 'bold',
});

export default PrivacyPolicies;
