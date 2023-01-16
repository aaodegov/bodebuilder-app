import React from 'react';
import { AuthWithGoogle } from './AuthWithGoogle';
import { Register } from './Register';
import { Login } from './Login';
import style from './style.module.css';

export const AuthButtons = () => {
	return (
		<div className={style.authButtons}>
			<h2>Welcome to bodybuilder app</h2>
			<Register />
			<Login />
			<AuthWithGoogle />
		</div>
	);
};
