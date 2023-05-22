import { useState } from "react";
import { DataListRender } from "../components/DataListRender/DataListRender";
import { Crew } from "../components/DataRenders/Crew/Crew";
import { CrewForm } from "../components/Forms/Crew/CrewForm";
import { Modal } from "../components/Modal/Modal";
import { Navbar } from "../components/Navbar/Navbar";
import { ICreateCrewDto, ICrewDto } from "../dto/CrewDto";
import { addButton } from "../resources/images";
import { createCrew, getCrews } from "../services/crewService";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

function CrewPage() {

	const [isAddModalVisible, setAddModalVisibility] = useState(false);

	const crews: ICrewDto[] = getCrews();

	const onSubmitAddForm = (createCrewDto: ICreateCrewDto) => {
		setAddModalVisibility(false);
		createCrew(createCrewDto);
	}

	return (
		<ContentDiv>
			<Navbar />
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
					<CrewForm onSubmit={onSubmitAddForm} />
				</Modal>
			</DataDiv>
		</ContentDiv>
	);
}

export {
	CrewPage
};
