import React from 'react';
import styled from '@emotion/styled';

import Person from '../../assets/person.png';
import Values from './components/values';
import Cta from '../home/components/cta';
import Footer from '../../components/Footer';
import Partners from '../home/components/partners';
//import LandingFooter from "../home/components/footer";
import Friends from '../../assets/about-bg.png';
import Testimonials from '../home/components/testimonials';
import DrawerAppBar from '../../components/Navbar';
import { Link } from '@mui/material';
const HeadingBackground = styled.div`
	height: 300px;
	position: relative;
`;

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(62, 35, 110, 0.7);
`;

const HeaderTextContainer = styled.div`
	max-width: 1260px;
	padding: 65px 40px 40px;
	margin: 0 auto;
	height: 100%;
	display: flex;
	flex-direction: column;

	span {
		display: block;
		text-align: center;
		font-weight: 700;
		font-size: 38px;
		color: #ffffff;
		font-family: 'Oxygen', sans-serif;
	}

	h1 {
		font-weight: 700;
		font-size: 35px;
		color: #ffffff;
		margin-top: auto;
		font-family: 'Oxygen', sans-serif;
	}

	@media screen and (max-width: 576px) {
		padding: 45px 20px 40px;

		span {
			text-align: start;
			max-width: 300px;
			width: 100%;
			font-size: 33px;
		}

		h1 {
			font-size: 30px;
		}
	}
`;

const Container = styled.div`
	max-width: 1260px;
	padding: 10px 40px 40px;
	margin: 0 auto;
	font-family: 'Oxygen', sans-serif;

	@media screen and (max-width: 576px) {
		padding: 10px 20px 30px;
	}
