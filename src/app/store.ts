import { configureStore } from '@reduxjs/toolkit';
import workoutSlice from '../features/workout/workoutSlice';
import userSlice from '../features/workout/userSlice';
import loadingSlice from '../features/workout/loadingSlice';

export const store = configureStore({
	reducer: {
		status: workoutSlice,
		user: userSlice,
		loading: loadingSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
