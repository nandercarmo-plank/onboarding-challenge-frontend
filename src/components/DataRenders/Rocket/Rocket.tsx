import { MouseEvent, useState } from "react";
import { IRocketDto, IUpdateRocketDto } from "../../../dto/RocketDto";
import { IUseRocket } from "../../../hooks/useRocket";
import { LoadingPage } from "../../../pages/LoadingPage/LoadingPage";
import { deleteButton, editButton } from "../../../resources/images";
import { RocketForm } from "../../Forms/Rocket/RocketForm";
import { Modal } from "../../Modal/Modal";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles/styles";

interface IRocketProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	rockets: IRocketDto[];
	setRockets?: IUseRocket;
}

export const Rocket = ({ isSubItem = false, renderButtons = true, rockets, setRockets }: IRocketProps) => {

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [isDataViewModalVisible, setDataViewModalVisible] = useState(false);
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

	const openUpdateRocketModal = (event: MouseEvent<HTMLImageElement>, rocket: IRocketDto) => {
		event.stopPropagation();
		setClickedRocket(rocket);
		setUpdateModalVisibility(true);
	}

	const openDataViewModal = (rocket: IRocketDto) => {
		if (!isSubItem) {
			setClickedRocket(rocket);
			setDataViewModalVisible(true);
		}
	}

	return (
		setRockets == undefined || setRockets.isDataLoaded() ? (
			<ListItemContainerDiv>
				<ListDiv>
					{
						rockets.map(rocket => {
							return (
								<ListItemContainerDiv key={rocket.id}>
									<ListItem className={isSubItem ? "sub-list-item" : "rocket list-item"} onClick={() => openDataViewModal(rocket)}>
										<ListItemData>
											<strong>ID:</strong> {rocket.id}
											<br />
											<strong>Name:</strong> {rocket.name}
										</ListItemData>
										<ListItemImage>
											{renderButtons && <img src={editButton} onClick={(event) => openUpdateRocketModal(event, rocket)} />}
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
				<Modal title="Rocket" visible={isDataViewModalVisible} setVisible={setDataViewModalVisible} className="rocket">
					<ListItemData>
						<strong>ID:</strong> {clickedRocket?.id}
						<br />
						<strong>Name:</strong> {clickedRocket?.name}
					</ListItemData>
				</Modal>
			</ListItemContainerDiv>
		) : <LoadingPage />
	);
}
