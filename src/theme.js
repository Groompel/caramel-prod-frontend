import { createTheme, responsiveFontSizes } from '@mui/material';

const COLORS = {
	LIGHT_GREY: '#F5F5F5',
	GREY: '#ABABAB',
	DARK_GREY: '#666666',
	YELLOW: '#F2C938',
	BLACK: '#1D1C1B',
};

let theme = createTheme({
	palette: {
		background: { default: COLORS.LIGHT_GREY },
		primary: { main: COLORS.YELLOW },
		text: { primary: COLORS.BLACK },
		divider: COLORS.GREY,
	},
	typography: {
		fontFamily: 'Montserrat, sans-serif',
		h1: {
			fontFamily: 'Manrope, sans-serif',
			fontSize: '6rem',
			lineHeight: 1,
		},
		h2: {
			fontFamily: 'Manrope, sans-serif',
		},
		h3: {
			fontFamily: 'Manrope, sans-serif',
			fontSize: '2.5rem',
		},

		subtitle1: {
			fontWeight: 300,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					textTransform: 'none',
					fontSize: '1.125rem',

					':not(.MuiButton-text)': {
						paddingLeft: theme.spacing(4),
						paddingRight: theme.spacing(4),
					},
				}),
			},
		},
		MuiPaper: {
			variants: [
				{
					props: {
						padded: true,
					},
					style: ({ theme }) => ({
						padding: theme.spacing(4),

						[theme.breakpoints.down('xl')]: {
							padding: theme.spacing(3),
						},

						[theme.breakpoints.down('lg')]: {
							padding: theme.spacing(2),
						},
					}),
				},
			],
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
