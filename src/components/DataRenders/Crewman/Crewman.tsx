import { MouseEvent, useState } from "react";
import { ICrewmanDto, IUpdateCrewmanDto } from "../../../dto/CrewmanDto";
import { IUseCrewman } from "../../../hooks/useCrewman";
import { LoadingPage } from "../../../pages/LoadingPage/LoadingPage";
import { deleteButton, editButton } from "../../../resources/images";
import { CrewmanForm } from "../../Forms/Crewman/CrewmanForm";
import { Modal } from "../../Modal/Modal";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles/styles";

interface ICrewmanProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	crewmans: ICrewmanDto[];
	setCrewmans?: IUseCrewman;
}

export const Crewman = ({ isSubItem = false, renderButtons = true, crewmans, setCrewmans }: ICrewmanProps) => {

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [isDataViewModalVisible, setDataViewModalVisible] = useState(false);
	const [clickedCrewman, setClickedCrewman] = useState<ICrewmanDto>();

	const onSubmitUpdateForm = async (updateCrewmanDto: IUpdateCrewmanDto) => {
		if (setCrewmans) {
			setUpdateModalVisibility(false);
			setCrewmans.editCrewman(clickedCrewman?.id ?? 0, updateCrewmanDto);
		}
	}

	const onDeleteCrewman = async (crewmanId: number) => {
		if (setCrewmans) {
			setCrewmans.deleteCrewman(crewmanId);
		}
	}

	const openUpdateCrewmanModal = (event: MouseEvent<HTMLImageElement>, crewman: ICrewmanDto) => {
		event.stopPropagation();
		setClickedCrewman(crewman);
		setUpdateModalVisibility(true);
	}

	const openDataViewModal = (crewman: ICrewmanDto) => {
		if (!isSubItem) {
			setClickedCrewman(crewman);
			setDataViewModalVisible(true);
		}
	}

	return (
		setCrewmans == undefined || setCrewmans.isDataLoaded() ? (
			<ListItemContainerDiv>
				<ListDiv>
					{
						crewmans.map(crewman => {
							return (
								<ListItemContainerDiv key={crewman.id}>
									<ListItem className={isSubItem ? "sub-list-item" : "crewman list-item"} onClick={() => openDataViewModal(crewman)}>
										<ListItemData>
											<strong>ID:</strong> {crewman.id}
											<br />
											<strong>Name:</strong> {crewman.name}
											<br />
											<strong>Patent:</strong> {crewman.patent}
										</ListItemData>
										<ListItemImage>
											{renderButtons && <img src={editButton} onClick={(event) => openUpdateCrewmanModal(event, crewman)} />}
										</ListItemImage>
									</ListItem>
									{renderButtons && <img src={deleteButton} onClick={() => onDeleteCrewman(crewman.id)} />}
								</ListItemContainerDiv>
							);
						})
					}
					<Modal title="Update Crewman" visible={isUpdateModalVisible} setVisible={setUpdateModalVisibility}>
						<CrewmanForm onSubmit={onSubmitUpdateForm} crewman={clickedCrewman} />
					</Modal>
				</ListDiv>
				<Modal title="Crewman" visible={isDataViewModalVisible} setVisible={setDataViewModalVisible} className="crewman">
					<ListItemData>
						<strong>ID:</strong> {clickedCrewman?.id}
						<br />
						<strong>Name:</strong> {clickedCrewman?.name}
						<br />
						<strong>Patent:</strong> {clickedCrewman?.patent}
					</ListItemData>
				</Modal>
			</ListItemContainerDiv>
		) : <LoadingPage />
	);
}
