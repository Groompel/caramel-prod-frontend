const ERROR_MESSAGES = {
	NETWORK_DEFAULT: 'Произошла ошибка при обработке запроса. Попробуйте еще раз',
	INVALID_CREDENTIALS: 'Неверное имя пользователя или пароль',
	EMAIL_EXISTS:
		'Пользователь с данным адресом электроонной почты уже существует',
	RESET_PASSWORD_EMAIL_NOT_FOUND:
		'Пользователь с данным адресом электронной почты не зарегистрирован',
	RESET_PASSWORD_INVALID_TOKEN:
		'Время действия ссылки истекло. Попробуйте отправить письмо с новой ссылкой еще раз',
};
export default ERROR_MESSAGES;
