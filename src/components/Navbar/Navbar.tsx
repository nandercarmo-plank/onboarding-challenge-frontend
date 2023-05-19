import { crewButton, crewmanButton, homeButton, launchButton, logo, rocketButton } from "../../resources/images";
import { Header, StyledImage, StyledLinkHover, StyledLogoImage, StyledNavItem } from "./styles/styles";

export default function Navbar() {
	return (
		<Header>
			<StyledLogoImage to="/">
				<img src={logo} />
			</StyledLogoImage>
			<h2>Onboarding<br />Challenge</h2>
			<nav>
				<ul>
					<StyledNavItem>
						<StyledLinkHover to="/">
							<StyledImage src={homeButton} alt="homeButton" />
							<h3>Home</h3>
						</StyledLinkHover>
					</StyledNavItem>
					<StyledNavItem>
						<StyledLinkHover to="/rocket">
							<StyledImage src={rocketButton} alt="rocketButton" />
							<h3>Rocket</h3>
						</StyledLinkHover>
					</StyledNavItem>
					<StyledNavItem>
						<StyledLinkHover to="/crewman">
							<StyledImage src={crewmanButton} alt="crewmanButton" />
							<h3>Crewman</h3>
						</StyledLinkHover>
					</StyledNavItem>
					<StyledNavItem>
						<StyledLinkHover to="/crew">
							<StyledImage src={crewButton} alt="crewButton" />
							<h3>Crew</h3>
						</StyledLinkHover>
					</StyledNavItem>
					<StyledNavItem>
						<StyledLinkHover to="/launch">
							<StyledImage src={launchButton} alt="launchButton" />
							<h3>Launch</h3>
						</StyledLinkHover>
					</StyledNavItem>
				</ul>
			</nav>
		</Header>
	);
}