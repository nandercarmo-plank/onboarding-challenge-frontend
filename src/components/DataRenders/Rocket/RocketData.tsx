import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { IRocketDto } from "../../../dto/RocketDto";
import { editButton } from "../../../resources/images";
import { ListItemData, ListItemImage } from "../styles/styles";

type IRocketDataProps = {
	rocket: IRocketDto;
	renderButtons: boolean;
	openUpdateRocketModal?: (
		event: MouseEvent<HTMLImageElement>,
		rocket: IRocketDto
	) => void;
};

export const RocketData = ({
	rocket,
	renderButtons,
	openUpdateRocketModal,
}: IRocketDataProps) => {
	const { t } = useTranslation();

	const openModal = (
		event: MouseEvent<HTMLImageElement>,
		rocket: IRocketDto
	) => {
		if (openUpdateRocketModal) {
			openUpdateRocketModal(event, rocket);
		}
	};

	return rocket !== undefined ? (
		<>
			<ListItemData>
				<strong>{t("components.data_renders.rocket.id")}:</strong>{" "}
				{rocket.id}
				<br />
				<strong>{t("components.data_renders.rocket.name")}:</strong>{" "}
				{rocket.name}
			</ListItemData>
			{renderButtons && (
				<ListItemImage>
					<img
						src={editButton}
						onClick={(event) => openModal(event, rocket)}
					/>
				</ListItemImage>
			)}
		</>
	) : (
		<></>
	);
};
