import { useState } from "react";
import DataListRender from "../components/DataListRender/DataListRender";
import Launch from "../components/DataRenders/Launch/Launch";
import AddLaunchForm from "../components/Forms/Launch/AddLaunchForm";
import Modal from "../components/Modal/Modal";
import { ICreateLaunchDto, ILaunch } from "../dto/launchDto";
import { addButton } from "../resources/images";
import { createLaunch, getLaunchs } from "../services/launchService";
import { DataDiv, DataHeaderDiv } from "./styles/styles";

export default function LaunchPage() {

	const [isAddModalVisible, setAddModalVisibility] = useState(false);

	const launchs: ILaunch[] = getLaunchs();

	const onSubmitAddForm = (createLaunchDto: ICreateLaunchDto) => {
		setAddModalVisibility(false);
		createLaunch(createLaunchDto);
	}

	return (
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
				<AddLaunchForm onSubmit={onSubmitAddForm} />
			</Modal>
		</DataDiv>
	);
}