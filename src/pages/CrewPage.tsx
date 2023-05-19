import { useState } from "react";
import DataListRender from "../components/DataListRender/DataListRender";
import Crew from "../components/DataRenders/Crew/Crew";
import AddCrewForm from "../components/Forms/Crew/AddCrewForm";
import Modal from "../components/Modal/Modal";
import { ICreateCrewDto, ICrew } from "../dto/crewDto";
import { addButton } from "../resources/images";
import { createCrew, getCrews } from "../services/crewService";
import { DataDiv, DataHeaderDiv } from "./styles/styles";

export default function CrewPage() {

	const [isAddModalVisible, setAddModalVisibility] = useState(false);

	const crews: ICrew[] = getCrews();

	const onSubmitAddForm = (createCrewDto: ICreateCrewDto) => {
		setAddModalVisibility(false);
		createCrew(createCrewDto);
	}

	return (
		<DataDiv>
			<DataHeaderDiv>
				<h1>Crew Page</h1>
				<a href="#" onClick={() => setAddModalVisibility(true)}>
					<h4>Add</h4>
					<img src={addButton} />
				</a>
			</DataHeaderDiv>
			<DataListRender >
				<Crew data={crews} />
			</DataListRender>
			<Modal title="Add Crew" visible={isAddModalVisible} setVisible={setAddModalVisibility}>
				<AddCrewForm onSubmit={onSubmitAddForm} />
			</Modal>
		</DataDiv>
	);
}