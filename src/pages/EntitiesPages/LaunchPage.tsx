import { useEffect, useState } from "react";
import { Launch } from "../../components/DataRenders/Launch/Launch";
import { LaunchForm } from "../../components/Forms/Launch/LaunchForm";
import { Modal } from "../../components/Modal/Modal";
import { Navbar } from "../../components/Navbar/Navbar";
import { ICreateLaunchDto } from "../../dto/LaunchDto";
import { useLaunch } from "../../hooks/useLaunch";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

export const LaunchPage = () => {
	const [isAddModalVisible, setAddModalVisibility] = useState(false);
	const [launchs, setLaunchs] = useLaunch([]);

	const onSubmitAddForm = async (createLaunchDto: ICreateLaunchDto) => {
		setAddModalVisibility(false);
		setLaunchs.addLaunch(createLaunchDto);
	};

	useEffect(() => {
		setLaunchs.fetchLaunchs();
	}, []);

	return (
		<ContentDiv>
			<Navbar />
			<DataDiv>
				<DataHeaderDiv>
					<h1>Launchs</h1>
					<a href="#" onClick={() => setAddModalVisibility(true)}>
						<h4>Add</h4>
					</a>
				</DataHeaderDiv>
				<Launch launchs={launchs} setLaunchs={setLaunchs} />
				<Modal
					title="Add Launch"
					visible={isAddModalVisible}
					setVisible={setAddModalVisibility}
				>
					<LaunchForm onSubmit={onSubmitAddForm} />
				</Modal>
			</DataDiv>
		</ContentDiv>
	);
};
