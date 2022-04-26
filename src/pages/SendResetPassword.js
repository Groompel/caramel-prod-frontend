import { Mail } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Link, Stack, TextField, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '../components/material/Paper';
import PasswordField from '../components/PasswordField';
import RouterLink from '../components/RouterLink';
import withAuth from '../components/withAuth';
import { API_URL } from '../constants';
import VALIDATORS from '../constants/validators';
import { AppContext } from '../contexts/AppContext';
import AuthLayout from '../layouts/Auth';
import AuthService from '../services/AuthService';
import { signIn } from '../store/authSlice';
import formatTitle from '../utils/formatTitle';

function SendResetPassword() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { toast } = useContext(AppContext);
	const [isLoading, setIsLoading] = useState(false);
	const [emailSent, sentEmailSent] = useState(false);

	const onSubmit = async (data) => {
		if (isLoading) {
			return;
		}

		data.email = data.email.trim();

		setIsLoading(true);

		const res = await AuthService.sendResetPassword(data.email);

		setIsLoading(false);

		if (res.errorMessage) {
			toast(res.errorMessage);
			return;
		}

		sentEmailSent(true);
	};

	return (
		<AuthLayout>
			<Helmet>
				<title>{formatTitle('Восстановление пароля')}</title>
			</Helmet>
			<Paper padded component="form" onSubmit={handleSubmit(onSubmit)}>
				<Typography variant="h5" mb={4}>
					Восстановление пароля
				</Typography>

				{emailSent ? (
					<>
						<Typography mb={4}>
							Готово! На вашу почту было выслано письмо с инструкциями
						</Typography>
					</>
				) : (
					<>
						<Typography mb={2}>
							На эту почту будет отправлено письмо с инструкциями для
							восстановления пароля
						</Typography>
						<TextField
							sx={{ mb: 4 }}
							fullWidth
							label="Email"
							placeholder="danial@mail.com"
							InputProps={{
								endAdornment: <Mail />,
							}}
							error={Boolean(errors.email)}
							helperText={errors.email?.message}
							disabled={isLoading}
							{...register('email', VALIDATORS.EMAIL)}
						/>

						<LoadingButton
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mb: 2 }}
							loading={isLoading}
						>
							Отправить
						</LoadingButton>
					</>
				)}
				<Button
					component={RouterLink}
					to="/sign-in"
					fullWidth
					sx={{ mb: 2 }}
					disabled={isLoading}
					variant={emailSent ? 'contained' : 'text'}
					color={emailSent ? 'primary' : 'inherit'}
				>
					Назад
				</Button>
			</Paper>
		</AuthLayout>
	);
}

export default withAuth(SendResetPassword, false, true);
