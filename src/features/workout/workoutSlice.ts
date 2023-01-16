import { createSlice } from '@reduxjs/toolkit';

export interface WorkoutStatus {
	completed: boolean;
}

const initialState: WorkoutStatus = {
	completed: false,
};

export const workoutSlice = createSlice({
	name: 'status',
	initialState,
	reducers: {
		changeWorkoutStatus: (state) => {
			state.completed = !state.completed;
			console.log(state.completed);
		},
	},
});

export const { changeWorkoutStatus } = workoutSlice.actions;
export default workoutSlice.reducer;
