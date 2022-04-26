import styled from '@emotion/styled';
import { Lock, Mail, Person } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Link, Stack, TextField, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import Paper from '../components/material/Paper';
import PasswordField from '../components/PasswordField';
import RouterLink from '../components/RouterLink';
import VALIDATORS from '../constants/validators';
import formatTitle from '../utils/formatTitle';

const PageContainer = styled('div')(({ theme }) => ({
	minHeight: '90vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	'.MuiPaper-root': {
		minWidth: 400,
		width: 400,
		textAlign: 'center',
	},

	[theme.breakpoints.down(432)]: {
		'.MuiPaper-root': {
			minWidth: 'initial',
			width: '100%',
		},
	},
}));

export default function SignInPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {};

	return (
		<PageContainer>
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
						{...register('email', VALIDATORS.EMAIL)}
					/>
					<PasswordField
						{...register('password', VALIDATORS.PASSWORD)}
						error={Boolean(errors.password)}
						helperText={errors.password?.message}
					/>
				</Stack>
				<Box textAlign="right" mt={1.5} mb={2}>
					<Link component={RouterLink} to="/reset-password" color="inherit">
						Забыли пароль?
					</Link>
				</Box>
				<LoadingButton
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mb: 2 }}
				>
					Войти
				</LoadingButton>
				<Typography>
					Нет аккаунта?{' '}
					<Link component={RouterLink} to="/sign-up" color="primary.dark">
						Регистрация
					</Link>
				</Typography>
			</Paper>
		</PageContainer>
	);
}
