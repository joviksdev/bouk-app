import React from 'react';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AUTH_VIEW } from '../enum';
import Btn from '../../../components/btn/btn';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, resetLoading } from '../../../redux/authSlice';
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

const ForgotPassword = ({ setCurrentAuthView, setPayload }) => {
	const dispatch = useDispatch();
	const alert = useToastAlert();

	const { loading } = useSelector((state) => state.auth);

	const isLoading = loading === 'loading';

	const initialValues = {
		email: '',
	};

	const validationSchema = yup.object().shape({
		email: yup.string().email('Invalid email').required('Email is required'),
	});

	const handleResetPassword = async (email) => {
		const res = await dispatch(resetPassword({ email })).unwrap();
		if (res && res.status === 'successful') {
			alert({ message: res.message, type: 'success' });
			typeof setPayload === 'function' && setPayload({ email });
			setCurrentAuthView(AUTH_VIEW.RESET_FORGOT_PASSWORD.value);
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
			handleResetPassword(values.email);
		},
	});

	return (
		<Form>
			<h2>Forgot Password</h2>
			<p className='desc'>
				Please put in your email address to reset your password
			</p>

			<TextField
				sx={{ marginBottom: '25px' }}
				type={'email'}
				error={Boolean(errors.email && touched.email)}
				helperText={touched.email && errors.email}
				variant={'standard'}
				fullWidth
				placeholder='name@example.com'
				value={values.email}
				onChange={handleChange('email')}
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

export default ForgotPassword;
