import axios from 'axios';
import { API_URL } from '../constants';
import ERROR_MESSAGES from '../constants/errors';
import getErorMessageByKey from '../utils/getErrorMessgeByKey';

const signIn = async (email, password) => {
	const url = `${API_URL}/user/login/`;

	try {
		const res = await axios.post(url, {
			email,
			password,
		});

		return res.data;
	} catch (e) {
		// Get the status of the error
		const status = e.response?.status;

		const messages = {
			401: ERROR_MESSAGES.INVALID_CREDENTIALS,
		};

		// Get corresponding error message or return default
		let errorMessage = getErorMessageByKey(status, messages);

		return {
			errorMessage,
		};
	}
};

const signUp = async (email, name, password) => {
	const url = `${API_URL}/user/register/`;

	try {
		const res = await axios.post(url, {
			email,
			name,
			password,
		});

		return res.data;
	} catch (e) {
		// Get the status of the error
		const status = e.response?.status;

		const messages = {
			400: ERROR_MESSAGES.EMAIL_EXISTS,
		};

		// Get corresponding error message or return default
		let errorMessage = getErorMessageByKey(status, messages);

		return {
			errorMessage,
		};
	}
};

const sendResetPassword = async (email) => {
	const url = `${API_URL}/user/send-reset-password-email/`;

	try {
		const res = await axios.post(url, {
			email,
		});

		return res.data;
	} catch (e) {
		// Get the status of the error
		const status = e.response?.status;

		const messages = {
			400: ERROR_MESSAGES.RESET_PASSWORD_EMAIL_NOT_FOUND,
		};

		// Get corresponding error message or return default
		let errorMessage = getErorMessageByKey(status, messages);

		return {
			errorMessage,
		};
	}
};

const resetPassword = async (uid, token, password) => {
	const url = `${API_URL}/user/reset-password/${uid}/${token}/`;

	try {
		const res = await axios.post(url, {
			password,
		});

		return res.data;
	} catch (e) {
		// Get the status of the error
		const status = e.response?.status;

		const messages = {
			400: ERROR_MESSAGES.RESET_PASSWORD_INVALID_TOKEN,
		};

		// Get corresponding error message or return default
		let errorMessage = getErorMessageByKey(status, messages);

		return {
			errorMessage,
		};
	}
};

const AuthService = {
	signIn,
	signUp,
	sendResetPassword,
	resetPassword,
};

export default AuthService;
