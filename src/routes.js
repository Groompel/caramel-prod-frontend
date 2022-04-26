import { useRoutes } from 'react-router-dom';
import MainLayout from './layouts/Main';
import HomePage from './pages/Home';

const unauthedRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '',
			element: <HomePage />,
		},
	],
};

export default function Routes() {
	return useRoutes([unauthedRoutes]);
}
