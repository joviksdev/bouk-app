import { userRequest } from '../requestMethods';
const getProfile = async () => {
	return userRequest.get('customer/profile');
};

const updateProfile = async (payload) => {
	return userRequest.post('customer/profile', payload);
};

const addAddress = async (payload) => {
	return userRequest.post(`customer/address`, payload);
};

const profileService = { getProfile, updateProfile, addAddress };

export { profileService };
