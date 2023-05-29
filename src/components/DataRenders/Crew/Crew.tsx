import { MouseEvent, useState } from "react";
import { ICrewDto, IUpdateCrewDto } from "../../../dto/CrewDto";
import { IUseCrew } from "../../../hooks/useCrew";
import { LoadingPage } from "../../../pages/LoadingPage/LoadingPage";
import { deleteButton, editButton } from "../../../resources/images";
import { CrewForm } from "../../Forms/Crew/CrewForm";
import { Modal } from "../../Modal/Modal";
import { Crewman } from "../Crewman/Crewman";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles/styles";

interface ICrewProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	crews: ICrewDto[];
	setCrews?: IUseCrew;
}

export const Crew = ({ isSubItem = false, renderButtons = true, crews, setCrews }: ICrewProps) => {

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [isDataViewModalVisible, setDataViewModalVisible] = useState(false);
	const [clickedCrew, setClickedCrew] = useState<ICrewDto>();

	const onSubmitUpdateForm = async (updateCrewDto: IUpdateCrewDto) => {
		if (setCrews) {
			setUpdateModalVisibility(false);
			setCrews.editCrew(clickedCrew?.id ?? 0, updateCrewDto);
		}
	}

	const onDeleteCrew = async (crewId: number) => {
		if (setCrews) {
			setCrews.deleteCrew(crewId);
		}
	}

	const openUpdateCrewModal = (event: MouseEvent<HTMLImageElement>, crew: ICrewDto) => {
		event.stopPropagation();
		setClickedCrew(crew);
		setUpdateModalVisibility(true);
	}

	const openDataViewModal = (crew: ICrewDto) => {
		if (!isSubItem) {
			setClickedCrew(crew);
			setDataViewModalVisible(true);
		}
	}

	return (
		setCrews == undefined || setCrews.isDataLoaded() ? (
			<ListItemContainerDiv>
				<ListDiv>
					{
						crews.map(crew => {
							return (
								<ListItemContainerDiv key={crew.id}>
									<ListItem className={isSubItem ? "sub-list-item" : "crew list-item"} onClick={() => openDataViewModal(crew)}>
										<ListItemData>
											<strong>ID:</strong> {crew.id}
											<br />
											<strong>Name:</strong> {crew.name}
										</ListItemData>
										<ListItemImage>
											{renderButtons && <img src={editButton} onClick={(event) => openUpdateCrewModal(event, crew)} />}
										</ListItemImage>
									</ListItem>
									{renderButtons && <img src={deleteButton} onClick={() => onDeleteCrew(crew.id)} />}
								</ListItemContainerDiv>
							);
						})
					}
					<Modal title="Update Crew" visible={isUpdateModalVisible} setVisible={setUpdateModalVisibility}>
						<CrewForm onSubmit={onSubmitUpdateForm} crew={clickedCrew} />
					</Modal>
				</ListDiv>
				<Modal title="Crew" visible={isDataViewModalVisible} setVisible={setDataViewModalVisible} className="crew">
					<ListItemData>
						<strong>ID:</strong> {clickedCrew?.id}
						<br />
						<strong>Name:</strong> {clickedCrew?.name}
						<br />
						{
							(clickedCrew?.crewmans?.length) ? <>
								<strong>Crewmans:</strong>
								<br />
								<Crewman isSubItem={true} renderButtons={false} crewmans={clickedCrew?.crewmans} />
							</> : <></>
						}
					</ListItemData>
				</Modal>
			</ListItemContainerDiv>
		) : <LoadingPage />
	);
}
