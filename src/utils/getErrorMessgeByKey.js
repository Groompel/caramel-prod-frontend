import ERROR_MESSAGES from '../constants/errors';

// Gets an error message for api error handling based on the provided key
// and messages map, otherwise returns default error
export default function getErorMessageByKey(key, keys) {
	if (!keys || !key) {
		return ERROR_MESSAGES.NETWORK_DEFAULT;
	}

	return keys[key] ?? ERROR_MESSAGES.NETWORK_DEFAULT;
}
