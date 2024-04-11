import React from 'react';
import styled from '@emotion/styled';

import Cta from '../home/components/cta';
import Footer from '../../components/Footer';
import Partners from '../home/components/partners';
//import LandingFooter from "../home/components/footer";

import Testimonials from '../home/components/testimonials';
import DrawerAppBar from '../../components/Navbar';
import { ReactComponent as Playstore } from '../../assets/play-store.svg';
import { ReactComponent as Appstore } from '../../assets/apple-store.svg';
import Button from '@mui/material/Button';
import Downloaditems from './components/downloaditems';
import Downloaddetails from './components/downloaddetails';
const HeadingBackground = styled.div`
	height: 600px;
	position: relative;
`;

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(62, 35, 110, 0.7);
`;

const HeaderTextContainer = styled.div`
	padding: 65px 40px 40px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 6%;
	span {
		display: block;
		text-align: left;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #ffffff;
		font-family: 'Oxygen', sans-serif;
	}
	h4 {
		font-family: 'Oxygen';
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 56px;
		color: #ffffff;
	}
	h1 {
		font-weight: 700;
		font-size: 40px;
		color: #ffffff;
		line-height: 56px;

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
const Stores = styled.div`
	display: flex;
	padding-top: 3%;
	gap: 30px;
	//   margin: 0 auto;
	width: 100%;
	justify-content: flex-start;
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
		font-style: normal;
		font-weight: 400;
		margin: 0 auto;
		color: #5a5f63;
		font-size: 16px;
		font-family: 'Oxygen', sans-serif;
	}

	@media screen and (max-width: 576px) {
		padding: 40px 20px;
	}
`;

export default function Download() {
	return (
		<div style={{ backgroundColor: '#fff' }}>
			<DrawerAppBar />
			<HeadingBackground
				style={{
					backgroundImage: `url(
            images/bouk2.png
        )`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				<Overlay>
					<HeaderTextContainer>
						<h1>No hidden fees</h1>
						<h4> An easy and reliable way to send and receive items</h4>
						<span>
							We live and breathe for our consumers and users, which is why
							providing them
							<br /> with a personalized, seamless experience is what keeps us
							afloat.
						</span>
						<Stores>
							<Button
								onClick={(event) =>
									(window.location.href =
										'https://apps.apple.com/us/app/bouk/id1623909945')
								}
								startIcon={<Appstore className='appstore' />}
							>
								{' '}
							</Button>
							<Button
								onClick={(event) =>
									(window.location.href =
										'https://play.google.com/store/apps/details?id=com.bouk&hl=en_ZA&gl=US')
								}
								startIcon={<Playstore className='playstore' />}
							>
								{' '}
							</Button>
						</Stores>
					</HeaderTextContainer>
				</Overlay>
			</HeadingBackground>
			<Mission>
				<h2>Bouk</h2>
				<p>
					Building a future where one platform solves all your delivery and
					shopping problems because there is a delivery person for every item no
					matter the size or weight.
				</p>
			</Mission>

			<Downloaditems />
			<Downloaddetails />
			<Testimonials />
			<Cta />
			<Partners />
			<Footer />
		</div>
	);
}
