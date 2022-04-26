import { Lock, Mail } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Link, Stack, TextField, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Paper from '../components/material/Paper';
import PasswordField from '../components/PasswordField';
import RouterLink from '../components/RouterLink';
import withAuth from '../components/withAuth';
import { API_URL, SNACKBAR_SEVERITIES } from '../constants';
import VALIDATORS from '../constants/validators';
import { AppContext } from '../contexts/AppContext';
import AuthLayout from '../layouts/Auth';
import AuthService from '../services/AuthService';
import { signIn } from '../store/authSlice';
import formatTitle from '../utils/formatTitle';

function ResetPassword() {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm();
	const { toast } = useContext(AppContext);
	const [params] = useSearchParams();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (data) => {
		if (isLoading) {
			return;
		}

		data.password = data.password.trim();

		setIsLoading(true);

		const res = await AuthService.resetPassword(
			params.get('uid'),
			params.get('token'),
			data.password
		);

		setIsLoading(false);

		if (res.errorMessage) {
			toast(res.errorMessage);
			return;
		}

		toast('Вы успешно поменяли пароль!', SNACKBAR_SEVERITIES.SUCCESS);
		navigate('/sign-in', { replace: true });
	};

	return (
		<AuthLayout>
			<Helmet>
				<title>{formatTitle('Вход')}</title>
			</Helmet>
			<Paper padded component="form" onSubmit={handleSubmit(onSubmit)}>
				<Typography variant="h5" mb={4}>
					Новый пароль
				</Typography>

				<Stack spacing={2} mb={4}>
					<PasswordField
						{...register('password', VALIDATORS.PASSWORD)}
						error={Boolean(errors.password)}
						helperText={errors.password?.message}
						label="Придумайте пароль"
					/>
					<TextField
						label="Повторите пароль"
						type="password"
						InputProps={{
							endAdornment: <Lock />,
						}}
						error={Boolean(errors.passwordRepeat)}
						helperText={errors.passwordRepeat?.message}
						{...register('passwordRepeat', {
							required: 'Повторите пароль',
							validate: (value) =>
								getValues('password') === value ? true : 'Пароли не совпадают',
						})}
					/>
				</Stack>

				<LoadingButton
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mb: 2 }}
					loading={isLoading}
				>
					Установить пароль
				</LoadingButton>
			</Paper>
		</AuthLayout>
	);
}

export default withAuth(ResetPassword, false, true);
