import { Mail } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Link, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
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
import AuthLayout from '../layouts/Auth';
import { signIn } from '../store/authSlice';
import formatTitle from '../utils/formatTitle';

function SignInPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const isLoading = useSelector((state) => state.auth.isLoading);
	const dispatch = useDispatch();

	const onSubmit = (data) => {
		if (isLoading) {
			return;
		}

		data.email = data.email.trim();
		data.password = data.password.trim();

		dispatch(signIn(data));
	};

	return (
		<AuthLayout>
			<Helmet>
				<title>{formatTitle('Вход')}</title>
			</Helmet>
			<Paper padded component="form" onSubmit={handleSubmit(onSubmit)}>
				<Typography variant="h5" mb={4}>
					Вход
				</Typography>

				<Stack spacing={2}>
					<TextField
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
					<PasswordField
						{...register('password', VALIDATORS.PASSWORD)}
						disabled={isLoading}
						error={Boolean(errors.password)}
						helperText={errors.password?.message}
					/>
				</Stack>
				<Box textAlign="right" mt={1.5} mb={2}>
					<Link
						component={RouterLink}
						to="/send-reset-password"
						color="inherit"
					>
						Забыли пароль?
					</Link>
				</Box>
				<LoadingButton
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mb: 2 }}
					loading={isLoading}
				>
					Войти
				</LoadingButton>
				<Typography>
					Нет аккаунта?{' '}
					<Link component={RouterLink} to="/sign-up">
						Регистрация
					</Link>
				</Typography>
			</Paper>
		</AuthLayout>
	);
}

export default withAuth(SignInPage, false, true);
