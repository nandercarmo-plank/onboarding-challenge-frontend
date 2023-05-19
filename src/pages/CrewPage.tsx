import DataListRender from "../components/DataListRender/DataListRender";
import Crew from "../components/DataRenders/Crew/Crew";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ICrew } from "../dto/crewDto";
import { addButton } from "../resources/images";
import { getCrews } from "../services/crewService";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

export default function CrewPage() {

	const crews: ICrew[] = getCrews();

	return (
		<>
			<ContentDiv>
				<Navbar/>
				<DataDiv>
					<DataHeaderDiv>
						<h1>Crew Page</h1>
						<a href="#" onClick={() => console.log("Add Crew")}>
							<h4>Add</h4>
							<img src={addButton}/>
						</a>
					</DataHeaderDiv>
					<DataListRender >
						<Crew data={crews} />
					</DataListRender>
				</DataDiv>
			</ContentDiv>
			<Footer/>
		</>
	);
}