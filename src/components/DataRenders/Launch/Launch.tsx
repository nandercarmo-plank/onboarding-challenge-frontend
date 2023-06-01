import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { ILaunchDto, IUpdateLaunchDto } from "../../../dto/LaunchDto";
import { IUseLaunch } from "../../../hooks/useLaunch";
import { LoadingPage } from "../../../pages/LoadingPage/LoadingPage";
import { deleteButton, editButton } from "../../../resources/images";
import { LaunchForm } from "../../Forms/Launch/LaunchForm";
import { Modal } from "../../Modal/Modal";
import { Crew } from "../Crew/Crew";
import { Rocket } from "../Rocket/Rocket";
import {
	ListDiv,
	ListItem,
	ListItemContainerDiv,
	ListItemData,
	ListItemImage,
} from "../styles/styles";

type ILaunchProps = {
	isSubItem?: boolean;
	renderButtons?: boolean;
	launchs: ILaunchDto[];
	setLaunchs?: IUseLaunch;
};

export const Launch = ({
	isSubItem = false,
	renderButtons = true,
	launchs,
	setLaunchs,
}: ILaunchProps) => {
	const { t } = useTranslation();

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [isDataViewModalVisible, setDataViewModalVisible] = useState(false);
	const [clickedLaunch, setClickedLaunch] = useState<ILaunchDto>();

	const onSubmitUpdateForm = async (updateLaunchDto: IUpdateLaunchDto) => {
		if (setLaunchs) {
			setUpdateModalVisibility(false);
			setLaunchs.editLaunch(clickedLaunch?.id ?? 0, updateLaunchDto);
		}
	};

	const onDeleteLaunch = async (launchId: number) => {
		if (setLaunchs) {
			setLaunchs.deleteLaunch(launchId);
		}
	};

	const openUpdateLaunchModal = (
		event: MouseEvent<HTMLImageElement>,
		launch: ILaunchDto
	) => {
		event.stopPropagation();
		setClickedLaunch(launch);
		setUpdateModalVisibility(true);
	};

	const openDataViewModal = (launch: ILaunchDto) => {
		if (!isSubItem) {
			setClickedLaunch(launch);
			setDataViewModalVisible(true);
		}
	};

	return setLaunchs == undefined || setLaunchs.isDataLoaded() ? (
		<ListItemContainerDiv>
			<ListDiv>
				{launchs.map((launch) => {
					return (
						<ListItemContainerDiv key={launch.id}>
							<ListItem
								className={
									isSubItem ? "sub-list-item" : "launch list-item"
								}
								onClick={() => openDataViewModal(launch)}
							>
								<ListItemData>
									<strong>
										{t("components.data_renders.launch.id")}:
									</strong>{" "}
									{launch.id}
									<br />
									<strong>
										{t("components.data_renders.launch.launch_code")}:
									</strong>{" "}
									{launch.launchCode}
									<br />
									<strong>
										{t("components.data_renders.launch.date")}:
									</strong>{" "}
									{launch.date}
									<br />
									<strong>
										{t("components.data_renders.launch.success")}:
									</strong>{" "}
									{`${launch.success}`}
								</ListItemData>
								<ListItemImage>
									{renderButtons && (
										<img
											src={editButton}
											onClick={(event) =>
												openUpdateLaunchModal(event, launch)
											}
										/>
									)}
								</ListItemImage>
							</ListItem>
							{renderButtons && (
								<img
									src={deleteButton}
									onClick={() => onDeleteLaunch(launch.id)}
								/>
							)}
						</ListItemContainerDiv>
					);
				})}
				<Modal
					title={t("components.data_renders.launch.update_modal_title")}
					visible={isUpdateModalVisible}
					setVisible={setUpdateModalVisibility}
				>
					<LaunchForm
						onSubmit={onSubmitUpdateForm}
						launch={clickedLaunch}
					/>
				</Modal>
			</ListDiv>
			<Modal
				title={t("components.data_renders.launch.data_view_modal_title")}
				visible={isDataViewModalVisible}
				setVisible={setDataViewModalVisible}
				className="launch-modal"
			>
				<ListItemData>
					<strong>{t("components.data_renders.launch.id")}:</strong>{" "}
					{clickedLaunch?.id}
					<br />
					<strong>
						{t("components.data_renders.launch.launch_code")}:
					</strong>{" "}
					{clickedLaunch?.launchCode}
					<br />
					<strong>{t("components.data_renders.launch.date")}:</strong>{" "}
					{clickedLaunch?.date}
					<br />
					<strong>
						{t("components.data_renders.launch.success")}:
					</strong>{" "}
					{`${clickedLaunch?.success}`}
					<br />
					<strong>{t("components.data_renders.launch.rocket")}:</strong>
					<Rocket
						isSubItem={true}
						renderButtons={false}
						rockets={clickedLaunch?.rocket ? [clickedLaunch?.rocket] : []}
					/>
					{clickedLaunch?.crew && (
						<>
							<br />
							<strong>
								{t("components.data_renders.launch.crew")}:
							</strong>
							<Crew
								isSubItem={true}
								renderButtons={false}
								crews={[clickedLaunch?.crew]}
							/>
						</>
					)}
				</ListItemData>
			</Modal>
		</ListItemContainerDiv>
	) : (
		<LoadingPage />
	);
};
