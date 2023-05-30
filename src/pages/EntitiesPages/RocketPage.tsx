import { useEffect, useState } from "react";
import { Rocket } from "../../components/DataRenders/Rocket/Rocket";
import { RocketForm } from "../../components/Forms/Rocket/RocketForm";
import { Modal } from "../../components/Modal/Modal";
import { Navbar } from "../../components/Navbar/Navbar";
import { ICreateRocketDto } from "../../dto/RocketDto";
import { useRocket } from "../../hooks/useRocket";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

export const RocketPage = () => {
	const [isAddModalVisible, setAddModalVisibility] = useState(false);
	const [rockets, setRockets] = useRocket([]);

	const onSubmitAddForm = async (createRocketDto: ICreateRocketDto) => {
		setAddModalVisibility(false);
		setRockets.addRocket(createRocketDto);
	};

	useEffect(() => {
		setRockets.fetchRockets();
	}, []);

	return (
		<ContentDiv>
			<Navbar />
			<DataDiv>
				<DataHeaderDiv>
					<h1>Rockets</h1>
					<a href="#" onClick={() => setAddModalVisibility(true)}>
						<h4>Add</h4>
					</a>
				</DataHeaderDiv>
				<Rocket rockets={rockets} setRockets={setRockets} />
				<Modal
					title="Add Rocket"
					visible={isAddModalVisible}
					setVisible={setAddModalVisibility}
				>
					<RocketForm onSubmit={onSubmitAddForm} />
				</Modal>
			</DataDiv>
		</ContentDiv>
	);
};
