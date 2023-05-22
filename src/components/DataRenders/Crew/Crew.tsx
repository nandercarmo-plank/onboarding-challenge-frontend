import { useState } from "react";
import { ICrewDto, IUpdateCrewDto } from "../../../dto/CrewDto";
import { deleteButton, editButton } from "../../../resources/images";
import { deleteCrew, updateCrew } from "../../../services/crewService";
import { CrewForm } from "../../Forms/Crew/CrewForm";
import { Modal } from "../../Modal/Modal";
import { Crewman } from "../Crewman/Crewman";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles";

interface ICrewProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	data: ICrewDto[];
}

function Crew({ isSubItem = false, renderButtons = true, data }: ICrewProps) {

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [clickedCrew, setClickedCrew] = useState<ICrewDto>();

	const onSubmitUpdateForm = (updateCrewDto: IUpdateCrewDto) => {
		setUpdateModalVisibility(false);
		updateCrew(clickedCrew?.id, updateCrewDto);
	}

	const openUpdateCrewModal = (crew: ICrewDto) => {
		setClickedCrew(crew);
		setUpdateModalVisibility(true);
	}

	return (
		<ListDiv>
			{
				data.map(crew => {
					return (
						<ListItemContainerDiv key={crew.id}>
							<ListItem className={isSubItem ? "sub-list-item" : "crew list-item"}>
								<ListItemData>
									<strong>ID:</strong> {crew.id}
									<br />
									<strong>Name:</strong> {crew.name}
									<br />
									<strong>Crewmans:</strong>
									<br />
									{
										crew.crewmans && <Crewman isSubItem={true} renderButtons={false} data={crew.crewmans} />
									}
								</ListItemData>
								<ListItemImage>
									{renderButtons && <img src={editButton} onClick={() => openUpdateCrewModal(crew)} />}
								</ListItemImage>
							</ListItem>
							{renderButtons && <img src={deleteButton} onClick={() => deleteCrew(crew.id)} />}
						</ListItemContainerDiv>
					);
				})
			}
			<Modal title="Update Crew" visible={isUpdateModalVisible} setVisible={setUpdateModalVisibility}>
				<CrewForm onSubmit={onSubmitUpdateForm} crew={clickedCrew} />
			</Modal>
		</ListDiv>
	);
}

export {
	Crew
};
