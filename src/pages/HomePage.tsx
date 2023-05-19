import Crew from "../components/DataRenders/Crew/Crew";
import Crewman from "../components/DataRenders/Crewman/Crewman";
import Launch from "../components/DataRenders/Launch/Launch";
import Rocket from "../components/DataRenders/Rocket/Rocket";
import { ICrew } from "../dto/crewDto";
import { ICrewman } from "../dto/crewmanDto";
import { ILaunch } from "../dto/launchDto";
import { IRocket } from "../dto/rocketDto";
import { getCrews } from "../services/crewService";
import { getCrewmans } from "../services/crewmanService";
import { getLaunchs } from "../services/launchService";
import { getRockets } from "../services/rocketService";
import { DataDiv, DataHeaderDiv } from "./styles/styles";

export default function HomePage() {

	const rockets: IRocket[] = getRockets();
	const crewmans: ICrewman[] = getCrewmans();
	const crews: ICrew[] = getCrews();
	const launchs: ILaunch[] = getLaunchs();

	return (
		<DataDiv>
			<DataHeaderDiv>
				<h1>Home Page</h1>
			</DataHeaderDiv>
			<h2>Rockets</h2>
			<Rocket renderButtons={false} data={rockets} />
			<h2>Crewmans</h2>
			<Crewman renderButtons={false} data={crewmans} />
			<h2>Crews</h2>
			<Crew renderButtons={false} data={crews} />
			<h2>Launchs</h2>
			<Launch renderButtons={false} data={launchs} />
		</DataDiv>
	);
}