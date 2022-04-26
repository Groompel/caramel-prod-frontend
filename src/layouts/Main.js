import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LayoutContainer = styled('div')(({ theme }) => ({
	width: '100%',
}));

export default function MainLayout() {
	return (
		<LayoutContainer>
			<Header />
			<Outlet />
			<Footer />
		</LayoutContainer>
	);
}
