import { Paper as MuiPaper, styled } from '@mui/material';

const getPaddedProps = (theme, padded) => {
	if (padded) {
		return {
			padding: theme.spacing(4),

			[theme.breakpoints.down('xl')]: {
				padding: theme.spacing(3),
			},

			[theme.breakpoints.down('lg')]: {
				padding: theme.spacing(2),
			},
		};
	}

	return {};
};

const Paper = styled(MuiPaper, {
	shouldForwardProp: (prop) => !['padded'].includes(prop),
})(({ theme, padded }) => ({
	...getPaddedProps(theme, padded),
}));

export default Paper;
