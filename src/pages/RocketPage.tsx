import { useState } from "react";
import DataListRender from "../components/DataListRender/DataListRender";
import Rocket from "../components/DataRenders/Rocket/Rocket";
import AddRocketForm from "../components/Forms/Rocket/AddRocketForm";
import Modal from "../components/Modal/Modal";
import { ICreateRocketDto, IRocket } from "../dto/rocketDto";
import { addButton } from "../resources/images";
import { createRocket, getRockets } from "../services/rocketService";
import { DataDiv, DataHeaderDiv } from "./styles/styles";

export default function RocketPage() {

	const [isAddModalVisible, setAddModalVisibility] = useState(false);

	const rockets: IRocket[] = getRockets();

	const onSubmitAddForm = (createRocketDto: ICreateRocketDto) => {
		setAddModalVisibility(false);
		createRocket(createRocketDto);
	}

	return (
		<DataDiv>
			<DataHeaderDiv>
				<h1>Rocket Page</h1>
				<a href="#" onClick={() => setAddModalVisibility(true)}>
					<h4>Add</h4>
					<img src={addButton} />
				</a>
			</DataHeaderDiv>
			<DataListRender >
				<Rocket data={rockets} />
			</DataListRender>
			<Modal title="Add Rocket" visible={isAddModalVisible} setVisible={setAddModalVisibility}>
				<AddRocketForm onSubmit={onSubmitAddForm} />
			</Modal>
		</DataDiv>
	);
}