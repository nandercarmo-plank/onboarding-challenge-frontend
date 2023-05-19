import { ThemeProvider } from "styled-components";
import GlobalStyle from './styles/styles';
import { theme } from "./styles/theme";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<HomePage/>
		</ThemeProvider>
	);
}

export default App;