import React, { useRef, useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import Alert from '../../../components/alert';
import { AUTH_VIEW } from '../enum';
import Btn from '../../../components/btn/btn';
import { login } from '../../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { getProfile } from '../../../redux/profileSlice';
import { sendToken } from '../../../redux/generalReducer';
const Form = styled.form`
	padding: 10px 25px 30px;
	font-family: 'Oxygen', sans-serif;

	h2 {
		color: #181725;
		font-size: 30px;
		font-weight: 700;
		font-family: inherit;
	}

	.desc {
		color: #7c7c7c;
		font-size: 16px;
		font-family: inherit;
		margin-bottom: 40px;
	}

	.forgot-password {
		color: #6438b0;
		font-family: 'Oxygen', sans-serif;
		font-weight: 700;
		cursor: pointer;
		display: inline-block;
		float: right;
		margin-bottom: 15px;
	}
`;

const Cta = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	margin-top: 30px;

	span {
		color: #181725;
		font-weight: 700;
		font-size: 14px;
	}

	a {
		color: #6438b0 !important;
		font-family: 'Oxygen', sans-serif;
		font-weight: 700;
		font-size: 14px;
		cursor: pointer;
	}
`;

const SignIn = ({ setCurrentAuthView, closeModal, callback }) => {
	const { loading, error } = useSelector((state) => state.auth);
	const alertRef = useRef(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isTogglePassword, setTogglePassword] = useState(false);

	const validationSchema = yup.object().shape({
		email: yup.string().email().required('Enter a email'),
		password: yup.string().required('Enter a password'),
	});

	const initialValues = {
		email: '',
		password: '',
	};

	const processSubmitDetails = async (payload) => {
		try {
			const res = await dispatch(login(payload)).unwrap();
			// handle result here
			if (res.status === 'successful') {
				closeModal();

				const resData = await dispatch(getProfile()).unwrap();

				if (resData.status === 'success')
					typeof callback === 'function' && callback();
				const fbToken = JSON.parse(localStorage.getItem('fbToken'));
				if (fbToken) {
					await dispatch(sendToken({ token: fbToken })).unwrap();
				}

				return;
			}

			if (res?.status === false) {
				alertRef.current.show({ message: `${res.message}`, type: 'error' });
				return;
			}
		} catch (error) {
			alertRef.current.show({ message: `${error.message}`, type: 'error' });
		}
	};

	const { values, handleChange, handleSubmit, errors, touched } = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			processSubmitDetails(values);
		},
	});

	const { email, password } = values;

	return (
		<Form>
			<h2>Sign In</h2>
			<p className='desc'>Please fill in your details to continue</p>

			<Alert
				ref={alertRef}
				sx={{
					marginBottom: '20px',
				}}
			/>

			<TextField
				sx={{ marginBottom: '25px' }}
				type={'email'}
				error={Boolean(errors.email && touched.email)}
				helperText={touched.email && errors.email}
				variant={'standard'}
				fullWidth
				placeholder='name@example.com'
				value={email}
				onChange={handleChange('email')}
			/>

			<TextField
				sx={{ marginBottom: '10px' }}
				type={isTogglePassword ? 'text' : 'password'}
				error={Boolean(errors.password && touched.password)}
				helperText={touched.password && errors.password}
				variant={'standard'}
				fullWidth
				placeholder='**********'
				value={password}
				onChange={handleChange('password')}
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<IconButton
								onClick={(e) => {
									setTogglePassword(!isTogglePassword);
								}}
							>
								{isTogglePassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>

			<p
				className='forgot-password'
				onClick={() => setCurrentAuthView(AUTH_VIEW.FORGOT_PASSWORD.value)}
			>
				Forgot password?
			</p>

			<Btn
				type='button'
				look='primary-filled'
				onClick={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				{loading === 'loading' ? <CircularProgress size={18} /> : 'Continue'}
			</Btn>

			<Cta>
				<span>Don’t have an account?</span>
				<a onClick={() => setCurrentAuthView(AUTH_VIEW.SIGNUP.value)}>
					Sign Up
				</a>
			</Cta>
		</Form>
	);
};

export default SignIn;
