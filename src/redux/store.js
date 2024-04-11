import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import authReducer from './authSlice';
import orderReducer from './orderSlice';
import mapReducer from './mapSlice';
import transactionReducer from './transactionSlice';
import profileReducer from './profileSlice';
import generalReducer from './generalReducer';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		cart: cartReducer,
		order: orderReducer,
		map: mapReducer,
		transaction: transactionReducer,
		profile: profileReducer,
		general: generalReducer,
	},
});
//export let persistor = persistStore(store);
