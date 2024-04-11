import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import {
	TextField,
	InputAdornment,
	IconButton,
	Typography,
	Box,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_VIEW } from '../enum';
import Btn from '../../../components/btn/btn';
import {
	resetPassword,
	resetLoading,
	resetForgotPassword,
} from '../../../redux/authSlice';
import { useToastAlert } from '../../../hooks';
const Form = styled.form`
	padding: 10px 25px 30px;
	font-family: 'Oxygen', sans-serif;

	h2 {
		color: #181725;
		font-size: 28px;
		font-weight: 700;
		font-family: inherit;
	}

	.desc {
		color: #7c7c7c;
		font-size: 16px;
		font-family: inherit;
		margin-bottom: 40px;
	}
`;

const ResetForgotPassword = ({ setCurrentAuthView, setPayload, payload }) => {
	const dispatch = useDispatch();
	const alert = useToastAlert();

	const [isLoading, setLoading] = useState(false);
	const [isTogglePassword, setTogglePassword] = useState(false);
	const [isToggleConfirmPassword, setToggleConfirmPassword] = useState(false);

	const emailRef = useRef('');

	if (payload && payload.email) emailRef.current = payload.email;

	const initialValues = {
		token: '',
		password: '',
		confirmPassword: '',
	};

	const validationSchema = yup.object().shape({
		token: yup.string().required('Enter otp'),
		password: yup.string().required('Enter new password'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Password do not match')
			.required('Enter new password'),
	});

	const handleResetPassword = async (payload) => {
		setLoading(true);
		const res = await dispatch(
			resetForgotPassword({
				email: emailRef.current,
				token: payload.token,
				password: payload.password,
			})
		).unwrap();
		setLoading(false);
		if (res && res.status === 'successful') {
			alert({ message: res.message, type: 'success' });
			typeof setPayload === 'function' && setPayload(null);
			setCurrentAuthView(AUTH_VIEW.SIGNIN.value);
			resetLoading();
			return;
		}

		if (res?.status === false) {
			alert({ message: res.message, type: 'error' });
			return;
		}
	};

	const { values, handleChange, handleSubmit, errors, touched } = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			handleResetPassword(values);
		},
	});

	const { token, password, confirmPassword } = values;

	return (
		<Form>
			<Box
				sx={{
					marginBottom: '20px',
				}}
			>
				<Typography sx={{ marginBottom: ['15px'] }} variant={'h5'}>
					Reset Password
				</Typography>
				<Typography variant={'body1'}>
					Please enter the OTP sent to your email {payload?.email} and your new
					password.
				</Typography>
			</Box>

			<TextField
				sx={{ marginBottom: '25px' }}
				type={'password'}
				error={Boolean(errors.token && touched.token)}
				helperText={touched.token && errors.token}
				variant={'standard'}
				fullWidth
				placeholder='Enter OTP'
				value={token}
				onChange={handleChange('token')}
			/>

			<TextField
				sx={{ marginBottom: '25px' }}
				type={isTogglePassword ? 'text' : 'password'}
				error={Boolean(errors.password && touched.password)}
				helperText={touched.password && errors.password}
				variant={'standard'}
				fullWidth
				placeholder='New password'
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

			<TextField
				sx={{ marginBottom: '25px' }}
				type={isToggleConfirmPassword ? 'text' : 'password'}
				error={Boolean(errors.confirmPassword && touched.confirmPassword)}
				helperText={touched.confirmPassword && errors.confirmPassword}
				variant={'standard'}
				fullWidth
				placeholder='Confirm Password'
				value={confirmPassword}
				onChange={handleChange('confirmPassword')}
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<IconButton
								onClick={(e) => {
									setToggleConfirmPassword(!isToggleConfirmPassword);
								}}
							>
								{isToggleConfirmPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>

			<Btn
				disabled={isLoading}
				type='button'
				look='primary-filled'
				onClick={handleSubmit}
			>
				{isLoading ? 'Loading...' : 'Reset Password'}
			</Btn>
		</Form>
	);
};

export default ResetForgotPassword;
