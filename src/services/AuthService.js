import { publicRequest } from '../requestMethods';

const register = async (payload) => {
	return publicRequest.post('customer/register', payload);
};

const login = async (payload) => {
	return publicRequest.post('customer/login', payload);
};

const sendOTP = async () => {
	return publicRequest.post('customer/otp');
};

const verifyOTP = async (payload) => {
	return publicRequest.post('customer/verify', payload);
};

const changePassword = async (payload) => {
	return publicRequest.post('customer/password', payload);
};

const resetPassword = async (payload) => {
	return publicRequest.post('customer/password/reset', payload);
};

const resetForgotPassword = async (payload) => {
	return publicRequest.post('customer/password/reset/complete', payload);
};

const deleteAccount = async () => {
	return publicRequest.delete('customer/deactivate');
};

const authService = {
	register,
	login,
	sendOTP,
	verifyOTP,
	changePassword,
	resetPassword,
	resetForgotPassword,
	deleteAccount,
};

export { authService };
