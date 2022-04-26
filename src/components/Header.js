import {
	Home,
	Info,
	Inventory,
	Login,
	Menu,
	Settings,
} from '@mui/icons-material';
import {
	AppBar,
	Button,
	Container,
	IconButton,
	Link,
	Stack,
	styled,
	SwipeableDrawer,
	Toolbar,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { NAV_LINKS } from '../constants';
import { toggleSideMenu } from '../store/appSlice';
import Logo from './Logo';
import RouterLink from './RouterLink';
import SideMenu from './SideMenu';

const HeaderContainer = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,

	'.MuiContainer-root': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	'.link': {
		fontSize: '1.125rem',
	},
}));

export default function Header() {
	const theme = useTheme();
	const matches768pxDown = useMediaQuery(theme.breakpoints.down(768));
	const dispatch = useDispatch();

	const onSideMenuToggle = () => {
		dispatch(toggleSideMenu());
	};

	return (
		<HeaderContainer color="inherit" elevation={0} position="static">
			{matches768pxDown && <SideMenu />}
			<Toolbar disableGutters>
				<Container maxWidth="lg">
					<RouterLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
						<Logo />
					</RouterLink>

					{matches768pxDown ? (
						<IconButton size="large" onClick={onSideMenuToggle} edge="end">
							<Menu />
						</IconButton>
					) : (
						<Stack direction="row" spacing={4} alignItems="center">
							{NAV_LINKS.map((link) => (
								<Link
									component={RouterLink}
									key={link.text}
									to={link.to}
									color="inherit"
									underline="hover"
									className="link"
								>
									{link.text}
								</Link>
							))}
							<Button
								className="link"
								component={RouterLink}
								endIcon={<Login />}
								to="/sign-in"
								color="inherit"
								sx={{ opacity: 0.7, fontWeight: 400 }}
							>
								Войти
							</Button>
						</Stack>
					)}
				</Container>
			</Toolbar>
		</HeaderContainer>
	);
}
