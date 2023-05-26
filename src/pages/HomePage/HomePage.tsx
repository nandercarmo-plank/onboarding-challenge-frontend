import { useEffect, useState } from "react";
import { crewmanButton, launchButton, rocketButton } from "../../resources/images";
import { HomeCard, HomeCardsContainerDiv, HomeContentDiv, HomeLogoDiv } from "./styles/styles";

export const HomePage = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	const fetchData = async () => {
		setIsLoaded(true);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<HomeContentDiv>
			<HomeLogoDiv>
				<h1 className={isLoaded ? 'loaded' : ''}>
					Plank<br />Onboarding<br />Challenge
				</h1>
			</HomeLogoDiv>
			<HomeCardsContainerDiv>
				<HomeCard to="/rocket">
					<img src={rocketButton} />
					<h4>Rockets</h4>
				</HomeCard>
				<HomeCard to="/crewman">
					<img src={crewmanButton} />
					<h4>Crewmans</h4>
				</HomeCard>
				<HomeCard to="/crewman">
					<img src={crewmanButton} />
					<h4>Crews</h4>
				</HomeCard>
				<HomeCard to="/launch">
					<img src={launchButton} />
					<h4>Launchs</h4>
				</HomeCard>
			</HomeCardsContainerDiv>
		</HomeContentDiv>
	);
}
