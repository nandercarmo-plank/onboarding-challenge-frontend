import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
	crewButton,
	crewmanButton,
	launchButton,
	rocketButton,
} from "../../resources/images";
import {
	HomeCard,
	HomeCardsContainerDiv,
	HomeContentDiv,
	HomeLogoDiv,
} from "./styles/styles";

export const HomePage = () => {
	const { t } = useTranslation();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<HomeContentDiv>
			<HomeLogoDiv>
				<h1 className={isLoaded ? "loaded" : ""}>
					Plank
					<br />
					Onboarding
					<br />
					Challenge
				</h1>
			</HomeLogoDiv>
			<HomeCardsContainerDiv>
				<HomeCard id="rocket-card" to="/rocket">
					<img src={rocketButton} />
					<h4>{t("pages.home.rocketCard")}</h4>
				</HomeCard>
				<HomeCard id="crewman-card" to="/crewman">
					<img src={crewmanButton} />
					<h4>{t("pages.home.crewmanCard")}</h4>
				</HomeCard>
				<HomeCard id="crew-card" to="/crew">
					<img src={crewButton} />
					<h4>{t("pages.home.crewCard")}</h4>
				</HomeCard>
				<HomeCard id="launch-card" to="/launch">
					<img src={launchButton} />
					<h4>{t("pages.home.launchCard")}</h4>
				</HomeCard>
			</HomeCardsContainerDiv>
		</HomeContentDiv>
	);
};
