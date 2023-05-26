import { useState } from "react";
import { IRocketDto, IUpdateRocketDto } from "../../../dto/RocketDto";
import { IUseRocket } from "../../../hooks/useRocket";
import { deleteButton, editButton } from "../../../resources/images";
import { RocketForm } from "../../Forms/Rocket/RocketForm";
import { Modal } from "../../Modal/Modal";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles";

interface IRocketProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	rockets: IRocketDto[];
	setRockets?: IUseRocket;
}

function Rocket({ isSubItem = false, renderButtons = true, rockets, setRockets }: IRocketProps) {

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [clickedRocket, setClickedRocket] = useState<IRocketDto>();

	const onSubmitUpdateForm = async (updateRocketDto: IUpdateRocketDto) => {
		if (setRockets) {
			setUpdateModalVisibility(false);
			setRockets.editRocket(clickedRocket?.id ?? 0, updateRocketDto);
		}
	}

	const onDeleteRocket = async (rocketId: number) => {
		if (setRockets) {
			setRockets.deleteRocket(rocketId);
		}
	}

	const openUpdateRocketModal = (rocket: IRocketDto) => {
		setClickedRocket(rocket);
		setUpdateModalVisibility(true);
	}

	return (
		<ListDiv>
			{
				rockets.map(rocket => {
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
							{renderButtons && <img src={deleteButton} onClick={() => onDeleteRocket(rocket.id)} />}
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
