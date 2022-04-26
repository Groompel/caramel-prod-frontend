import Cookie from 'js-cookie';

const tokenExists = () => {
	return Boolean(Cookie.get('token'));
};

const refreshTokenExists = () => {
	return Boolean(Cookie.get('token'));
};

const getToken = () => {
	return Cookie.get('token');
};

const setToken = (token) => {
	return Cookie.set('token', token, { path: '/' });
};

const setRefreshToken = (token) => {
	return Cookie.set('refreshToken', token, { path: '/' });
};

const getRefreshToken = () => {
	return Cookie.get('refreshToken');
};

function removeTokens() {
	Cookie.remove('token');
	Cookie.remove('refreshToken');
}

const TokenService = {
	tokenExists,
	refreshTokenExists,
	getToken,
	setToken,
	setRefreshToken,
	getRefreshToken,
	removeTokens,
};

export default TokenService;
