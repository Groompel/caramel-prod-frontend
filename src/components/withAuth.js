import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from '../propTypes';
import TokenService from '../services/TokenService';
import { setIsSignedIn } from '../store/authSlice';

// Auth guard
export default function withAuth(
	Component,
	signedInRequired,
	signedInForbidden
) {
	return () => {
		const isSignedIn = useSelector((state) => state.auth.isSignedIn);
		const dispatch = useDispatch();

		// Start token checker
		useEffect(() => {
			// Check the token on background
			const authChecker = setInterval(() => {
				const newAuthed = TokenService.tokenExists();

				if (newAuthed !== isSignedIn) {
					dispatch(setIsSignedIn(newAuthed));
				}
			}, 500);

			return () => {
				clearInterval(authChecker);
			};
		}, [isSignedIn]);

		// If anauthenticated and component requires sign in
		if (signedInRequired && !isSignedIn) {
			return <Navigate to="/auth/sign-in" replace />;
		}

		// If authenticated and component forbides signed in users
		if (signedInForbidden && isSignedIn) {
			return <Navigate to={'/'} />;
		}

		return <Component />;
	};
}

withAuth.propTypes = {
	Component: PropTypes.node.isRequired,
	signedInRequired: PropTypes.bool.isRequired,
	signedInForbidden: PropTypes.bool.isRequired,
};
