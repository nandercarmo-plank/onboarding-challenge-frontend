import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
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
				<HomeCard to="/rocket">
					<img src={rocketButton} />
					<h4>{t("pages.home.rocketCard")}</h4>
				</HomeCard>
				<HomeCard to="/crewman">
					<img src={crewmanButton} />
					<h4>{t("pages.home.crewmanCard")}</h4>
				</HomeCard>
				<HomeCard to="/crewman">
					<img src={crewmanButton} />
					<h4>{t("pages.home.crewCard")}</h4>
				</HomeCard>
				<HomeCard to="/launch">
					<img src={launchButton} />
					<h4>{t("pages.home.launchCard")}</h4>
				</HomeCard>
			</HomeCardsContainerDiv>
		</HomeContentDiv>
	);
};
