import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { profileService } from '../services/ProfileService';
import { handleResponseError } from '../helpers/handle-response-errors';

export const addAddress = createAsyncThunk(
	'profile/addAddress',
	async (payload) => {
		const response = await profileService.addAddress(payload);
		return response.data;
	}
);

export const updateProfile = createAsyncThunk(
	'profile/updateProfile',
	async (payload) => {
		const response = await profileService.updateProfile(payload);
		return response.data;
	}
);
export const getProfile = createAsyncThunk('profile/getProfile', async () => {
	try {
		const response = await profileService.getProfile();

		return response.data;
	} catch (error) {
		const message = handleResponseError({ error });
		return {
			status: false,
			message,
		};
	}
});

const profileSlice = createSlice({
	name: 'profile',
	initialState: {
		profile: {},
		email: '',
		name: '',
		locations: [],
		addAddressloading: 'idle',
		updateProfileloading: 'idle',
		getProfileloading: 'idle',
	},
	reducers: {
		setLocations: (state, { payload }) => {
			state.locations.push(payload);
		},
		setProfile: (state, action) => {
			state.profile = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(addAddress.pending, (state, action) => {
			state.addAddressloading = 'loading';
		});

		builder.addCase(addAddress.fulfilled, (state, action) => {
			state.addAddressloading = 'succeeded';
			state.locations.push(action.payload.data);
		});

		builder.addCase(addAddress.rejected, (state, action) => {
			state.addAddressloading = 'failed';

			state.error = action.error.message;
		});

		builder.addCase(updateProfile.pending, (state, action) => {
			state.updateProfileloading = 'loading';
		});

		builder.addCase(updateProfile.fulfilled, (state, action) => {
			state.updateProfileloading = 'succeeded';
		});

		builder.addCase(updateProfile.rejected, (state, action) => {
			state.updateProfileloading = 'failed';
			state.error = action.error.message;
		});

		builder.addCase(getProfile.pending, (state, action) => {
			state.getProfileloading = 'loading';
		});

		builder.addCase(getProfile.fulfilled, (state, action) => {
			state.getProfileloading = 'succeeded';
			state.profile = action.payload.data;
		});
		builder.addCase(getProfile.rejected, (state, action) => {
			state.getProfileloading = 'failed';
			const message = action.error.message;
			if (new RegExp('403', 'g').test(message)) {
				localStorage.clear(); //Clear local storage
			}
			state.error = message;
		});
	},
});
export const { setLocations, setProfile } = profileSlice.actions;

export default profileSlice.reducer;
