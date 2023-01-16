import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { setUser } from '../../../features/workout/userSlice';
import { useAppDispatch } from '../../../app/hooks';
import PersonIcon from '@mui/icons-material/Person';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export const Register = () => {
	const [open, setOpen] = React.useState(false);
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const dispatch = useAppDispatch();
	const RegisterWithEmailAndPassword = (email: string, password: string) => {
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						token: user.refreshToken,
						id: user.uid,
					})
				);
				setOpen(false);
				console.log(user);
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
				variant="outlined"
				onClick={handleClickOpen}
				startIcon={<PersonIcon />}>
				Register
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Registration</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						margin="dense"
						id="email"
						label="Email Address"
						type="email"
						fullWidth
						variant="outlined"
					/>
					<TextField
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						margin="dense"
						id="password"
						label="Password"
						type="password"
						fullWidth
						variant="outlined"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={() => RegisterWithEmailAndPassword(email, password)}>
						Create account
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
