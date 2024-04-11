import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import { ReactComponent as Quote } from '../../../assets/quote.svg';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
const TestimonialContainer = styled.div`
	background: #e0ccff;
	padding: 40px 0 10px 0;
`;

const Container = styled.div`
	max-width: 1260px;
	padding: 30px 40px 0 40px;
	margin: 0 auto;

	h3 {
		font-weight: 700;
		font-size: 35px;
		color: #181725;
		font-family: 'Oxygen', sans-serif;
		text-align: center;
		margin-bottom: 40px;
	}

	.slick-slide {
		// padding: 0 -5px !important;
		margin-bottom: 3rem;
	}

	.slick-list {
		margin-bottom: 3rem;
	}

	.slick-dots li.slick-active button:before {
		color: #3e236e !important;
		font-size: 0.75rem;
	}

	.slick-dots li button:before {
		color: #fff !important;
		font-size: 0.75rem !important;
	}

	@media screen and (max-width: 576px) {
		padding: 15px 20px;
	}
`;

const Testimonial = styled.div`
	background: #fff;
	padding: 25px;
	margin-right: 20px;
	margin-left: 20px;
	border-radius: 8px;
	height: 300px;
	position: relative;
	p {
		font-family: 'Oxygen', sans-serif;
		color: #7c7c7c;
		font-weight: 400;
		font-size: 16px;
		margin-bottom: 30px;
		margin-top: 20px;
	}

	@media screen and (max-width: 576px) {
		width: 95%;
		margin: 0 auto;
	}
`;

const Bottom = styled.div`
	display: flex;
	gap: 10px;
	position: absolute;
	bottom: 30px;
`;

const Person = styled.div`
	display: flex;
	flex-direction: column;

	p {
		margin-bottom: 5px;
		margin-top: 0;
		font-weight: 700;
		font-size: 16px;
	}

	span {
		font-weight: 400;
		font-size: 14px;
		font-family: 'Oxygen', sans-serif;
		color: #7c7c7c;
		margin-top: 2px;
	}
`;

export default function Testimonials() {
	const settings = {
		dots: true,
		infinite: true,
		// speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		// initialSlide: 0,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const people = [
		{
			name: 'Elizabeth  M.',
			testimonial:
				'Bouk makes the difference! Since using and testing the app, I have been drawn to it and fully adopted it for anything delivery related.',
			location: 'Lexington',
		},
		{
			name: 'Gina W. ',
			testimonial:
				'Equipped with an incredible team that listens and takes constructive criticism.',
			location: 'Charlotte',
		},
		{
			name: 'Calima M. ',
			testimonial: ' Easy to use app and seamless flow',
			location: 'Colorado Springs',
		},
		{
			name: 'Miranda R. ',
			testimonial:
				" My days of panicking are over. I can't wait for Bouk to be live and available to all",
			location: 'Jacksonville',
		},
		{
			name: 'Martha F.',
			testimonial:
				'You guys are doing a fabulous job and I am sending my highest kudos to the entire team! Keep it up.',
			location: 'Tulsa',
		},
		{
			name: 'Oliver J. ',
			testimonial:
				'Just wanted to let you guys know that I think your platform is truly fantastic and a novel idea. As a photo journalist who is always on the move, I can honestly say that Bouk is going to be hands down the best in the business.',
			location: 'Lexington',
		},
		{
			name: 'Benjamin Q. ',
			testimonial:
				"I just want to thank you for taking the bold step to develop and launch this. I can't wait for you to go live. ",
			location: 'Atlanta',
		},
		{
			name: 'Micheala S.',
			testimonial:
				'Just wanted to give you a shout out that I love your platform. As an 72yr old Grandma, the assistance your boukers provide is unmatched. Thank you! Thank you!',
			location: 'Boston',
		},
		{
			name: 'Quincy L.',
			testimonial:
				'Having the opportunity to save and edit my pick up address is great. Having that flexibility will help me to order from multiple places and not be stuck in one spot.',
			location: 'Dallas',
		},
		{
			name: 'Theresa S.',
			testimonial:
				'More animations and images can be introduced to bring the web app to life and to attract a humane persona. ',
			location: 'Houston',
		},
		{
			name: 'Alex G.',
			testimonial:
				'The app is straightforward and easy to navigate. The app is very helpful as far as helping deliver most items that people may need in their local area. Which as locals we need easy access to.',
			location: 'Philly',
		},
		{
			name: 'Grace A.',
			testimonial:
				"I love the app and prompt response of bouker, but I wish I didn't have to join the bouker load the item onto his truck.",
			location: 'Austin',
		},
	];
	return (
		<TestimonialContainer>
			<Container>
				<div>
					<h3> Testimonials </h3>
					<Slider {...settings}>
						{people.map((data, i) => (
							<div
							// style={{ padding: "50px !important", border: "1px solid blue" }}
							>
								<Testimonial key={i}>
									<Quote />
									<p>{data.testimonial}</p>

									<Bottom>
										<div>
											<PersonIcon />
											<br />
											<PlaceIcon />
										</div>
										<Person>
											<p>{data.name}</p>
											<span> {data.location}</span>
										</Person>
										<br />
									</Bottom>
								</Testimonial>
							</div>
						))}

						{/* <Testimonial>
              <h3>2</h3>
            </Testimonial>
            <Testimonial>
              <h3>3</h3>
            </Testimonial>
            <Testimonial>
              <h3>4</h3>
            </Testimonial> */}
					</Slider>
				</div>
			</Container>
		</TestimonialContainer>
	);
}
