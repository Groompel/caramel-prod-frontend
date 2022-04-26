import {
	Container,
	Grid,
	IconButton,
	Link,
	Stack,
	styled,
} from '@mui/material';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import Logo from './Logo';
import RouterLink from './RouterLink';

const FooterContainer = styled('footer')(({ theme }) => ({
	paddingTop: theme.spacing(6),
	paddingBottom: theme.spacing(6),
	background: theme.palette.common.white,
}));

export default function Footer() {
	return (
		<FooterContainer>
			<Container maxWidth="lg">
				<Grid
					container
					spacing={2}
					alignItems="center"
					justifyContent="space-between"
					display="flex"
				>
					<Grid
						item
						xs={12}
						md
						display="flex"
						justifyContent={{ xs: 'center', md: 'flex-start' }}
					>
						<RouterLink to="/#hero">
							<Logo />
						</RouterLink>
					</Grid>

					<Grid
						item
						xs={12}
						md
						display="flex"
						justifyContent="center"
						textAlign="center"
					>
						<Stack
							direction={{ xs: 'column', md: 'row' }}
							spacing={{ xs: 2, md: 4 }}
						>
							{NAV_LINKS.map((link) => (
								<Link
									component={RouterLink}
									key={link.text}
									to={link.to}
									color="inherit"
									underline="hover"
									className="link"
									sx={{ whiteSpace: 'nowrap' }}
								>
									{link.text}
								</Link>
							))}
							<Link
								component={RouterLink}
								to="/sign-in"
								color="inherit"
								underline="hover"
								className="link"
							>
								Вход
							</Link>
						</Stack>
					</Grid>

					<Grid
						item
						xs={12}
						md
						display="flex"
						justifyContent={{ xs: 'center', md: 'flex-end' }}
					>
						<Stack direction="row" spacing={{ xs: 2, md: 4 }}>
							{SOCIAL_LINKS.map((link) => (
								<IconButton
									component={Link}
									key={link.href}
									href={link.href}
									color="inherit"
									underline="hover"
									className="link"
									size="large"
								>
									{link.icon}
								</IconButton>
							))}
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</FooterContainer>
	);
}
