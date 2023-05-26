import { useEffect, useState } from "react";
import { DataListRender } from "../components/DataListRender/DataListRender";
import { Crewman } from "../components/DataRenders/Crewman/Crewman";
import { CrewmanForm } from "../components/Forms/Crewman/CrewmanForm";
import { Modal } from "../components/Modal/Modal";
import { Navbar } from "../components/Navbar/Navbar";
import { ICreateCrewmanDto } from "../dto/CrewmanDto";
import { useCrewman } from "../hooks/useCrewman";
import { addButton } from "../resources/images";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

export const CrewmanPage = () => {

	const [isAddModalVisible, setAddModalVisibility] = useState(false);
	const [crewmans, setCrewmans] = useCrewman([]);

	const onSubmitAddForm = async (createCrewmanDto: ICreateCrewmanDto) => {
		setAddModalVisibility(false);
		setCrewmans.addCrewman(createCrewmanDto);
	}

	useEffect(() => { setCrewmans.fetchCrewmans(); }, []);

	return (
		<ContentDiv>
			<Navbar />
			<DataDiv>
				<DataHeaderDiv>
					<h1>Crewmans</h1>
					<a href="#" onClick={() => setAddModalVisibility(true)}>
						<h4>Add</h4>
						<img src={addButton} />
					</a>
				</DataHeaderDiv>
				<DataListRender >
					<Crewman crewmans={crewmans} setCrewmans={setCrewmans} />
				</DataListRender>
				<Modal title="Add Crewman" visible={isAddModalVisible} setVisible={setAddModalVisibility}>
					<CrewmanForm onSubmit={onSubmitAddForm} />
				</Modal>
			</DataDiv>
		</ContentDiv>
	);
}
