import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
	YouTube,
} from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

const Container = styled.div`
	display: flex;
	${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
const Logo = styled.h1`
	flex: 1;
`;
const Desc = styled.p`
	margin: 20px 0px;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;
const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: 'none' })}
`;
const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;
const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: '#fff8f8' })}
`;
const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;
const Payment = styled.img`
	width: 50%;
`;
const Footer = () => {
	return (
		<Container>
			<section class='bg-dark footer p-5' id='contact'>
				<div>
					<div class='row pt-5' style={{ padding: 0 }}>
						<div class='col-lg-3 text-md-left text-center p-5'>
							<h5
								style={{ fontSize: 30, marginTop: '-20px' }}
								class='text-white footer-title  '
							>
								Bouk
							</h5>
							<div class='  '>
								<p class='footer-desc' style={{ color: '#E2E2E2' }}>
									A logistics solution coupled with an ecommerce platform. The
									solution would provide logistics solutions to business and
									users while creating an avenue for business owners to sell
									their products on the platform.
								</p>
							</div>
						</div>
						<div class=' mt-4 col-lg-3 col-md-4 col-sm-4 col-xs-12 text-md-left text-center'>
							<h5 style={{ fontSize: 30 }} class='text-white footer-title'>
								Top cities
							</h5>
							<div class='mt-4'>
								<ul class='list-unstyled text-white footer-list'>
									<li>
										<a href='faq.html'>Columbia </a>
									</li>
									<li>
										<a href='#'>Lexington</a>
									</li>
									<li>
										<a href='#'>Charlotte</a>
									</li>
									<li>
										<a href='#'>Colorado Springs</a>
									</li>
									<li>
										<a href='#'>Jacksonville</a>
									</li>
									<li>
										<a href='#'>Kansas city</a>
									</li>
									<li>
										<a href='#'>Tulsa</a>
									</li>
								</ul>
							</div>
						</div>
						<div class='col-lg-2 col-md-2 col-sm-2 col-xs-12 text-md-left text-center'>
							<div class='mt-5'>
								<ul class='list-unstyled text-white footer-list'>
									<li>
										<a>Atlanta</a>
									</li>
									<li>
										<a>Boston</a>
									</li>
									<li>
										<a>Dallas</a>
									</li>
									<li>
										<a>Houston</a>
									</li>
									<li>
										<a>NYC</a>
									</li>
									<li>
										<a>Philly</a>
									</li>
									<li>
										<a>Austin</a>
									</li>
									<li>
										<a>Portland</a>
									</li>
								</ul>
							</div>
						</div>
						<div class='col-lg-2 col-md-2 col-sm-2 col-xs-12 text-md-left text-center'>
							<div class='mt-5'>
								<ul class='list-unstyled text-white footer-list'>
									<li>
										<a> Memphis </a>
									</li>
									<li>
										<a>Honolulu</a>
									</li>
									<li>
										<a>Indianapolis</a>
									</li>
									<li>
										<a>Nashville</a>
									</li>
									<li>
										<a>Albuquerque</a>
									</li>
									<li>
										<a>Milwaukee</a>
									</li>
									<li>
										<a>Miami</a>
									</li>
									<li>
										<a>Miami</a>
									</li>
									<li>
										<a>Los Vegas</a>
									</li>
								</ul>
							</div>
						</div>
						<div class='col-lg-2 text-md-left  text-center'>
							<h5 style={{ fontSize: 30 }} class='text-white footer-title'>
								Get in touch
							</h5>
							<div class='mt-4' style={{ color: '#fff' }}>
								{/* <p style={{ color: "#fff" }}>US: +1 67 89 01 23 4</p> */}

								<p style={{ color: '#E2E2E2' }}>contact@boukofficials.com</p>
							</div>
							<div class='mt-4'>
								<ul class='list-unstyled text-white footer-social list-inline'>
									<li class='list-inline-item'>
										<a
											href='https://web.facebook.com/boukofficials'
											target='_blank'
										>
											<i
												style={{
													color: '#fff',
													backgroundColor: '#6438B0',
													border: 'none',
												}}
												class='mdi mdi-facebook facebook'
											></i>
										</a>
									</li>

									<li class='list-inline-item'>
										<a href='https://twitter.com/boukofficials' target='_blank'>
											<i
												style={{
													color: '#fff',
													backgroundColor: '#6438B0',
													border: 'none',
												}}
												class='mdi mdi-twitter twitter'
											></i>
										</a>
									</li>
									<li class='list-inline-item'>
										<a
											href='https://www.linkedin.com/company/bouk-llc/
'
										>
											<i
												style={{
													color: '#fff',
													backgroundColor: '#6438B0',
													border: 'none',
												}}
												class='mdi mdi-linkedin linkedin'
											></i>
										</a>
									</li>
									<li class='list-inline-item'>
										<a
											href='https://www.instagram.com/boukofficials/'
											target='_blank'
										>
											<i
												style={{
													color: '#fff',
													backgroundColor: '#6438B0',
													border: 'none',
												}}
												class='mdi mdi-instagram instagram'
											></i>
										</a>
									</li>
								</ul>
							</div>
							<div>
								<a href='https://play.google.com/store/apps/details?id=com.bouk&hl=en_ZA&gl=US'>
									{' '}
									<img style={{ width: '45%' }} src='images/playstore.png' />
								</a>
								<a href='https://apps.apple.com/us/app/bouk/id1623909945'>
									{' '}
									<img style={{ width: '40%' }} src='images/appstore.png' />
								</a>
							</div>
						</div>
					</div>
					<div class='row pt-5 text-md-left text-center'>
						<div class='col-lg-4 pl-5'>
							<h5 style={{ fontSize: 30 }} class='text-white footer-title'>
								Company
							</h5>
							<div class='mt-4'>
								<ul class='list-unstyled footer-list'>
									<li>
										<a href='/about'>About Us</a>
									</li>
									<li>
										<a href='/contact'>Contact Us</a>
									</li>

									<li>
										<a href='/about'>Services</a>
									</li>
									<li>
										<a href='https://blog.boukofficials.com'>Blog</a>
									</li>
								</ul>
							</div>
						</div>

						<div class='col-lg-3 text-md-left text-center'>
							<h5 style={{ fontSize: 30 }} class='text-white footer-title'>
								Work with us
							</h5>
							<div class='mt-4'>
								<ul class='list-unstyled footer-list'>
									<li>
										<a href='/driver'>Be a Bouker</a>
									</li>
									<li>
										<a href='/merchant'>Be a Merchant</a>
									</li>
									<li>
										<a>Careers</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class='row pl-4 pb-4 p-4 text-center'>
						<div class='col-lg-12 text-center'>
							<Grid
								container
								spacing={1}
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'space-between',
									alignContent: 'center',
									alignItems: 'center',
									alignSelf: 'center',
									textAlign: 'center',
								}}
							>
								<Grid item xs={12} sm={1} md={1}>
									<span style={{ color: '#C4C4C4' }}>© Bouk 2022</span>
								</Grid>
								<Grid item xs={12} sm={1.5} md={1.5}>
									<Link style={{ color: '#C4C4C4' }} to='/termsandConditions'>
										Terms and Conditions
									</Link>
									&nbsp;
								</Grid>
								<Grid item xs={12} sm={1.5} md={1.5}>
									<Link style={{ color: '#C4C4C4' }} to='/UserPrivacyPolicy'>
										Privacy Policy for users
									</Link>{' '}
								</Grid>
								<Grid item xs={12} sm={2} md={2}>
									<Link style={{ color: '#C4C4C4' }} to='/DriverPrivacyPolicy'>
										Privacy Policy for drivers
									</Link>
								</Grid>
								<Grid item xs={12} sm={3} md={3}>
									<Link
										style={{ color: '#C4C4C4' }}
										to='/IndependentContractorAgreement'
									>
										Independent Contracter agreement
									</Link>
								</Grid>
								<Grid item xs={12} sm={3} md={3}>
									<Link
										style={{ color: '#C4C4C4' }}
										to='/MerchantsSecurityofDataandPrivacyPolicy'
									>
										Merchants Security Of Data and Privacy Policy
									</Link>
								</Grid>
							</Grid>
						</div>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default Footer;
