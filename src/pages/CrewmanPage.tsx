import DataListRender from "../components/DataListRender/DataListRender";
import Crewman from "../components/DataRenders/Crewman/Crewman";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ICrewman } from "../dto/crewmanDto";
import { addButton } from "../resources/images";
import { getCrewmans } from "../services/crewmanService";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

export default function CrewmanPage() {

	const crewmans: ICrewman[] = getCrewmans();

	return (
		<>
			<ContentDiv>
				<Navbar/>
				<DataDiv>
					<DataHeaderDiv>
						<h1>Crewman Page</h1>
						<a href="#" onClick={() => console.log("Add Crewman")}>
							<h4>Add</h4>
							<img src={addButton}/>
						</a>
					</DataHeaderDiv>
					<DataListRender >
						<Crewman data={crewmans} />
					</DataListRender>
				</DataDiv>
			</ContentDiv>
			<Footer/>
		</>
	);
}