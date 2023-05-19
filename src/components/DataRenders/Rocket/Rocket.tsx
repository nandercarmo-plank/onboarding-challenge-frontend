import { useState } from "react";
import { IRocket, IUpdateRocketDto } from "../../../dto/rocketDto";
import { deleteButton, editButton } from "../../../resources/images";
import { deleteRocket, updateRocket } from "../../../services/rocketService";
import AddRocketForm from "../../Forms/Rocket/AddRocketForm";
import Modal from "../../Modal/Modal";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles";

interface IRocketProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	data: IRocket[];
}

export default function Rocket({ isSubItem = false, renderButtons = true, data }: IRocketProps) {

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [clickedRocket, setClickedRocket] = useState<IRocket>();

	const onSubmitUpdateForm = (updateRocketDto: IUpdateRocketDto) => {
		setUpdateModalVisibility(false);
		updateRocket(clickedRocket?.id, updateRocketDto);
	}

	const openUpdateRocketModal = (rocket: IRocket) => {
		setClickedRocket(rocket);
		setUpdateModalVisibility(true);
	}

	return (
		<ListDiv>
			{
				data.map(rocket => {
					return (
						<ListItemContainerDiv key={rocket.id}>
							<ListItem className={isSubItem ? "sub-list-item" : "rocket list-item"}>
								<ListItemData>
									<strong>ID:</strong> {rocket.id}
									<br />
									<strong>Name:</strong> {rocket.name}
								</ListItemData>
								<ListItemImage>
									{renderButtons && <img src={editButton} onClick={() => openUpdateRocketModal(rocket)} />}
								</ListItemImage>
							</ListItem>
							{renderButtons && <img src={deleteButton} onClick={() => deleteRocket(rocket.id)} />}
						</ListItemContainerDiv>
					);
				})
			}
			<Modal title="Update Rocket" visible={isUpdateModalVisible} setVisible={setUpdateModalVisibility}>
				<AddRocketForm onSubmit={onSubmitUpdateForm} rocket={clickedRocket} />
			</Modal>
		</ListDiv>
	);
}