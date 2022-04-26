import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isSideMenuOpen: true,
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setIsSideMenuOpen: (state, { payload }) => ({
			...state,
			isSideMenuOpen: payload,
		}),
		toggleSideMenu: (state) => ({
			...state,
			isSideMenuOpen: !state.isSideMenuOpen,
		}),
	},
});

export const { setIsSideMenuOpen, toggleSideMenu } = appSlice.actions;

const appReducer = appSlice.reducer;

export default appReducer;
