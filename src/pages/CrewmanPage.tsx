import { useState } from "react";
import DataListRender from "../components/DataListRender/DataListRender";
import Crewman from "../components/DataRenders/Crewman/Crewman";
import AddCrewmanForm from "../components/Forms/Crewman/AddCrewmanForm";
import Modal from "../components/Modal/Modal";
import { ICreateCrewmanDto, ICrewman } from "../dto/crewmanDto";
import { addButton } from "../resources/images";
import { createCrewman, getCrewmans } from "../services/crewmanService";
import { DataDiv, DataHeaderDiv } from "./styles/styles";

export default function CrewmanPage() {

	const [isAddModalVisible, setAddModalVisibility] = useState(false);

	const crewmans: ICrewman[] = getCrewmans();

	const onSubmitAddForm = (createCrewmanDto: ICreateCrewmanDto) => {
		setAddModalVisibility(false);
		createCrewman(createCrewmanDto);
	}

	return (
		<DataDiv>
			<DataHeaderDiv>
				<h1>Crewman Page</h1>
				<a href="#" onClick={() => setAddModalVisibility(true)}>
					<h4>Add</h4>
					<img src={addButton} />
				</a>
			</DataHeaderDiv>
			<DataListRender >
				<Crewman data={crewmans} />
			</DataListRender>
			<Modal title="Add Crewman" visible={isAddModalVisible} setVisible={setAddModalVisibility}>
				<AddCrewmanForm onSubmit={onSubmitAddForm} />
			</Modal>
		</DataDiv>
	);
}