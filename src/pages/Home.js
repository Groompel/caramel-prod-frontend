import { Login } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
	Button,
	Container,
	Grid,
	Stack,
	styled,
	TextField,
	Typography,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import MaskedField from '../components/MaskedField';
import Paper from '../components/material/Paper';
import RouterLink from '../components/RouterLink';
import UserRequestForm from '../components/UserRequestForm';
import formatTitle from '../utils/formatTitle';

const PageContainer = styled('div')(({ theme }) => ({
	width: '100%',
	overflow: 'hidden',
	position: 'relative',
	minHeight: '100vh',
	paddingBottom: theme.spacing(4),

	section: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),

		img: {
			width: '100%',
			maxWidth: '100%',
		},

		'&#hero': {
			paddingTop: 200,
			minHeight: '80vh',

			img: {
				position: 'absolute',
				transform: 'rotate(-32deg)',
				right: 0,
				top: 220,
				width: '100%',
				maxWidth: 400,
				zIndex: -1,
			},

			[theme.breakpoints.down(1300)]: {
				paddingTop: 150,

				img: {
					maxWidth: 300,
				},
			},

			[theme.breakpoints.down(1000)]: {
				paddingTop: 100,
				img: {
					top: 300,
				},
			},

			[theme.breakpoints.down(665)]: {
				paddingTop: 80,
				img: {
					top: 0,
					opacity: 0.5,
				},
			},
			[theme.breakpoints.down(440)]: {
				img: {
					maxWidth: '80%',
					right: '-30%',
				},
			},
		},

		[theme.breakpoints.down('md')]: {
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
		},

		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(3),
			paddingBottom: theme.spacing(3),
		},
	},
}));

export default function HomePage() {
	return (
		<PageContainer>
			<Helmet>
				<title>
					{formatTitle(
						'Самая вкусная и качественная карамель в Алматы по низким ценам напрямую с завода'
					)}
				</title>
			</Helmet>
			<Container maxWidth="lg" component="section" id="hero">
				<Grid container>
					<Grid item lg={9}>
						<Typography variant="h1" mb={5}>
							Создаем лучшую карамель
						</Typography>
						<Typography variant="subtitle1" mb={5}>
							Производство и быстрая доставка карамельного сиропа в Алматы
						</Typography>

						<Stack direction="row" spacing={4}>
							<Button variant="contained" color="primary">
								Заказать
							</Button>
							<Button color="primary" endIcon={<Login />}>
								Вход
							</Button>
						</Stack>
					</Grid>
					<Grid item lg={3}>
						<img src="/images/lollipop.png" alt="lollipop" />
					</Grid>
				</Grid>
			</Container>

			<Container maxWidth="lg" component="section" id="about">
				<Grid container spacing={{ xs: 4, md: 6 }}>
					<Grid item xs={12} md={6} lg={7} textAlign="center">
						<Typography variant="h3" mb={{ xs: 4, md: 6 }}>
							О нас
						</Typography>
						<Typography mb={2}>
							О нас Nulla quis lorem ut libero malesuada feugiat. Donec
							sollicitudin molestie malesuada. Donec rutrum congue leo eget
							malesuada. Donec rutrum congue leo eget malesuada. Sed porttitor
							lectus nibh. Nulla porttitor accumsan tincidunt.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6} lg={5}>
						<img src="/images/prod.png" alt="production" />
					</Grid>
				</Grid>
			</Container>

			<Container maxWidth="lg" component="section" id="products">
				<Typography variant="h3" mb={6} textAlign="center">
					Наша продукция
				</Typography>

				<Paper
					padded
					sx={{
						width: 'fit-content',
						minWidth: 360,
						maxWidth: 360,
						textAlign: 'center',
						margin: 'auto',
					}}
					elevation={3}
				>
					<Typography variant="h5">Карамельный сироп</Typography>

					<img src="/images/caramel-bowl.png" alt="caramel bowl" />
					<Button
						fullWidth
						component={RouterLink}
						to="/sign-in"
						variant="contained"
					>
						Заказать
					</Button>
				</Paper>
			</Container>

			<Container
				maxWidth="lg"
				component="section"
				id="services"
				textAlign="center"
			>
				<Grid container spacing={{ xs: 4, md: 6 }}>
					<Grid item xs={12} md={6} lg={7} order={{ xs: 2, md: 1 }}>
						<UserRequestForm />
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						lg={5}
						textAlign="center"
						order={{ xs: 1, md: 2 }}
					>
						<Typography variant="h3" mb={{ xs: 4, md: 6 }}>
							Хотите свое производство?
						</Typography>
						<Typography mb={2}>
							О нас Nulla quis lorem ut libero malesuada feugiat. Donec
							sollicitudin molestie malesuada. Donec rutrum congue leo eget
							malesuada. Sed porttitor lectus nibh. Nulla porttitor accumsan
							tincidunt.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</PageContainer>
	);
}
