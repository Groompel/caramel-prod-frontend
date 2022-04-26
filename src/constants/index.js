import {
	Facebook,
	Home,
	Info,
	Instagram,
	Inventory,
	Settings,
	Twitter,
} from '@mui/icons-material';

export const API_URL = `http://127.0.0.1:8000/api`;

export const SNACKBAR_SEVERITIES = {
	SUCCESS: 'success',
	ERROR: 'error',
	INFO: 'info',
	WARNING: 'warning',
};

export const NAV_LINKS = [
	{
		text: 'Главная',
		to: '/#hero',
		icon: <Home />,
	},
	{
		text: 'О нас',
		to: '/#about',
		icon: <Info />,
	},
	{
		text: 'Продукция',
		to: '/#products',
		icon: <Inventory />,
	},
	{
		text: 'Услуги',
		to: '/#services',
		icon: <Settings />,
	},
];

export const SOCIAL_LINKS = [
	{
		href: 'https://www.instagram.com/',
		icon: <Instagram />,
	},
	{
		href: 'https://www.facebook.com/',
		icon: <Facebook />,
	},
	{
		href: 'https://www.twitter.com/',
		icon: <Twitter />,
	},
];
