import './App.css';
import { AuthButtons } from './components/AuthButtons/AuthButtons';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setUser } from './features/workout/userSlice';
import { useAuth } from './app/hooks';
import { Profile } from './components/UserProfile';
import { changeFetchingStatus } from './features/workout/loadingSlice';
import { useEffect } from 'react';

function App() {
	const auth = getAuth();
	const dispatch = useAppDispatch();

	onAuthStateChanged(auth, (user) => {
		if (user) {
			dispatch(
				setUser({
					email: user.email,
					token: user.refreshToken,
					id: user.uid,
				})
			);
		} else {
			console.log('Вы не авторизованы...(');
		}
	});
	const authCheck = useAuth();
	return (
		<div className="App">
			{authCheck.isAuth ? <Profile /> : <AuthButtons />}
		</div>
	);
}

export default App;
