import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { Crew } from "../../components/DataRenders/Crew/Crew";
import { CrewForm } from "../../components/Forms/Crew/CrewForm";
import { Modal } from "../../components/Modal/Modal";
import { Navbar } from "../../components/Navbar/Navbar";
import { type ICreateCrewDto } from "../../dto/CrewDto";
import { useCrew } from "../../hooks/useCrew";
import { ContentDiv, DataDiv, DataHeaderDiv } from "./styles/styles";

export const CrewPage = () => {
	const { t } = useTranslation();

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
					<h1>{t("pages.entities_pages.crews.title")}</h1>
					<a
						className="add-crew-btn"
						href="#"
						onClick={() => {
							setAddModalVisibility(true);
						}}
					>
						<h4>{t("pages.entities_pages.add_button")}</h4>
					</a>
				</DataHeaderDiv>
				<Crew crews={crews} setCrews={setCrews} />
				<Modal
					title={t("pages.entities_pages.crews.add_modal_title")}
					visible={isAddModalVisible}
					setVisible={setAddModalVisibility}
				>
					<CrewForm onSubmit={onSubmitAddForm} />
				</Modal>
			</DataDiv>
		</ContentDiv>
	);
};
