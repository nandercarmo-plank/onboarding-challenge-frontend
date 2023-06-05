import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { IRocketDto, IUpdateRocketDto } from "../../../dto/RocketDto";
import { IUseRocket } from "../../../hooks/useRocket";
import { LoadingPage } from "../../../pages/LoadingPage/LoadingPage";
import { deleteButton } from "../../../resources/images";
import { RocketForm } from "../../Forms/Rocket/RocketForm";
import { Modal } from "../../Modal/Modal";
import { ListDiv, ListItem, ListItemContainerDiv } from "../styles/styles";
import { RocketData } from "./RocketData";

export type RocketProps = {
	isSubItem?: boolean;
	renderButtons?: boolean;
	rockets: IRocketDto[];
	setRockets?: IUseRocket;
};

export const Rocket = ({
	isSubItem = false,
	renderButtons = true,
	rockets,
	setRockets,
}: RocketProps) => {
	const { t } = useTranslation();

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [isDataViewModalVisible, setDataViewModalVisible] = useState(false);
	const [clickedRocket, setClickedRocket] = useState<IRocketDto>(rockets[0]);

	const onSubmitUpdateForm = async (updateRocketDto: IUpdateRocketDto) => {
		if (setRockets) {
			setUpdateModalVisibility(false);
			setRockets.editRocket(clickedRocket?.id ?? 0, updateRocketDto);
		}
	};

	const onDeleteRocket = async (rocketId: number) => {
		if (setRockets) {
			setRockets.deleteRocket(rocketId);
		}
	};

	const openUpdateRocketModal = (
		event: MouseEvent<HTMLImageElement>,
		rocket: IRocketDto
	) => {
		event.stopPropagation();
		setClickedRocket(rocket);
		setUpdateModalVisibility(true);
	};

	const openDataViewModal = (rocket: IRocketDto) => {
		if (!isSubItem) {
			setClickedRocket(rocket);
			setDataViewModalVisible(true);
		}
	};

	return setRockets == undefined || setRockets.isDataLoaded() ? (
		<ListItemContainerDiv>
			<ListDiv className="div-data-list">
				{rockets.map((rocket) => {
					return (
						<ListItemContainerDiv
							className="div-list-item"
							key={rocket.id}
						>
							<ListItem
								className={
									isSubItem ? "sub-list-item" : "rocket list-item"
								}
								onClick={() => openDataViewModal(rocket)}
							>
								<RocketData
									rocket={rocket}
									renderButtons={!isSubItem && renderButtons}
									openUpdateRocketModal={openUpdateRocketModal}
								/>
							</ListItem>
							{!isSubItem && renderButtons && (
								<img
									className="delete-button"
									src={deleteButton}
									onClick={() => onDeleteRocket(rocket.id)}
								/>
							)}
						</ListItemContainerDiv>
					);
				})}
				<Modal
					title={t("components.data_renders.rocket.update_modal_title")}
					visible={isUpdateModalVisible}
					setVisible={setUpdateModalVisibility}
				>
					<RocketForm
						onSubmit={onSubmitUpdateForm}
						rocket={clickedRocket}
					/>
				</Modal>
			</ListDiv>
			<Modal
				title={t("components.data_renders.rocket.data_view_modal_title")}
				visible={isDataViewModalVisible}
				setVisible={setDataViewModalVisible}
				className="rocket-modal"
			>
				<RocketData rocket={clickedRocket} renderButtons={false} />
			</Modal>
		</ListItemContainerDiv>
	) : (
		<LoadingPage />
	);
};
