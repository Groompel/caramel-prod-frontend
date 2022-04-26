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
import axios from 'axios';
import TokenService from './services/TokenService';
import { API_URL } from './constants';
import { QueryClient, QueryClientProvider } from 'react-query';

axios.interceptors.request.use((config) => {
	if (TokenService.tokenExists()) {
		const token = TokenService.getToken();
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

axios.interceptors.response.use(
	(response) => response,
	async (error) => {
		const tokenCode = error?.response?.data?.errors?.code;

		if (tokenCode === 'token_not_valid' && TokenService.refreshTokenExists()) {
			try {
				const res = await axios.post(`${API_URL}/user/refresh-token/`, {
					refresh: TokenService.getRefreshToken(),
				});

				const { access } = res.data;

				TokenService.setToken(access);
				return Promise.reject(error);
			} catch (e) {
				TokenService.removeTokens();
				return Promise.reject(e);
			}
		}

		return Promise.reject(error);
	}
);

const queryClient = new QueryClient();

function App() {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
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
			</QueryClientProvider>
		</Provider>
	);
}

export default App;
