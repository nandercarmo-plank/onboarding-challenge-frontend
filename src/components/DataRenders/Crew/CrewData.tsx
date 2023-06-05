import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { ICrewDto } from "../../../dto/CrewDto";
import { editButton } from "../../../resources/images";
import { Crewman } from "../Crewman/Crewman";
import { ListItemData, ListItemImage } from "../styles/styles";

type ICrewDataProps = {
	crew: ICrewDto;
	renderButtons: boolean;
	renderNestedData?: boolean;
	openUpdateCrewModal?: (
		event: MouseEvent<HTMLImageElement>,
		crew: ICrewDto
	) => void;
};

export const CrewData = ({
	crew,
	renderButtons,
	renderNestedData = false,
	openUpdateCrewModal,
}: ICrewDataProps) => {
	const { t } = useTranslation();

	const openModal = (event: MouseEvent<HTMLImageElement>, crew: ICrewDto) => {
		if (openUpdateCrewModal) {
			openUpdateCrewModal(event, crew);
		}
	};

	const shouldRenderCrewmans =
		renderNestedData &&
		crew?.crewmans?.length != null &&
		crew.crewmans.length > 0;

	return crew !== undefined ? (
		<>
			<ListItemData className="crew-data-div">
				<strong>{t("components.data_renders.crew.id")}:</strong> {crew.id}
				<br />
				<strong>{t("components.data_renders.crew.name")}:</strong>{" "}
				{crew.name}
				{shouldRenderCrewmans ? (
					<>
						<br />
						<strong>{t("components.data_renders.crew.crewmans")}:</strong>
						<br />
						<Crewman
							isSubItem={true}
							renderButtons={false}
							crewmans={crew?.crewmans ?? []}
						/>
					</>
				) : (
					<></>
				)}
			</ListItemData>
			{renderButtons && (
				<ListItemImage>
					<img
						className="edit-button"
						src={editButton}
						onClick={(event) => openModal(event, crew)}
					/>
				</ListItemImage>
			)}
		</>
	) : (
		<></>
	);
};
