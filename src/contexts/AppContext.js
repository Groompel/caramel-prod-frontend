import { Alert, Snackbar } from '@mui/material';
import { createContext, useState } from 'react';
import { SNACKBAR_SEVERITIES } from '../constants';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const [snackbarSeverity, setSnackbarSeverity] = useState(
		SNACKBAR_SEVERITIES.ERROR
	);
	const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

	const onSnackbarClose = () => {
		setIsSnackbarOpen(false);
	};

	const toast = (message, severity = SNACKBAR_SEVERITIES.ERROR) => {
		setSnackbarMessage(message);
		setSnackbarSeverity(severity);
		setIsSnackbarOpen(true);
	};

	const contextValue = {
		toast,
	};

	return (
		<AppContext.Provider value={contextValue}>
			<Snackbar
				open={isSnackbarOpen}
				autoHideDuration={6000}
				onClose={onSnackbarClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert
					onClose={onSnackbarClose}
					severity={snackbarSeverity}
					variant="filled"
					sx={{ width: '100%', minWidth: 300, maxWidth: '100%' }}
				>
					{snackbarMessage}
				</Alert>
			</Snackbar>
			{children}
		</AppContext.Provider>
	);
}
