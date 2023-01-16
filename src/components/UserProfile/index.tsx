import React from 'react';
import { LogOutUser } from '../AuthButtons/Logout';
import { StartWorkoutButton } from '../Workout/StartWorkoutButton';

export const Profile = () => {
	return (
		<div>
			<LogOutUser />
			<StartWorkoutButton />
		</div>
	);
};
