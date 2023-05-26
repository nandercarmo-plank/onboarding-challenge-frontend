import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer/Footer";
import { Notification } from "./components/Notification/Notification";
import { NotificationProvider } from "./context/NotificationContext";
import { CrewPage } from "./pages/CrewPage";
import { CrewmanPage } from "./pages/CrewmanPage";
import { HomePage } from "./pages/HomePage";
import { LaunchPage } from "./pages/LaunchPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RocketPage } from "./pages/RocketPage";
import { GlobalStyle } from './styles/styles';
import { theme } from "./styles/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<NotificationProvider>
				<GlobalStyle />
				<Router>
					<Routes>
						<Route path="/" Component={HomePage} />
						<Route path="/rocket" Component={RocketPage} />
						<Route path="/crewman" Component={CrewmanPage} />
						<Route path="/crew" Component={CrewPage} />
						<Route path="/launch" Component={LaunchPage} />
						<Route path="*" Component={NotFoundPage} />
					</Routes>
					<Footer />
					<Notification />
				</Router>
			</NotificationProvider>
		</ThemeProvider>
	);
}

export default App;
