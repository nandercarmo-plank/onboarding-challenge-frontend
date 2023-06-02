import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { ILaunchDto } from "../../../dto/LaunchDto";
import { editButton } from "../../../resources/images";
import { Crew } from "../Crew/Crew";
import { Rocket } from "../Rocket/Rocket";
import { ListItemData, ListItemImage } from "../styles/styles";

type ILaunchDataProps = {
	launch: ILaunchDto;
	renderButtons: boolean;
	renderNestedData?: boolean;
	openUpdateLaunchModal?: (
		event: MouseEvent<HTMLImageElement>,
		launch: ILaunchDto
	) => void;
};

export const LaunchData = ({
	launch,
	renderButtons,
	renderNestedData = false,
	openUpdateLaunchModal,
}: ILaunchDataProps) => {
	const { t } = useTranslation();

	const openModal = (
		event: MouseEvent<HTMLImageElement>,
		launch: ILaunchDto
	) => {
		if (openUpdateLaunchModal) {
			openUpdateLaunchModal(event, launch);
		}
	};

	return launch !== undefined ? (
		<>
			<ListItemData>
				<strong>{t("components.data_renders.launch.id")}:</strong>{" "}
				{launch.id}
				<br />
				<strong>
					{t("components.data_renders.launch.launch_code")}:
				</strong>{" "}
				{launch.launchCode}
				<br />
				<strong>{t("components.data_renders.launch.date")}:</strong>{" "}
				{launch.date}
				<br />
				<strong>{t("components.data_renders.launch.success")}:</strong>{" "}
				{`${launch.success}`}
				<br />
				<strong>{t("components.data_renders.launch.rocket")}:</strong>
				{renderNestedData && (
					<Rocket
						isSubItem={true}
						renderButtons={false}
						rockets={launch?.rocket ? [launch?.rocket] : []}
					/>
				)}
				{renderNestedData && launch?.crew && (
					<>
						<br />
						<strong>{t("components.data_renders.launch.crew")}:</strong>
						<Crew
							isSubItem={true}
							renderButtons={false}
							crews={[launch?.crew]}
						/>
					</>
				)}
			</ListItemData>
			{renderButtons && (
				<ListItemImage>
					<img
						src={editButton}
						onClick={(event) => openModal(event, launch)}
					/>
				</ListItemImage>
			)}
		</>
	) : (
		<></>
	);
};
