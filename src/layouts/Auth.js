import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled('div')(({ theme }) => ({
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

export default function AuthLayout({ children }) {
	return (
		<LayoutContainer>
			<Container maxWidth="xs">{children} </Container>
		</LayoutContainer>
	);
}
