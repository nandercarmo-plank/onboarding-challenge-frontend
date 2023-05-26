import { useEffect, useState } from "react";
import { DataListRender } from "../../components/DataListRender/DataListRender";
import { Crew } from "../../components/DataRenders/Crew/Crew";
import { CrewForm } from "../../components/Forms/Crew/CrewForm";
import { Modal } from "../../components/Modal/Modal";
import { Navbar } from "../../components/Navbar/Navbar";
import { ICreateCrewDto } from "../../dto/CrewDto";
import { useCrew } from "../../hooks/useCrew";
import { addButton } from "../../resources/images";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

export const CrewPage = () => {

	const [isAddModalVisible, setAddModalVisibility] = useState(false);
	const [crews, setCrews] = useCrew([]);

	const onSubmitAddForm = async (createCrewDto: ICreateCrewDto) => {
		setAddModalVisibility(false);
		setCrews.addCrew(createCrewDto);
	}

	useEffect(() => { setCrews.fetchCrews(); }, []);

	return (
		<ContentDiv>
			<Navbar />
			<DataDiv>
				<DataHeaderDiv>
					<h1>Crews</h1>
					<a href="#" onClick={() => setAddModalVisibility(true)}>
						<h4>Add</h4>
						<img src={addButton} />
					</a>
				</DataHeaderDiv>
				<DataListRender >
					<Crew crews={crews} setCrews={setCrews} />
				</DataListRender>
				<Modal title="Add Crew" visible={isAddModalVisible} setVisible={setAddModalVisibility}>
					<CrewForm onSubmit={onSubmitAddForm} />
				</Modal>
			</DataDiv>
		</ContentDiv>
	);
}
