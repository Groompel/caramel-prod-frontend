import styled from '@emotion/styled';
import { Lock, Mail, Person } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Link, Stack, TextField, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '../components/material/Paper';
import PasswordField from '../components/PasswordField';
import RouterLink from '../components/RouterLink';
import withAuth from '../components/withAuth';
import VALIDATORS from '../constants/validators';
import AuthLayout from '../layouts/Auth';
import { signUp } from '../store/authSlice';
import formatTitle from '../utils/formatTitle';

function SignUpPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();

	const isLoading = useSelector((state) => state.auth.isLoading);
	const dispatch = useDispatch();

	const onSubmit = (data) => {
		if (isLoading) {
			return;
		}

		data.email = data.email.trim();
		data.name = data.name.trim();
		data.password = data.password.trim();

		dispatch(signUp(data));
	};

	return (
		<AuthLayout>
			<Helmet>
				<title>{formatTitle('Регистрация')}</title>
			</Helmet>
			<Paper padded component="form" onSubmit={handleSubmit(onSubmit)}>
				<Typography variant="h5" mb={4}>
					Регистрация
				</Typography>

				<Stack spacing={2} mb={4}>
					<TextField
						label="Email"
						placeholder="danial@mail.com"
						InputProps={{
							endAdornment: <Mail />,
						}}
						error={Boolean(errors.email)}
						helperText={errors.email?.message}
						{...register('email', VALIDATORS.EMAIL)}
					/>
					<TextField
						label="Имя"
						placeholder="Даниал"
						InputProps={{
							endAdornment: <Person />,
						}}
						error={Boolean(errors.name)}
						helperText={errors.name?.message}
						{...register('name', VALIDATORS.NAME)}
					/>
					<PasswordField
						{...register('password', VALIDATORS.PASSWORD)}
						error={Boolean(errors.password)}
						helperText={errors.password?.message}
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
				>
					Зарегистрироваться
				</LoadingButton>
				<Typography>
					Есть аккаунт?{' '}
					<Link component={RouterLink} to="/sign-in">
						Вход
					</Link>
				</Typography>
			</Paper>
		</AuthLayout>
	);
}

export default withAuth(SignUpPage, false, true);
