import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';

const TestimonialContainer = styled.div`
	background: #fff;
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
	.slick-slide img {
		margin-right: 25px;
	}
	.slick-list {
		margin-bottom: 3rem;
	}

	.slick-dots li.slick-active button:before {
		color: #3e236e !important;
		font-size: 0.75rem;
	}

	.slick-dots li button:before {
		color: #e0ccff !important;
		font-size: 0.75rem !important;
	}

	@media screen and (max-width: 576px) {
		padding: 15px 20px;
	}
`;

const Slide = styled.div`
	padding: 25px;
	margin-right: 20px;
	margin-left: 20px;
	border-radius: 8px;

	position: relative;
	img {
		width: 100%;
	}

	@media screen and (max-width: 576px) {
		width: 95%;
		margin: 0 auto;
	}
`;

export default function Downloaditems() {
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
	const slides = [
		{
			name: 'images/BoukAppPreview3.png',
		},
		{
			name: 'images/BoukAppPreview2.png',
		},
		{
			name: 'images/BoukAppPreview4.png',
		},
		{
			name: 'images/BoukAppPreview1.png',
		},
		{
			name: 'images/BoukAppPreview5.png',
		},
		{
			name: 'images/BoukAppPreview6.png',
		},
	];
	return (
		<TestimonialContainer>
			<Container>
				<div>
					<Slider {...settings}>
						{slides.map((data, i) => (
							<Slide>
								<img src={data.name} />
							</Slide>
						))}
					</Slider>
				</div>
			</Container>
		</TestimonialContainer>
	);
}
