import { createSlice } from '@reduxjs/toolkit';

const mapSlice = createSlice({
	name: 'map',
	initialState: {
		pickupvalue: null,
		pickupinputValue: '',
		delivervalue: null,
		deliverinputValue: '',
		pickupoptions: [],
		deliveroptions: [],
		receivername: '',
		receivernumber: '',
	},
	reducers: {
		setpickUpValue: (state, { payload }) => {
			state.pickupvalue = payload;
		},
		setpickupInputValue: (state, { payload }) => {
			state.pickupinputValue = payload;
		},
		setDeliverValue: (state, { payload }) => {
			state.delivervalue = payload;
		},
		setDeliverInputValue: (state, { payload }) => {
			state.deliverinputValue = payload;
		},
		setPickupOptions: (state, { payload }) => {
			state.pickupoptions = payload;
		},
		setdeliverOptions: (state, { payload }) => {
			state.deliveroptions = payload;
		},
		setReceiverName: (state, { payload }) => {
			state.receivername = payload;
		},
		setReceiverNumber: (state, { payload }) => {
			state.receivernumber = payload;
		},
	},
});

export const {
	setpickUpValue,
	setpickupInputValue,
	setDeliverValue,
	setDeliverInputValue,
	setPickupOptions,
	setdeliverOptions,
	setReceiverName,
	setReceiverNumber,
} = mapSlice.actions;
export default mapSlice.reducer;
