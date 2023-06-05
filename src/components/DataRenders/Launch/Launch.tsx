import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { ILaunchDto, IUpdateLaunchDto } from "../../../dto/LaunchDto";
import { IUseLaunch } from "../../../hooks/useLaunch";
import { LoadingPage } from "../../../pages/LoadingPage/LoadingPage";
import { deleteButton } from "../../../resources/images";
import { LaunchForm } from "../../Forms/Launch/LaunchForm";
import { Modal } from "../../Modal/Modal";
import { ListDiv, ListItem, ListItemContainerDiv } from "../styles/styles";
import { LaunchData } from "./LaunchData";

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
	const [clickedLaunch, setClickedLaunch] = useState<ILaunchDto>(launchs[0]);

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
			<ListDiv className="div-data-list">
				{launchs.map((launch) => {
					return (
						<ListItemContainerDiv
							className="div-list-item"
							key={launch.id}
						>
							<ListItem
								className={
									isSubItem ? "sub-list-item" : "launch list-item"
								}
								onClick={() => openDataViewModal(launch)}
							>
								<LaunchData
									launch={launch}
									renderButtons={!isSubItem}
									openUpdateLaunchModal={openUpdateLaunchModal}
								/>
							</ListItem>
							{renderButtons && (
								<img
									className="delete-button"
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
				<LaunchData
					launch={clickedLaunch}
					renderNestedData={true}
					renderButtons={false}
				/>
			</Modal>
		</ListItemContainerDiv>
	) : (
		<LoadingPage />
	);
};