`;

const TopSectionContainer = styled.div`
	padding: 20px 0 40px 0;

	h2 {
		font-weight: 700;
		color: #181725;
		font-size: 35px;
		font-family: 'Oxygen', sans-serif;
	}

	p {
		font-size: 16px;
		font-family: 'Oxygen', sans-serif;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	width: 100%;
	border-radius: 8px;

	img {
	}

	@media screen and (max-width: 756px) {
		display: none;
	}
`;

const TopSection = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}

	img {
		width: 100%;
	}
`;

const TopLeftSection = styled.div`
	max-width: 735px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Mission = styled.div`
	background: #f7f8fb;
	text-align: center;
	padding: 70px 20px;

	h2 {
		color: #181725;
		font-size: 35px;
		font-weight: 700;
		font-family: 'Oxygen', sans-serif;
	}

	p {
		max-width: 700px;
		width: 100%;
		margin: 0 auto;
		color: #5a5f63;
		font-size: 16px;
	}

	@media screen and (max-width: 576px) {
		padding: 40px 20px;
	}
`;

const ServiceSection = styled.section`
	padding: 40px 0 10px 0;
	h2 {
		color: #181725;
		font-size: 35px;
		font-weight: 700;
		font-family: 'Oxygen', sans-serif;
		text-align: center;
	}
`;

const Customers = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;
	margin-top: 60px;

	@media screen and (max-width: 768px) {
		display: flex;
		max-width: 400px;
		width: 100%;
		margin: 50px auto 0;
	}

	@media screen and (max-width: 576px) {
		margin: 40px auto 0;
	}
`;

const LeftSection = styled.div`
	display: flex;
	align-items: center;

	h3 {
		color: #181725;
		font-size: 24px;
		font-weight: 700;
		font-family: 'Oxygen', sans-serif;
		margin-bottom: 15px;
	}
	p {
		margin-bottom: 10px;
		max-width: 400px;
		font-family: 'Oxygen', sans-serif;
		color: #5a5f63;
		font-size: 16px;
	}
	button {
		background: #3e236e;
		border-radius: 4px;
		padding: 8px 15px;
		color: #f7f8fb;
		outline: none;
		border: none;
		margin-top: 10px;
		font-size: 14px;
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		text-align: center;
	}

	@media screen and (max-width: 576px) {
		text-align: start;
	}
`;

const MerchantContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;
	margin-top: 60px;

	@media screen and (max-width: 768px) {
		display: flex;
		max-width: 400px;
		width: 100%;
		margin: 50px auto 0;
	}

	@media screen and (max-width: 576px) {
		margin: 40px auto 0;
	}
`;

const RightSection = styled.div`
	display: flex;
	align-items: center;
	padding-left: 70px;

	h3 {
		color: #181725;
		font-size: 24px;
		font-weight: 700;
		font-family: 'Oxygen', sans-serif;
		margin-bottom: 15px;
	}
	p {
		margin-bottom: 10px;
		max-width: 400px;
		font-family: 'Oxygen', sans-serif;
		color: #5a5f63;
		font-size: 16px;
	}
	button {
		background: #3e236e;
		border-radius: 4px;
		padding: 8px 18px;
		color: #f7f8fb;
		outline: none;
		border: none;
		margin-top: 10px;
		font-size: 14px;
		cursor: pointer;
	}

	@media screen and (max-width: 996px) {
		padding-left: 40px;
	}

	@media screen and (max-width: 768px) {
		text-align: center;
		padding-left: 0;
	}

	@media screen and (max-width: 576px) {
		text-align: start;
	}
`;

export default function AboutUs() {
	return (
		<div style={{ backgroundColor: '#fff' }}>
			<DrawerAppBar />
			<HeadingBackground
				style={{
					backgroundImage: `url(
          ${Friends}
        )`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<Overlay>
					<HeaderTextContainer>
						<span>Avoid the trip Leave it to us</span>
						<h1>About Us</h1>
					</HeaderTextContainer>
				</Overlay>
			</HeadingBackground>
			<Container>
				<TopSectionContainer>
					<h2>Who we are?</h2>
					<TopSection>
						<TopLeftSection>
							<p>
								bouk is an item or delivery pick-up, and drop-off web and mobile
								application platform, that connects people with pick-up and
								delivery drivers (boukers). What it does is, it connects people
								to people (friends, loved ones, family, and sellers) and people
								to stores vice versa using trusted pick-up and delivery drivers
								(boukers) from our platform who reliably transport your items
								from friends, relatives, or shops to you and from you to them in
								record time.
							</p>
							<p>
								We also bridge the gap between big retailers, local businesses,
								and consumers by providing a single platform that enables
								everyone to sell and get deliveries at record time. Bouk
								provides you with the convenience of shopping from anywhere and
								saves you the hassle of running to the shop.
							</p>
						</TopLeftSection>
						<div>
							<img src={Person} alt='person' />
						</div>
					</TopSection>
				</TopSectionContainer>
			</Container>

			<Mission>
				<h2>Our Mission</h2>
				<p>
					To build a future where one platform solves all your delivery and
					shopping problems because there is a delivery person for every item no
					matter the size or weight.
				</p>
			</Mission>

			<Container>
				<ServiceSection>
					<h2>Who we serve</h2>
					<Customers>
						<LeftSection>
							<div>
								<h3>Customers</h3>
								<p>
									With access to thousands of boukers who own different sizes of
									bikes, vehicles, and trucks,you can request delivery of
									different items and track your delivery in real time.{' '}
								</p>

								<p>
									Also with your favorite convenience stores, pet stores,
									grocery stores, local stores and more at your fingertips for
									shopping, bouk delivers all items in record time.
								</p>
								<Link href='/'>
									<button>Start an Order</button>
								</Link>
							</div>
						</LeftSection>
						<ImageContainer>
							<img
								style={{ width: '80%', height: 'auto', borderRadius: '8px' }}
								// src="images/about2.jpg"
								src='images/about1.jpg'
								alt='about-us'
							/>
						</ImageContainer>
					</Customers>

					{/* 2nd */}
					<MerchantContainer>
						<ImageContainer>
							<img
								style={{ width: '60%', height: 'auto', borderRadius: '8px' }}
								// src="images/about1.jpg"
								src='images/about2.jpg'
								alt='about'
							/>
						</ImageContainer>
						<RightSection>
							<div>
								<h3>Merchant</h3>
								<p>
									Attract and retain new customers, keep your store in the face
									of customers, and expand your business by offering direct
									online shopping, delivery, and pickup with bouk.
								</p>

								<Link href='/merchant'>
									<button>Sign up Now</button>
								</Link>
							</div>
						</RightSection>
					</MerchantContainer>

					{/* 3rd */}
					<Customers>
						<LeftSection>
							<div>
								<h3>Boukers</h3>
								<p>
									Delivery Pick-up and drop-off with bouk means being your own
									boss and working at your own terms while earning like a 9-5.
								</p>
								<Link href='/driver'>
									<button>Bouk Now</button>
								</Link>
							</div>
						</LeftSection>
						<ImageContainer>
							<img
								style={{ width: '60%', height: 'auto', borderRadius: '8px' }}
								src='images/about3.jpg'
								alt='about-us'
							/>
						</ImageContainer>
					</Customers>
				</ServiceSection>
			</Container>
			<Values />
			<Testimonials />
			<Cta />
			<Partners />
			<Footer />
		</div>
	);
}
