import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { orderService } from '../services/OrderService';

export const createDelivery = createAsyncThunk(
	'order/createDelivery',
	async (payload) => {
		const response = await orderService.createDelivery(payload);
		return response.data;
	}
);

export const getDeliveryPaymentToken = createAsyncThunk(
	'order/getDeliveryPaymentToken',
	async (payload) => {
		const response = await orderService.getDeliveryPaymentToken(payload);
		return response.data;
	}
);
export const getCostBreakdown = createAsyncThunk(
	'order/getCostBreakdown',
	async (payload) => {
		const response = await orderService.getCostBreakdown(payload);
		return response.data;
	}
);

export const submitDelivery = createAsyncThunk(
	'order/submitDelivery',
	async (payload) => {
		const { data, id } = payload;

		const response = await orderService.submitDelivery(data, id);
		return response.data;
	}
);

export const getDeliveries = createAsyncThunk(
	'order/getDeliveries',
	async (payload) => {
		const response = await orderService.getDeliveries(payload);
		return response.data;
	}
);

export const getDeliveryDriverCoordinate = createAsyncThunk(
	'order/getDeliveryDriverCoordinate',
	async (payload) => {
		// Payload => Delivery ID
		const response = await orderService.getDeliveryDriverCoordinate(payload);
		return response.data;
	}
);

export const cancelDelivery = createAsyncThunk(
	'order/cancelDelivery',
	async (payload) => {
		const response = await orderService.cancelDelivery(payload);
		return response.data;
	}
);
export const cancelDeliveryFee = createAsyncThunk(
	'order/cancelDeliveryFee',
	async (payload) => {
		const response = await orderService.cancelDeliveryFee(payload);
		return response.data;
	}
);
export const tipDriver = createAsyncThunk(
	'order/tipDriver',
	async (payload) => {
		const response = await orderService.tipDriver(payload);
		return response.data;
	}
);
export const cancelTipDriver = createAsyncThunk(
	'order/cancelTipDriver',
	async (payload) => {
		const response = await orderService.CancelTipDriver(payload);
		return response.data;
	}
);
const orderSlice = createSlice({
	name: 'order',
	initialState: {
		orders: [],
		deliveries: [],
		carts: [],
		items: [],
		cost: '',
		tip: '',
		packageLocations: [],
		packageDestinations: [],
		packageLocation: {},
		packageDestination: {},
		currentDelivery: {},
		orderAddress: {},
		currentOrder: {},
		assignedDriver: {},
		ppackageLocation: '',
		ppackageDestination: '',
		destinationName: '',
		destinationPhoneNumber: '',
		note: '',
		cancelFee: 0,
		orderBreakdown: {},
		deliveryBreakdown: {},
		deliveryPaymentToken: '',
		loading: 'idle',
		submitDeliveryLoading: 'idle',
		cancelDeliveryFeeLoading: 'idle',
		getDeliveryLoading: 'idle',
		error: '',
	},
	reducers: {
		addItem: (state, { payload }) => {
			state.items.push(payload);
		},
		removeItem: (state, { payload }) => {
			const itemId = payload;
			if (state.items.length > 1) {
				state.items = state.items.splice(itemId, 1);
			} else {
				state.items = [];
			}
		},
		setNote: (state, { payload }) => {
			state.note = payload;
		},
		setTip: (state, { payload }) => {
			state.tip = payload;
		},
		setPackageLocation: (state, { payload }) => {
			state.packageLocation = payload;
		},
		setPackageDestination: (state, { payload }) => {
			state.packageDestination = payload;
		},
		setDestinationName: (state, { payload }) => {
			state.destinationName = payload;
		},
		setDestinationPhoneNumber: (state, { payload }) => {
			state.destinationPhoneNumber = payload;
		},
		setDeliveryBreakdown: (state, { payload }) => {
			state.deliveryBreakdown = payload;
		},
		setSubmitDeliveryLoading: (state, { payload }) => {
			state.submitDeliveryLoading = payload;
		},

		setOrderError: (state, action) => {
			state.error = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createDelivery.pending, (state, action) => {
			state.loading = 'loading';
		});

		builder.addCase(createDelivery.fulfilled, (state, action) => {
			state.loading = 'succeeded';
			state.currentDelivery = action.payload.data;
		});

		builder.addCase(createDelivery.rejected, (state, action) => {
			state.loading = 'failed';
			let message = action.error.message;
			if (action.error.data) message = `${message} ${action.error.data}.`;
			state.error = message;
		});

		builder.addCase(getCostBreakdown.pending, (state, action) => {
			state.loading = 'loading';
		});

		builder.addCase(getCostBreakdown.fulfilled, (state, action) => {
			state.loading = 'succeeded';
		});

		builder.addCase(getCostBreakdown.rejected, (state, action) => {
			state.loading = 'failed';
			state.error = action.error.message;
		});

		builder.addCase(getDeliveryPaymentToken.pending, (state, action) => {
			state.loading = 'loading';
		});

		builder.addCase(getDeliveryPaymentToken.fulfilled, (state, action) => {
			state.loading = 'succeeded';
			state.deliveryPaymentToken = action.payload;
		});

		builder.addCase(getDeliveryPaymentToken.rejected, (state, action) => {
			state.loading = 'failed';
			state.error = action.error.message;
		});

		builder.addCase(submitDelivery.pending, (state, action) => {
			state.submitDeliveryLoading = 'loading';
		});

		builder.addCase(submitDelivery.rejected, (state, action) => {
			state.submitDeliveryLoading = 'failed';
			state.error = action.error.message;
		});
		builder.addCase(cancelDeliveryFee.pending, (state, action) => {
			state.cancelDeliveryFeeLoading = 'loading';
		});
		builder.addCase(cancelDeliveryFee.fulfilled, (state, action) => {
			state.cancelDeliveryFeeLoading = 'succeeded';
			state.cancelFee = action.payload.data;
		});
		builder.addCase(cancelDeliveryFee.rejected, (state, action) => {
			state.cancelDeliveryFeeLoading = 'failed';
			state.error = action.error.message;
		});
		builder.addCase(getDeliveries.pending, (state, action) => {
			state.getDeliveryLoading = 'loading';
		});
		builder.addCase(getDeliveries.fulfilled, (state, action) => {
			state.getDeliveryLoading = 'succeeded';

			state.deliveries = action.payload.data;
		});
		builder.addCase(getDeliveries.rejected, (state, action) => {
			state.getDeliveryLoading = 'failed';
			state.error = action.error.message;
		});
	},
});
export const {
	addItem,
	removeItem,
	setNote,
	setDestinationName,
	setDestinationPhoneNumber,
	setPackageDestination,
	setPackageLocation,
	setDeliveryBreakdown,
	setSubmitDeliveryLoading,
	setTip,
	setOrderError,
} = orderSlice.actions;

export default orderSlice.reducer;
