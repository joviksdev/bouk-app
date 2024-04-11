import React from 'react';
import { ORDER_VIEW } from '../enum';
import styled from '@emotion/styled';
import Btn from '../../../components/btn/btn';
import { ReactComponent as Confetti } from '../../../assets/confetti.svg';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3rem 1.5rem 3rem;

	p {
		font-family: 'Oxygen', sans-serif;
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		color: #181725;
		margin-top: 1rem;
	}

	span {
		font-family: 'Oxygen', sans-serif;
		font-weight: 400;
		font-size: 12px;
		color: #7c7c7c;
		margin-bottom: 2rem;
	}
`;
const Summary = styled.div`
	padding: 20px;
	background-color: #fff;
	width: 100%;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	aligncontent: center;
	alignitems: center;
	p {
		margin-bottom: 10px;
		font-size: 18px;
		font-weight: 700;
	}

	span {
		color: #7c7c7c;
	}
`;
const Button = styled.button`
	border: none;
	outline: none !important;
	width: 100%;
	padding: 11px 15px;
	margin-top: 10px;
	font-size: 17px;
	cursor: pointer;
	border-radius: 5px;
	background-color: #e0cfff;
	color: #3e236e;
	font-family: 'Oxygen', sans-serif;
`;
const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Person = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	p {
		margin-bottom: 5px;
		margin-top: 0px;
		font-weight: 700;
		font-size: 16px;
	}

	span {
		font-weight: 400;
		font-size: 14px;
		font-family: 'Oxygen', sans-serif;
		color: #7c7c7c;
		margin-top: 2px;
		line-height: 18px;
	}
`;
const DeliveryCompleted = ({ setCurrentOrderView, closeModal }) => {
	const navigate = useNavigate();
	return (
		<Container>
			<Confetti />
			<p>Delivery Completed</p>
			<Summary>
				<Bottom>
					<div>
						<PersonIcon />
					</div>
					<Person>
						<p>Kolade David</p>

						<span>Delivery in progress</span>
					</Person>
				</Bottom>

				<div>
					<p style={{ marginTop: 'auto' }}>R600</p>
				</div>
			</Summary>
			<Btn
				type='button'
				look='primary-filled'
				onClick={() => setCurrentOrderView(ORDER_VIEW.TIP_DRIVER.value)}
			>
				Tip Kolade
			</Btn>
			<Button onClick={(event) => navigate('/profile')}>
				Back To Homepage
			</Button>
		</Container>
	);
};

export default DeliveryCompleted;
