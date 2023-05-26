import { useState } from "react";
import { ICrewmanDto, IUpdateCrewmanDto } from "../../../dto/CrewmanDto";
import { IUseCrewman } from "../../../hooks/useCrewman";
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

	const openUpdateCrewmanModal = (crewman: ICrewmanDto) => {
		setClickedCrewman(crewman);
		setUpdateModalVisibility(true);
	}

	return (
		<ListItemContainerDiv>
			<ListDiv>
				{
					crewmans.map(crewman => {
						return (
							<ListItemContainerDiv key={crewman.id}>
								<ListItem className={isSubItem ? "sub-list-item" : "crewman list-item"}>
									<ListItemData>
										<strong>ID:</strong> {crewman.id}
										<br />
										<strong>Name:</strong> {crewman.name}
										<br />
										<strong>Patent:</strong> {crewman.patent}
									</ListItemData>
									<ListItemImage>
										{renderButtons && <img src={editButton} onClick={() => openUpdateCrewmanModal(crewman)} />}
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
		</ListItemContainerDiv>
	);
}
