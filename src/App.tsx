import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer/Footer";
import { Notification } from "./components/Notification/Notification";
import { NotificationProvider } from "./context/NotificationContext";
import { CrewPage } from "./pages/EntitiesPages/CrewPage";
import { CrewmanPage } from "./pages/EntitiesPages/CrewmanPage";
import { LaunchPage } from "./pages/EntitiesPages/LaunchPage";
import { RocketPage } from "./pages/EntitiesPages/RocketPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { GlobalStyle } from "./styles/styles";
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
