import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer/Footer";
import { Notification } from "./components/Notification/Notification";
import { useNotification } from "./hooks/useNotification";
import { CrewPage } from "./pages/EntitiesPages/CrewPage";
import { CrewmanPage } from "./pages/EntitiesPages/CrewmanPage";
import { LaunchPage } from "./pages/EntitiesPages/LaunchPage";
import { RocketPage } from "./pages/EntitiesPages/RocketPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { GlobalStyle } from "./styles/styles";
import { theme } from "./styles/theme";

function App() {
	const [notification, notificationActions] = useNotification();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Routes>
					<Route path="/" Component={HomePage} />
					<Route path="/rocket" Component={RocketPage} />
					<Route path="/rockets" Component={RocketPage} />
					<Route path="/crewman" Component={CrewmanPage} />
					<Route path="/crewmans" Component={CrewmanPage} />
					<Route path="/crew" Component={CrewPage} />
					<Route path="/crews" Component={CrewPage} />
					<Route path="/launch" Component={LaunchPage} />
					<Route path="/launchs" Component={LaunchPage} />
					<Route path="*" Component={NotFoundPage} />
				</Routes>
				<Footer />
				<Notification
					visible={notification.show}
					type={notification.type}
					message={notification.message}
					hideFunction={notificationActions.hideNotification}
				/>
			</Router>
		</ThemeProvider>
	);
}

export default App;
