import { useTranslation } from "react-i18next";
import {
	crewButton,
	crewmanButton,
	homeButton,
	launchButton,
	logo,
	rocketButton,
} from "../../resources/images";
import {
	Header,
	StyledImage,
	StyledLinkHover,
	StyledLogoImage,
	StyledNavItem,
} from "./styles/styles";

export const Navbar = () => {
	const { t } = useTranslation();

	return (
		<Header>
			<StyledLogoImage to="/">
				<img src={logo} />
			</StyledLogoImage>
			<h2>
				Onboarding
				<br />
				Challenge
			</h2>
			<nav>
				<ul>
					<StyledNavItem>
						<StyledLinkHover to="/">
							<StyledImage src={homeButton} alt="homeButton" />
							<h3>{t("components.navbar.homeButton")}</h3>
						</StyledLinkHover>
					</StyledNavItem>
					<StyledNavItem>
						<StyledLinkHover to="/rocket">
							<StyledImage src={rocketButton} alt="rocketButton" />
							<h3>{t("components.navbar.rocketButton")}</h3>
						</StyledLinkHover>
					</StyledNavItem>
					<StyledNavItem>
						<StyledLinkHover to="/crewman">
							<StyledImage src={crewmanButton} alt="crewmanButton" />
							<h3>{t("components.navbar.crewmanButton")}</h3>
						</StyledLinkHover>
					</StyledNavItem>
					<StyledNavItem>
						<StyledLinkHover to="/crew">
							<StyledImage src={crewButton} alt="crewButton" />
							<h3>{t("components.navbar.crewButton")}</h3>
						</StyledLinkHover>
					</StyledNavItem>
					<StyledNavItem>
						<StyledLinkHover to="/launch">
							<StyledImage src={launchButton} alt="launchButton" />
							<h3>{t("components.navbar.launchButton")}</h3>
						</StyledLinkHover>
					</StyledNavItem>
				</ul>
			</nav>
		</Header>
	);
};
