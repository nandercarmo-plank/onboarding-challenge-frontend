import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Rocket } from "../../components/DataRenders/Rocket/Rocket";
import { RocketForm } from "../../components/Forms/Rocket/RocketForm";
import { Modal } from "../../components/Modal/Modal";
import { Navbar } from "../../components/Navbar/Navbar";
import { ICreateRocketDto } from "../../dto/RocketDto";
import { useRocket } from "../../hooks/useRocket";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

export const RocketPage = () => {
	const { t } = useTranslation();

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
					<h1>{t("pages.entities_pages.rockets.title")}</h1>
					<a href="#" onClick={() => setAddModalVisibility(true)}>
						<h4>{t("pages.entities_pages.add_button")}</h4>
					</a>
				</DataHeaderDiv>
				<Rocket rockets={rockets} setRockets={setRockets} />
				<Modal
					title={t("pages.entities_pages.rockets.add_modal_title")}
					visible={isAddModalVisible}
					setVisible={setAddModalVisibility}
				>
					<RocketForm onSubmit={onSubmitAddForm} />
				</Modal>
			</DataDiv>
		</ContentDiv>
	);
};
