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
};

export default VALIDATORS;
