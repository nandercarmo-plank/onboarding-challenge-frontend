import { useState } from "react";
import { ICrewmanDto, IUpdateCrewmanDto } from "../../../dto/CrewmanDto";
import { deleteButton, editButton } from "../../../resources/images";
import { deleteCrewman, updateCrewman } from "../../../services/crewmanService";
import { CrewmanForm } from "../../Forms/Crewman/CrewmanForm";
import { Modal } from "../../Modal/Modal";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles";

interface ICrewmanProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	data: ICrewmanDto[];
}

function Crewman({ isSubItem = false, renderButtons = true, data }: ICrewmanProps) {

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [clickedCrewman, setClickedCrewman] = useState<ICrewmanDto>();

	const onSubmitUpdateForm = (updateCrewmanDto: IUpdateCrewmanDto) => {
		setUpdateModalVisibility(false);
		updateCrewman(clickedCrewman?.id, updateCrewmanDto);
	}

	const openUpdateCrewmanModal = (crewman: ICrewmanDto) => {
		setClickedCrewman(crewman);
		setUpdateModalVisibility(true);
	}

	return (
		<ListDiv>
			{
				data.map(crewman => {
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
							{renderButtons && <img src={deleteButton} onClick={() => deleteCrewman(crewman.id)} />}
						</ListItemContainerDiv>
					);
				})
			}
			<Modal title="Update Crewman" visible={isUpdateModalVisible} setVisible={setUpdateModalVisibility}>
				<CrewmanForm onSubmit={onSubmitUpdateForm} crewman={clickedCrewman} />
			</Modal>
		</ListDiv>
	);
}

export {
	Crewman
};
