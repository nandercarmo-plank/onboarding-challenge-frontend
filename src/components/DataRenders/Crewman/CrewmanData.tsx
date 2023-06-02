import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { ICrewmanDto } from "../../../dto/CrewmanDto";
import { editButton } from "../../../resources/images";
import { ListItemData, ListItemImage } from "../styles/styles";

type ICrewmanDataProps = {
	crewman: ICrewmanDto;
	renderButtons: boolean;
	openUpdateCrewmanModal?: (
		event: MouseEvent<HTMLImageElement>,
		crewman: ICrewmanDto
	) => void;
};

export const CrewmanData = ({
	crewman,
	renderButtons,
	openUpdateCrewmanModal,
}: ICrewmanDataProps) => {
	const { t } = useTranslation();

	const openModal = (
		event: MouseEvent<HTMLImageElement>,
		crewman: ICrewmanDto
	) => {
		if (openUpdateCrewmanModal) {
			openUpdateCrewmanModal(event, crewman);
		}
	};

	return crewman !== undefined ? (
		<>
			<ListItemData>
				<strong>{t("components.data_renders.crewman.id")}:</strong>{" "}
				{crewman.id}
				<br />
				<strong>{t("components.data_renders.crewman.name")}:</strong>{" "}
				{crewman.name}
				<br />
				<strong>{t("components.data_renders.crewman.patent")}:</strong>{" "}
				{crewman.patent}
			</ListItemData>
			{renderButtons && (
				<ListItemImage>
					<img
						src={editButton}
						onClick={(event) => openModal(event, crewman)}
					/>
				</ListItemImage>
			)}
		</>
	) : (
		<></>
	);
};
