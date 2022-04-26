import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../services/AuthService';
import TokenService from '../services/TokenService';

const initialState = {
	isSignedIn: TokenService.tokenExists(),
	isLoading: false,
	errorData: {
		display: false,
		message: '',
	},
};

export const signIn = createAsyncThunk(
	'auth/sign-in',
	async (data, thunkAPI) => {
		const { email, password } = data;

		const res = await AuthService.signIn(email, password);

		if (res.errorMessage) {
			return thunkAPI.rejectWithValue(res.errorMessage);
		}

		TokenService.setToken(res.access);
		TokenService.setRefreshToken(res.refresh);
		return thunkAPI.fulfillWithValue(res.token);
	}
);

export const signUp = createAsyncThunk(
	'auth/sign-up',
	async (data, thunkAPI) => {
		const { email, name, password } = data;

		const res = await AuthService.signUp(email, name, password);

		if (res.errorMessage) {
			return thunkAPI.rejectWithValue(res.errorMessage);
		}

		TokenService.setToken(res.access);
		TokenService.setRefreshToken(res.refresh);
		return thunkAPI.fulfillWithValue(res.token);
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsLoading: (state, action) => ({
			...state,
			isLoading: action.payload,
		}),
		setIsSignedIn: (state, { payload }) => ({
			...state,
			isSignedIn: payload,
		}),
	},
	extraReducers: (builder) => {
		builder
			.addCase(signIn.pending, (state, action) => {
				state.isLoading = true;
				state.isSignedIn = false;
				state.errorData.display = false;
			})
			.addCase(signIn.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSignedIn = true;
				state.errorData = {
					...state.errorData,
					...initialState.errorData,
				};
			})
			.addCase(signIn.rejected, (state, action) => {
				state.isLoading = false;
				state.isSignedIn = false;
				state.errorData = { message: action.payload, display: true };
			})
			.addCase(signUp.pending, (state, action) => {
				state.isLoading = true;
				state.isSignedIn = false;
				state.errorData.display = false;
			})
			.addCase(signUp.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSignedIn = true;
				state.errorData = {
					...state.errorData,
					...initialState.errorData,
				};
			})
			.addCase(signUp.rejected, (state, action) => {
				state.isLoading = false;
				state.isSignedIn = false;
				state.errorData = { message: action.payload, display: true };
			});
	},
});

export const { setIsLoading, setIsSignedIn } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
