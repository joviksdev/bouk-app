import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../services/AuthService';
import { handleResponseError } from '../helpers/handle-response-errors';

export const login = createAsyncThunk('auth/login', async (payload) => {
	try {
		const response = await authService.login(payload);

		return response.data;
	} catch (error) {
		const message = handleResponseError({ error });
		return {
			status: false,
			message,
		};
	}
});

export const userDetails = createAsyncThunk('auth/me', async (payload) => {
	try {
		const response = await authService.resetForgotPassword(payload);

		return response.data;
	} catch (error) {
		const message = handleResponseError({ error });
		return {
			status: false,
			message,
		};
	}
});

export const register = createAsyncThunk('auth/register', async (payload) => {
	try {
		const response = await authService.register(payload);

		return response.data;
	} catch (error) {
		const message = handleResponseError({ error });
		return {
			status: false,
			message,
		};
	}
});

export const resetPassword = createAsyncThunk(
	'auth/resetPassword',
	async (payload) => {
		try {
			const response = await authService.resetPassword(payload);

			return response.data;
		} catch (error) {
			const message = handleResponseError({ error });
			return {
				status: false,
				message,
			};
		}
	}
);

export const resetForgotPassword = createAsyncThunk(
	'auth/resetForgotPassword',
	async (payload) => {
		try {
			const response = await authService.resetForgotPassword(payload);

			return response.data;
		} catch (error) {
			const message = handleResponseError({ error });
			return {
				status: false,
				message,
			};
		}
	}
);

export const deleteAccount = createAsyncThunk(
	'auth/deleteAccount',
	async () => {
		try {
			const response = await authService.deleteAccount();

			return response.data;
		} catch (error) {
			const message = handleResponseError({ error });
			return {
				status: false,
				message,
			};
		}
	}
);

export const verifyOTP = createAsyncThunk('auth/verifyOTP', async (payload) => {
	const response = await authService.verifyOTP(payload);
	return response.data;
});

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		currentUser: null,
		loading: 'idle',
		error: '',
		email: '',
		password: '',
		phoneNumber: '',
		name: '',
		deviceId: '',
		user: {},
		tos: false,
	},
	reducers: {
		logout: (state) => {
			state.currentUser = null;
			localStorage.clear();
		},
		resetLoading: (state) => {
			state.loading = 'idle';
		},
		setUser: (state, action) => {
			state.user = action.payload;
			state.currentUser = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state, action) => {
			state.loading = 'loading';
		});

		builder.addCase(login.fulfilled, (state, action) => {
			state.loading = 'succeeded';
			state.currentUser = action.payload.data;
			state.user = action.payload.data;
			localStorage.setItem('auth:details', JSON.stringify(state.currentUser));
		});

		builder.addCase(login.rejected, (state, action) => {
			state.loading = 'failed';
			state.error = action.error.message;
		});
		builder.addCase(register.pending, (state, action) => {
			state.loading = 'loading';
		});
		builder.addCase(register.fulfilled, (state, action) => {
			state.loading = 'succeeded';
			state.phoneNumber = action.payload.data.phoneNumber;
		});
		builder.addCase(register.rejected, (state, action) => {
			state.loading = 'failed';
			state.error = action.error.message;
		});
		builder.addCase(verifyOTP.pending, (state, action) => {
			state.loading = 'loading';
		});
		builder.addCase(verifyOTP.fulfilled, (state, action) => {
			state.loading = 'succeeded';
		});
		builder.addCase(verifyOTP.rejected, (state, action) => {
			state.loading = 'failed';
			state.error = action.error.message;
		});
		builder.addCase(resetPassword.pending, (state, action) => {
			state.loading = 'loading';
		});
		builder.addCase(resetPassword.fulfilled, (state, action) => {
			state.loading = 'succeeded';
		});
		builder.addCase(resetPassword.rejected, (state, action) => {
			state.loading = 'failed';
			state.error = action.error.message;
		});
		builder.addCase(deleteAccount.fulfilled, (state, action) => {
			state.loading = 'succeeded';
			state.user = null;
			state.currentUser = null;
		});
	},
});

export const { logout, resetLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
