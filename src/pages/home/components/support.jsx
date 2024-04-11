import React from 'react';
import styled from '@emotion/styled';
import SupportImage from '../../../assets/support.png';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { Link, Box, Typography } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
	maxWidth: '1300px',
	padding: ['15px', '20px'],
	margin: ['4rem auto', '6rem auto'],
	fontFamily: `'Oxygen', sans-serif`,
	h2: {
		fontFamily: `'Oxygen', sans-serif`,
		color: '#181725',
		fontWeight: '700',
		fontSize: ['28px', '32px', '40px'],
		lineHeight: '56px',
		textAlign: 'center',
		marginBottom: '15px',
	},
	'.here': {
		textAlign: 'center',
		color: '#181725',
		fontSize: '20px',
		lineHeight: '25px',
		fontWeight: '400',
		marginBottom: '4rem',
		fontFamily: `'Oxygen', sans-serif`,
	},
}));

const SectionContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 50px;

	@media screen and (max-width: 996px) {
		display: flex;
	}
`;

const ImageContainer = styled.div`
	//   border: 1px solid red;
	@media screen and (max-width: 996px) {
		display: none;
	}
`;
const Faqs = styled.div`
	//   border: 1px solid red;
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media screen and (max-width: 996px) {
		margin: 0 auto;
	}
`;

const Cta = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	button {
		background: #3e236e;
		border-radius: 4px;
		padding: 8px 30px;
		font-size: 14px;
		color: #f7f8fb;
		outline: none;
		border: none;
		margin: 0 auto;
		margin-top: 20px;
		cursor: pointer;
	}
`;

const Faq = styled.div`
	background: #f7f8fb;
	border: 1px solid #e2e2e2;
	border-radius: 16px;
	padding: 15px;

	span {
		display: block;
		color: #7c7c7c;
		padding-top: 10px;
		padding-bottom: 40px;
		// border: 1px solid red;
	}
`;

const Question = styled.div`
	display: flex;
	justify-content: space-between;
	padding-right: 10px;

	p {
		color: #181725;
		font-weight: 700;
		font-size: 18px;
		font-family: 'Oxygen', sans-serif;
	}

	div {
		display: flex;
		cursor: pointer;
	}
`;

const data = [
	{
		question: 'How do I make payment on Bouk? ',
		answer:
			'After entering your request details, your card details will be requested to enable and confirm payment. ',
	},
	{
		question:
			'Can I request a pick-up and delivery without shopping through bouk?',
		answer:
			'Yes, you can request pick up and delivery without shopping on our platforms.',
	},
	{
		question: 'How do I receive payment?',
		answer: 'Bouk will make payments weekly to your provided account.',
	},
	{
		question: 'Does bouk use third party navigations?',
		answer: 'Yes, bouk drivers use third party navigations like google map.',
	},
];

export default function Support() {
	const [currentView, setCurrentView] = React.useState(0);

	//   function renderCurrentView() {
	//     switch (currentView) {
	//       case 0:
	//         return "ljjkk";

	//       case 1:
	//         return "jjjjj";

	//       case 2:
	//         return "m;kljbkhj";

	//       case 3:
	//         return "kjbhjbk";

	//       default:
	//         return null;
	//     }
	//   }

	return (
		<div style={{ background: '#fff' }}>
			<Container>
				<Typography
					sx={{
						fontFamily: `'Oxygen', sans-serif`,
						color: '#181725',
						fontWeight: '700',
						fontSize: ['24px', '32px', '40px'],
						lineHeight: '56px',
						textAlign: 'center',
						marginBottom: '15px',
					}}
					component={'h3'}
				>
					Get support when you need it
				</Typography>
				<p className='here'>Here to make life more convenient for you.</p>
				<SectionContainer>
					<ImageContainer>
						<img src={SupportImage} alt='support' width='100%' />
					</ImageContainer>
					<Faqs>
						{data.map((faq, i) => (
							<Faq key={i}>
								<Question>
									<p>{faq.question}</p>

									<div onClick={() => setCurrentView(i)}>
										{currentView !== i && (
											<MdKeyboardArrowDown fontSize={30} color='#323232' />
										)}

										{currentView === i && (
											<MdKeyboardArrowUp fontSize={30} color='#323232' />
										)}
									</div>
								</Question>
								{currentView === i && <span>{faq.answer}</span>}
							</Faq>
						))}
					</Faqs>
				</SectionContainer>
				<Cta>
					<Link href='/FAQs'>
						<button>See All</button>
					</Link>
				</Cta>
			</Container>
		</div>
	);
}
