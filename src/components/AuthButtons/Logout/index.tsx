// @ts-nocheck
import { getAuth, signOut } from 'firebase/auth';
import { setUser } from '../../../features/workout/userSlice';
import { useAppDispatch } from '../../../app/hooks';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const LogOutUser = () => {
	const dispatch = useAppDispatch();

	const logOutUser = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				dispatch(
					setUser({
						email: null,
						token: null,
						id: null,
					})
				);
			})
			.catch((error) => {
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};
	return (
		<div>
			<Button
				sx={{ mb: 0.7, width: 215 }}
				onClick={() => logOutUser()}
				variant="outlined"
				startIcon={<ExitToAppIcon />}>
				Log Out
			</Button>
		</div>
	);
};
