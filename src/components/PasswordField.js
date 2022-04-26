import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import { forwardRef, useState } from 'react';

const PasswordField = forwardRef(({ ...props }, ref) => {
	const [isVisible, setIsVisible] = useState(false);

	const onVisibilityToggleClick = () => {
		setIsVisible((prev) => !prev);
	};

	return (
		<TextField
			label="Пароль"
			type={isVisible ? 'text' : 'password'}
			{...props}
			ref={ref}
			InputProps={{
				endAdornment: (
					<IconButton
						onClick={onVisibilityToggleClick}
						color="inherit"
						edge="end"
						size="large"
					>
						{isVisible ? <VisibilityOff /> : <Visibility />}
					</IconButton>
				),
			}}
		/>
	);
});

export default PasswordField;
