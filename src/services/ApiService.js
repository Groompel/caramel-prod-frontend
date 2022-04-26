import axios from 'axios';
import { API_URL } from '../constants';

const sendUserRequest = async ({ name, phoneNumber, message }) => {
	const url = `${API_URL}/user/forms/`;

	const res = await axios.post(url, {
		name,
		phone_number: phoneNumber,
		text: message,
	});

	return true;
};

const ApiService = {
	sendUserRequest,
};

export default ApiService;
