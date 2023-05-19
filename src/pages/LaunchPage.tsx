import DataListRender from "../components/DataListRender/DataListRender";
import Launch from "../components/DataRenders/Launch/Launch";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ILaunch } from "../dto/launchDto";
import { addButton } from "../resources/images";
import { getLaunchs } from "../services/launchService";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

export default function LaunchPage() {

	const launchs: ILaunch[] = getLaunchs();

	return (
		<>
			<ContentDiv>
				<Navbar/>
				<DataDiv>
					<DataHeaderDiv>
						<h1>Launch Page</h1>
						<a href="#" onClick={() => console.log("Add Launch")}>
							<h4>Add</h4>
							<img src={addButton}/>
						</a>
					</DataHeaderDiv>
					<DataListRender >
						<Launch data={launchs} />
					</DataListRender>
				</DataDiv>
			</ContentDiv>
			<Footer/>
		</>
	);
}