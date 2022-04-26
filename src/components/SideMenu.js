import { Close, Home } from '@mui/icons-material';
import {
	AppBar,
	Button,
	IconButton,
	Link,
	List,
	ListItem,
	styled,
	SwipeableDrawer,
	Toolbar,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NAV_LINKS } from '../constants';
import PropTypes from '../propTypes';
import { setIsSideMenuOpen, toggleSideMenu } from '../store/appSlice';
import Logo from './Logo';
import RouterLink from './RouterLink';

const SideMenuContainer = styled(SwipeableDrawer)(({ theme }) => ({
	'.MuiPaper-root': {
		minWidth: 400,
	},

	[theme.breakpoints.down('sm')]: {
		'.MuiPaper-root': {
			minWidth: '100%',
		},
	},
}));

export default function SideMenu() {
	const isSideMenuOpen = useSelector((state) => state.app.isSideMenuOpen);
	const dispatch = useDispatch();
	console.log(isSideMenuOpen);

	const onClose = () => {
		dispatch(setIsSideMenuOpen(false));
	};

	const onOpen = () => {
		dispatch(setIsSideMenuOpen(true));
	};

	const iOS =
		typeof navigator !== 'undefined' &&
		/iPad|iPhone|iPod/.test(navigator.userAgent);

	return (
		<SideMenuContainer
			open={isSideMenuOpen}
			onOpen={onOpen}
			onClose={onClose}
			anchor="right"
			disableBackdropTransition={!iOS}
			disableDiscovery={iOS}
		>
			<AppBar position="sticky" elevation={0} color="inherit">
				<Toolbar justifyContent="space-between">
					<Logo />
					<IconButton
						size="large"
						edge="end"
						onClick={onClose}
						sx={{ ml: 'auto' }}
					>
						<Close />
					</IconButton>
				</Toolbar>
			</AppBar>
			<List>
				{NAV_LINKS.map((link) => (
					<Link
						key={link.to}
						component={RouterLink}
						to={link.to}
						color="inherit"
						underline="none"
						onClick={onClose}
					>
						<ListItem
							component={Button}
							color="inherit"
							startIcon={link.icon}
							size="large"
						>
							{link.text}
						</ListItem>
					</Link>
				))}
			</List>
		</SideMenuContainer>
	);
}
