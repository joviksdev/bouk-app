import { useDispatch, useSelector } from 'react-redux';
import { cancelDelivery, setOrderError } from '../redux/orderSlice';

export const useCancelDelivery = (callback) => {
	const dispatch = useDispatch();

	const { loading, error } = useSelector((store) => store.order);

	const handleCancelDelivery = async (deliveryId) => {
		try {
			const response = await dispatch(cancelDelivery(deliveryId)).unwrap();

			if (response.status === 'successful') {
				typeof callback === 'function' && callback();
			}
		} catch (error) {
			typeof callback === 'function' && callback('failed', error);
		}
	};

	const closeError = () => dispatch(setOrderError(''));

	return {
		cancelDelivery: handleCancelDelivery,
		isLoading: loading === 'loading',
		closeError,
		cancelDeliveryError: error,
	};
};
