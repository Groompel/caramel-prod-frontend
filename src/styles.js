import { GlobalStyles } from '@mui/material';

export default function AppStyles() {
	return (
		<GlobalStyles
			styles={(theme) => ({
				':root': {
					fontSize: 16,
				},
				body: {
					backgroundColor: theme.palette.background.default,
					color: theme.palette.text.primary,
					fontFamily: 'Montserrat',
				},
			})}
		/>
	);
}
