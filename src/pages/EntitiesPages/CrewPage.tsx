import { useEffect, useState } from "react";

import { Crew } from "../../components/DataRenders/Crew/Crew";
import { CrewForm } from "../../components/Forms/Crew/CrewForm";
import { Modal } from "../../components/Modal/Modal";
import { Navbar } from "../../components/Navbar/Navbar";
import { type ICreateCrewDto } from "../../dto/CrewDto";
import { useCrew } from "../../hooks/useCrew";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

export const CrewPage = () => {
	const [isAddModalVisible, setAddModalVisibility] = useState(false);
	const [crews, setCrews] = useCrew([]);

	const onSubmitAddForm = (createCrewDto: ICreateCrewDto): void => {
		setAddModalVisibility(false);
		void setCrews.addCrew(createCrewDto);
	};

	useEffect(() => {
		void setCrews.fetchCrews();
	}, []);

	return (
		<ContentDiv>
			<Navbar />
			<DataDiv>
				<DataHeaderDiv>
					<h1>Crews</h1>
					<a
						href="#"
						onClick={() => {
							setAddModalVisibility(true);
						}}
					>
						<h4>Add</h4>
					</a>
				</DataHeaderDiv>
				<Crew crews={crews} setCrews={setCrews} />
				<Modal
					title="Add Crew"
					visible={isAddModalVisible}
					setVisible={setAddModalVisibility}
				>
					<CrewForm onSubmit={onSubmitAddForm} />
				</Modal>
			</DataDiv>
		</ContentDiv>
	);
};
