import { useState } from "react";
import { DataListRender } from "../components/DataListRender/DataListRender";
import { Crewman } from "../components/DataRenders/Crewman/Crewman";
import { CrewmanForm } from "../components/Forms/Crewman/CrewmanForm";
import { Modal } from "../components/Modal/Modal";
import { Navbar } from "../components/Navbar/Navbar";
import { ICreateCrewmanDto, ICrewmanDto } from "../dto/CrewmanDto";
import { addButton } from "../resources/images";
import { createCrewman, getCrewmans } from "../services/crewmanService";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

function CrewmanPage() {

	const [isAddModalVisible, setAddModalVisibility] = useState(false);

	const crewmans: ICrewmanDto[] = getCrewmans();

	const onSubmitAddForm = (createCrewmanDto: ICreateCrewmanDto) => {
		setAddModalVisibility(false);
		createCrewman(createCrewmanDto);
	}

	return (
		<ContentDiv>
			<Navbar />
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
					<CrewmanForm onSubmit={onSubmitAddForm} />
				</Modal>
			</DataDiv>
		</ContentDiv>
	);
}

export {
	CrewmanPage
};
