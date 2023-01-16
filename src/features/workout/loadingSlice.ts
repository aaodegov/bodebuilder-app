import { createSlice } from '@reduxjs/toolkit';

export interface ILoading {
	isFetching: boolean;
}

const initialState: ILoading = {
	isFetching: false,
};

export const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		changeFetchingStatus: (state) => {
			state.isFetching = !state.isFetching;
			console.log(state.isFetching);
		},
	},
});

export const { changeFetchingStatus } = loadingSlice.actions;
export default loadingSlice.reducer;
