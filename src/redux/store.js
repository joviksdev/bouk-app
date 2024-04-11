import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import authReducer from './authSlice';
import orderReducer from './orderSlice';
import mapReducer from './mapSlice';
import transactionReducer from './transactionSlice';
import profileReducer from './profileSlice';
import generalReducer from './generalReducer';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
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
