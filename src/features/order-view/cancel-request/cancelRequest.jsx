import { Grid, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Btn from '../../../components/btn/btn';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
const Container = styled.div`
  padding: 10px 25px 30px;
  font-family: "Oxygen", sans-serif;

  h6 {
    color: #181725;
    font-size: 24px;
    font-weight: 700;
    font-family: inherit;
  }
  .innerContainer {
    display: flex,
    flex-direction: column;
    justify-content: space-between;
    alignItems: center;
  }
  p {
    font-family: 'Oxygen';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
 padding-top: 20px;

text-align: center;

color: #181725;
  }
  .desc {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
  
  .forgot-password {
    color: #6438b0;
    font-family: "Oxygen", sans-serif;
    font-weight: 700;
    cursor: pointer;
    display: inline-block;
    float: right;
    margin-bottom: 15px;
  }
`;

const CancelRequest = ({ setCurrentOrderView, closeModal }) => {
	const { cancelFee } = useSelector((state) => state.order);
	return (
		<Container>
			<h6> Cancel Request</h6>
			<hr />
			<div className='innerContainer'>
				<div
					style={{
						backgroundColor: '#E0CFFF',
						width: '80px',
						height: '80px',
						display: 'flex',
						justifyContent: 'center',
						borderRadius: '60px',
						alignItems: 'center',
						alignSelf: 'center',
						margin: '0 auto',
					}}
				>
					{' '}
					<CloseIcon fontSize='large' />{' '}
				</div>

				<div>
					<p className='desc'>Are you sure you want to cancel?</p>
				</div>
				<div>
					<p>You can't cancel after pick-up.</p>{' '}
				</div>
				<div>
					<p>
						You will get charged $4.50 after 5mins of a driver accepting your
						request and starts driving to pick-up point if the user decides to
						cancel.
					</p>
				</div>
				<div style={{ paddingTop: '20px' }}>
					{' '}
					<Btn
						type='button'
						look='primary-filled'
						onClick={(event) => console.log()}
					>
						{' '}
						Cancel Request{' '}
					</Btn>
				</div>
			</div>
		</Container>
	);
};

export default CancelRequest;
