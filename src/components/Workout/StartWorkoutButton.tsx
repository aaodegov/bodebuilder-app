import { useAppDispatch } from '../../app/hooks';
import Button from '@mui/material/Button';
import { changeWorkoutStatus } from '../../features/workout/workoutSlice';

export const StartWorkoutButton = () => {
	const dispatch = useAppDispatch();

	const startWorkout = () => {
		dispatch(changeWorkoutStatus());
	};
	return (
		<div>
			<Button
				sx={{ mb: 0.7, width: 215 }}
				onClick={() => startWorkout()}
				variant="outlined">
				Start workout
			</Button>
		</div>
	);
};
