import DataListRender from "../components/DataListRender/DataListRender";
import Rocket from "../components/DataRenders/Rocket/Rocket";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { IRocket } from "../dto/rocketDto";
import { addButton } from "../resources/images";
import { getRockets } from "../services/rocketService";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

export default function RocketPage() {

	const rockets: IRocket[] = getRockets();

	return (
		<>
			<ContentDiv>
				<Navbar/>
				<DataDiv>
					<DataHeaderDiv>
						<h1>Rocket Page</h1>
						<a href="#" onClick={() => console.log("Add rocket")}>
							<h4>Add</h4>
							<img src={addButton}/>
						</a>
					</DataHeaderDiv>
					<DataListRender >
						<Rocket data={rockets} />
					</DataListRender>
				</DataDiv>
			</ContentDiv>
			<Footer/>
		</>
	);
}