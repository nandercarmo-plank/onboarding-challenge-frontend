import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CrewPage from "./pages/CrewPage";
import CrewmanPage from "./pages/CrewmanPage";
import HomePage from "./pages/HomePage";
import LaunchPage from "./pages/LaunchPage";
import RocketPage from "./pages/RocketPage";
import { ContentDiv } from "./pages/styles/styles";
import GlobalStyle from './styles/styles';
import { theme } from "./styles/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<ContentDiv>
					<Navbar />
					<Routes>
						<Route path="/" Component={HomePage} />
						<Route path="/rocket" Component={RocketPage} />
						<Route path="/crewman" Component={CrewmanPage} />
						<Route path="/crew" Component={CrewPage} />
						<Route path="/launch" Component={LaunchPage} />
						<Route Component={HomePage} />
					</Routes>
				</ContentDiv>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;