// @ts-nocheck
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { setUser } from '../../../features/workout/userSlice';
import { useAppDispatch } from '../../../app/hooks';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

export const AuthWithGoogle = () => {
	const dispatch = useAppDispatch();

	const authorizationHandler = () => {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						token: user.refreshToken,
						id: user.uid,
					})
				);
			})
			.catch((error) => {
				const errorMessage = error.message;
				const errorCode = error.code;
				console.log(error);
			});
	};
	return (
		<div>
			<Button
				sx={{ mb: 0.7, width: 215 }}
				onClick={() => authorizationHandler()}
				variant="outlined"
				startIcon={<GoogleIcon />}>
				Login with Google
			</Button>
		</div>
	);
};
