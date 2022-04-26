import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/manrope';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import AppStyles from './styles';
import { Provider } from 'react-redux';
import store from './store';
import { AppContextProvider } from './contexts/AppContext';
import { HelmetProvider } from 'react-helmet-async';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<HelmetProvider>
					<AppContextProvider>
						<div className="App">
							<BrowserRouter>
								<CssBaseline />
								<AppStyles />
								<Routes />
							</BrowserRouter>
						</div>
					</AppContextProvider>
				</HelmetProvider>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
