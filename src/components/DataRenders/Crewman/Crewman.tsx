import { useState } from "react";
import { ICrewman, IUpdateCrewmanDto } from "../../../dto/crewmanDto";
import { deleteButton, editButton } from "../../../resources/images";
import { deleteCrewman, updateCrewman } from "../../../services/crewmanService";
import AddCrewmanForm from "../../Forms/Crewman/AddCrewmanForm";
import Modal from "../../Modal/Modal";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles";

interface ICrewmanProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	data: ICrewman[];
}

export default function Crewman({ isSubItem = false, renderButtons = true, data }: ICrewmanProps) {

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [clickedCrewman, setClickedCrewman] = useState<ICrewman>();

	const onSubmitUpdateForm = (updateCrewmanDto: IUpdateCrewmanDto) => {
		setUpdateModalVisibility(false);
		updateCrewman(clickedCrewman?.id, updateCrewmanDto);
	}

	const openUpdateCrewmanModal = (crewman: ICrewman) => {
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
				<AddCrewmanForm onSubmit={onSubmitUpdateForm} crewman={clickedCrewman} />
			</Modal>
		</ListDiv>
	);
}