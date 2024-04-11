import { userRequest } from '../requestMethods';

const getOrders = async () => {
	return userRequest.get(`customer/order`);
};

const getDeliveries = async () => {
	return userRequest.get(`customer/delivery`);
};

const createOrder = async (payload, id) => {
	return userRequest.post(`customer/order/${id}`, payload);
};

const createDelivery = async (payload) => {
	return userRequest.post(`customer/delivery`, payload);
};

const submitDelivery = async (payload, id) => {
	return userRequest.post(`customer/delivery/${id}/submit`, payload);
};

const cancelDelivery = async (id) => {
	return userRequest.put(`customer/delivery/${id}/cancel`);
};
const cancelDeliveryFee = async (payload, id) => {
	return userRequest.put(`customer/delivery/${id}/cancel-fee`, payload);
};
const tipDriver = async (payload, id) => {
	return userRequest.put(`customer/delivery/${id}/give-tip`, payload);
};

const CancelTipDriver = async (payload, id) => {
	return userRequest.put(`customer/delivery/${id}/cancel-tip`, payload);
};
const getDeliveryPaymentToken = async (id) => {
	return userRequest.put(`customer/delivery/${id}/pay`);
};

const getDriver = async (id) => {
	return userRequest.get(`customer/driver-location/${id}`);
};

const rateDriver = async (data) => {
	return userRequest.post(`customer/rating`, data);
};

const getCostBreakdown = async (id) => {
	return userRequest.put(`customer/delivery/${id}/price-breakdown`);
};

const getDeliveryDriverCoordinate = async (id) => {
	return userRequest.get(`customer/delivery/${id}/driver-coordinates`);
};

const orderService = {
	getOrders,
	createOrder,
	createDelivery,
	getDeliveryPaymentToken,
	getDeliveries,
	submitDelivery,
	getDriver,
	getCostBreakdown,
	rateDriver,
	cancelDelivery,
	cancelDeliveryFee,
	tipDriver,
	CancelTipDriver,
	getDeliveryDriverCoordinate,
};

export { orderService };
