import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { transactionService } from '../services/TransactionService';

export const initializeTransaction = createAsyncThunk(
	'transaction/initializeTransaction',
	async (payload) => {
		const response = await transactionService.initializeTransaction(payload);
		return response.data;
	}
);

const transactionSlice = createSlice({
	name: 'transaction',
	initialState: {
		transactionPayload: {},
		transactions: [],
		showPaymentModal: false,
		loading: 'idle',
		cancelFee: 0,
	},
	reducers: {
		setTransactionPayload: (state, { payload }) => {
			state.transactionPayload = payload;
		},
		setPaymentModal: (state, { payload }) => {
			state.showPaymentModal = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(initializeTransaction.pending, (state, action) => {
			state.loading = 'loading';
		});
		builder.addCase(initializeTransaction.fulfilled, (state, action) => {
			state.loading = 'succeeded';
		});
		builder.addCase(initializeTransaction.rejected, (state, action) => {
			state.loading = 'failed';
			state.error = action.error.message;
		});
	},
});

export const { setTransactionPayload, setPaymentModal } =
	transactionSlice.actions;

export default transactionSlice.reducer;
