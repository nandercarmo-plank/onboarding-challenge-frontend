import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { ICrewmanDto, IUpdateCrewmanDto } from "../../../dto/CrewmanDto";
import { IUseCrewman } from "../../../hooks/useCrewman";
import { LoadingPage } from "../../../pages/LoadingPage/LoadingPage";
import { deleteButton } from "../../../resources/images";
import { CrewmanForm } from "../../Forms/Crewman/CrewmanForm";
import { Modal } from "../../Modal/Modal";
import { ListDiv, ListItem, ListItemContainerDiv } from "../styles/styles";
import { CrewmanData } from "./CrewmanData";

export type CrewmanProps = {
	isSubItem?: boolean;
	renderButtons?: boolean;
	crewmans: ICrewmanDto[];
	setCrewmans?: IUseCrewman;
};

export const Crewman = ({
	isSubItem = false,
	renderButtons = true,
	crewmans,
	setCrewmans,
}: CrewmanProps) => {
	const { t } = useTranslation();

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [isDataViewModalVisible, setDataViewModalVisible] = useState(false);
	const [clickedCrewman, setClickedCrewman] = useState<ICrewmanDto>(
		crewmans[0]
	);

	const onSubmitUpdateForm = async (updateCrewmanDto: IUpdateCrewmanDto) => {
		if (setCrewmans) {
			setUpdateModalVisibility(false);
			setCrewmans.editCrewman(clickedCrewman?.id ?? 0, updateCrewmanDto);
		}
	};

	const onDeleteCrewman = async (crewmanId: number) => {
		if (setCrewmans) {
			setCrewmans.deleteCrewman(crewmanId);
		}
	};

	const openUpdateCrewmanModal = (
		event: MouseEvent<HTMLImageElement>,
		crewman: ICrewmanDto
	) => {
		event.stopPropagation();
		setClickedCrewman(crewman);
		setUpdateModalVisibility(true);
	};

	const openDataViewModal = (crewman: ICrewmanDto) => {
		if (!isSubItem) {
			setClickedCrewman(crewman);
			setDataViewModalVisible(true);
		}
	};

	return setCrewmans == undefined || setCrewmans.isDataLoaded() ? (
		<ListItemContainerDiv>
			<ListDiv className="div-data-list">
				{crewmans.map((crewman) => {
					return (
						<ListItemContainerDiv
							className="div-list-item"
							key={crewman.id}
						>
							<ListItem
								className={
									isSubItem ? "sub-list-item" : "crewman list-item"
								}
								onClick={() => openDataViewModal(crewman)}
							>
								<CrewmanData
									crewman={crewman}
									renderButtons={!isSubItem && renderButtons}
									openUpdateCrewmanModal={openUpdateCrewmanModal}
								/>
							</ListItem>
							{!isSubItem && renderButtons && (
								<img
									className="delete-button"
									src={deleteButton}
									onClick={() => onDeleteCrewman(crewman.id)}
								/>
							)}
						</ListItemContainerDiv>
					);
				})}
				<Modal
					title={t("components.data_renders.crewman.update_modal_title")}
					visible={isUpdateModalVisible}
					setVisible={setUpdateModalVisibility}
				>
					<CrewmanForm
						onSubmit={onSubmitUpdateForm}
						crewman={clickedCrewman}
					/>
				</Modal>
			</ListDiv>
			<Modal
				title={t("components.data_renders.crewman.data_view_modal_title")}
				visible={isDataViewModalVisible}
				setVisible={setDataViewModalVisible}
				className="crewman-modal"
			>
				<CrewmanData crewman={clickedCrewman} renderButtons={false} />
			</Modal>
		</ListItemContainerDiv>
	) : (
		<LoadingPage />
	);
};
