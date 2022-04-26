const VALIDATORS = {
	NAME: {
		required: 'Введите имя',
		validate: (value) => (value.trim().length === 0 ? 'Введите имя' : true),
	},
	PHONE_NUMBER: {
		required: 'Введите номер телефона',
		pattern: {
			value: /^\+7 \([\d]{3}\) [\d]{3}-[\d]{2}-[\d]{2}$/g,
			message: 'Неверный формат телефона',
		},
	},
	EMAIL: {
		required: 'Введите email',
		pattern: {
			value:
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: 'Неверный формат email',
		},
	},
	PASSWORD: {
		required: 'Введите пароль',
		minLength: {
			value: 6,
			message: 'Минимальная длина пароля - 6 символов',
		},
		maxLength: {
			value: 16,
			message: 'Максимальная длина пароля - 16 символов',
		},
	},
};

export default VALIDATORS;
