import { useState } from "react";
import { DataListRender } from "../components/DataListRender/DataListRender";
import { Launch } from "../components/DataRenders/Launch/Launch";
import { LaunchForm } from "../components/Forms/Launch/LaunchForm";
import { Modal } from "../components/Modal/Modal";
import { Navbar } from "../components/Navbar/Navbar";
import { ICreateLaunchDto, ILaunchDto } from "../dto/LaunchDto";
import { addButton } from "../resources/images";
import { createLaunch, getLaunchs } from "../services/launchService";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

function LaunchPage() {

	const [isAddModalVisible, setAddModalVisibility] = useState(false);

	const launchs: ILaunchDto[] = getLaunchs();

	const onSubmitAddForm = (createLaunchDto: ICreateLaunchDto) => {
		setAddModalVisibility(false);
		createLaunch(createLaunchDto);
	}

	return (
		<ContentDiv>
			<Navbar />
			<DataDiv>
				<DataHeaderDiv>
					<h1>Launch Page</h1>
					<a href="#" onClick={() => setAddModalVisibility(true)}>
						<h4>Add</h4>
						<img src={addButton} />
					</a>
				</DataHeaderDiv>
				<DataListRender >
					<Launch data={launchs} />
				</DataListRender>
				<Modal title="Add Launch" visible={isAddModalVisible} setVisible={setAddModalVisibility}>
					<LaunchForm onSubmit={onSubmitAddForm} />
				</Modal>
			</DataDiv>
		</ContentDiv>
	);
}

export {
	LaunchPage
};
