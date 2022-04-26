import { useRoutes } from 'react-router-dom';
import MainLayout from './layouts/Main';
import HomePage from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import SendResetPassword from './pages/SendResetPassword';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

const unauthedRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '',
			element: <HomePage />,
		},
		{
			path: '/sign-in',
			element: <SignInPage />,
		},
		{
			path: '/sign-up',
			element: <SignUpPage />,
		},
		{
			path: '/send-reset-password',
			element: <SendResetPassword />,
		},
		{
			path: '/reset-password',
			element: <ResetPassword />,
		},
	],
};

export default function Routes() {
	return useRoutes([unauthedRoutes]);
}
