import { useRoutes } from 'react-router-dom';
import MainLayout from './layouts/Main';
import HomePage from './pages/Home';
import SignInPage from './pages/SignIn';

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
	],
};

export default function Routes() {
	return useRoutes([unauthedRoutes]);
}
