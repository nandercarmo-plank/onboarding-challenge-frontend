import { useState } from "react";
import { IRocketDto, IUpdateRocketDto } from "../../../dto/RocketDto";
import { deleteButton, editButton } from "../../../resources/images";
import { deleteRocket, updateRocket } from "../../../services/rocketService";
import { RocketForm } from "../../Forms/Rocket/RocketForm";
import { Modal } from "../../Modal/Modal";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles";

interface IRocketProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	data: IRocketDto[];
}

function Rocket({ isSubItem = false, renderButtons = true, data }: IRocketProps) {

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [clickedRocket, setClickedRocket] = useState<IRocketDto>();

	const onSubmitUpdateForm = (updateRocketDto: IUpdateRocketDto) => {
		setUpdateModalVisibility(false);
		updateRocket(clickedRocket?.id, updateRocketDto);
	}

	const openUpdateRocketModal = (rocket: IRocketDto) => {
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
				<RocketForm onSubmit={onSubmitUpdateForm} rocket={clickedRocket} />
			</Modal>
		</ListDiv>
	);
}

export {
	Rocket
};
