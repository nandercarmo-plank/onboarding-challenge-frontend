import { Crew } from "../components/DataRenders/Crew/Crew";
import { Crewman } from "../components/DataRenders/Crewman/Crewman";
import { Launch } from "../components/DataRenders/Launch/Launch";
import { Rocket } from "../components/DataRenders/Rocket/Rocket";
import { ICrewDto } from "../dto/CrewDto";
import { ICrewmanDto } from "../dto/CrewmanDto";
import { ILaunchDto } from "../dto/LaunchDto";
import { IRocketDto } from "../dto/RocketDto";
import { getCrews } from "../services/crewService";
import { getCrewmans } from "../services/crewmanService";
import { getLaunchs } from "../services/launchService";
import { getRockets } from "../services/rocketService";
import { DataDiv, DataHeaderDiv } from "./styles/styles";

function HomePage() {

	const rockets: IRocketDto[] = getRockets();
	const crewmans: ICrewmanDto[] = getCrewmans();
	const crews: ICrewDto[] = getCrews();
	const launchs: ILaunchDto[] = getLaunchs();

	return (
		<DataDiv>
			<DataHeaderDiv>
				<h1>Home Page</h1>
			</DataHeaderDiv>
			<h2 className="h2-title">Rockets</h2>
			<Rocket renderButtons={false} data={rockets} />
			<h2 className="h2-title">Crewmans</h2>
			<Crewman renderButtons={false} data={crewmans} />
			<h2 className="h2-title">Crews</h2>
			<Crew renderButtons={false} data={crews} />
			<h2 className="h2-title">Launchs</h2>
			<Launch renderButtons={false} data={launchs} />
		</DataDiv>
	);
}

export {
	HomePage
};
