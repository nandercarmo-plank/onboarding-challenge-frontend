import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Crewman } from "../../components/DataRenders/Crewman/Crewman";
import { CrewmanForm } from "../../components/Forms/Crewman/CrewmanForm";
import { Modal } from "../../components/Modal/Modal";
import { Navbar } from "../../components/Navbar/Navbar";
import { ICreateCrewmanDto } from "../../dto/CrewmanDto";
import { useCrewman } from "../../hooks/useCrewman";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

export const CrewmanPage = () => {
	const { t } = useTranslation();

	const [isAddModalVisible, setAddModalVisibility] = useState(false);
	const [crewmans, setCrewmans] = useCrewman([]);

	const onSubmitAddForm = async (createCrewmanDto: ICreateCrewmanDto) => {
		setAddModalVisibility(false);
		setCrewmans.addCrewman(createCrewmanDto);
	};

	useEffect(() => {
		setCrewmans.fetchCrewmans();
	}, []);

	return (
		<ContentDiv>
			<Navbar />
			<DataDiv>
				<DataHeaderDiv>
					<h1>{t("pages.entities_pages.crewmans.title")}</h1>
					<a
						className="add-crewman-btn"
						href="#"
						onClick={() => setAddModalVisibility(true)}
					>
						<h4>{t("pages.entities_pages.add_button")}</h4>
					</a>
				</DataHeaderDiv>
				<Crewman crewmans={crewmans} setCrewmans={setCrewmans} />
				<Modal
					title={t("pages.entities_pages.crewmans.add_modal_title")}
					visible={isAddModalVisible}
					setVisible={setAddModalVisibility}
				>
					<CrewmanForm onSubmit={onSubmitAddForm} />
				</Modal>
			</DataDiv>
		</ContentDiv>
	);
};
