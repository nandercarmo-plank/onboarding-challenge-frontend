import { MouseEvent, useState } from "react";
import { ILaunchDto, IUpdateLaunchDto } from "../../../dto/LaunchDto";
import { IUseLaunch } from "../../../hooks/useLaunch";
import { LoadingPage } from "../../../pages/LoadingPage/LoadingPage";
import { deleteButton, editButton } from "../../../resources/images";
import { LaunchForm } from "../../Forms/Launch/LaunchForm";
import { Modal } from "../../Modal/Modal";
import { Crew } from "../Crew/Crew";
import { Rocket } from "../Rocket/Rocket";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles/styles";

interface ILaunchProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	launchs: ILaunchDto[];
	setLaunchs?: IUseLaunch;
}

export const Launch = ({ isSubItem = false, renderButtons = true, launchs, setLaunchs }: ILaunchProps) => {

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [isDataViewModalVisible, setDataViewModalVisible] = useState(false);
	const [clickedLaunch, setClickedLaunch] = useState<ILaunchDto>();

	const onSubmitUpdateForm = async (updateLaunchDto: IUpdateLaunchDto) => {
		if (setLaunchs) {
			setUpdateModalVisibility(false);
			setLaunchs.editLaunch(clickedLaunch?.id ?? 0, updateLaunchDto);
		}
	}

	const onDeleteLaunch = async (launchId: number) => {
		if (setLaunchs) {
			setLaunchs.deleteLaunch(launchId);
		}
	}

	const openUpdateLaunchModal = (event: MouseEvent<HTMLImageElement>, launch: ILaunchDto) => {
		event.stopPropagation();
		setClickedLaunch(launch);
		setUpdateModalVisibility(true);
	}

	const openDataViewModal = (launch: ILaunchDto) => {
		if (!isSubItem) {
			setClickedLaunch(launch);
			setDataViewModalVisible(true);
		}
	}

	return (
		setLaunchs == undefined || setLaunchs.isDataLoaded() ? (
			<ListItemContainerDiv>
				<ListDiv>
					{
						launchs.map(launch => {
							return (
								<ListItemContainerDiv key={launch.id}>
									<ListItem className={isSubItem ? "sub-list-item" : "launch list-item"} onClick={() => openDataViewModal(launch)}>
										<ListItemData>
											<strong>ID:</strong> {launch.id}
											<br />
											<strong>Launch code:</strong> {launch.launchCode}
											<br />
											<strong>Date:</strong> {launch.date}
											<br />
											<strong>Success:</strong> {`${launch.success}`}
										</ListItemData>
										<ListItemImage>
											{renderButtons && <img src={editButton} onClick={(event) => openUpdateLaunchModal(event, launch)} />}
										</ListItemImage>
									</ListItem>
									{renderButtons && <img src={deleteButton} onClick={() => onDeleteLaunch(launch.id)} />}
								</ListItemContainerDiv>
							);
						})
					}
					<Modal title="Update Launch" visible={isUpdateModalVisible} setVisible={setUpdateModalVisibility}>
						<LaunchForm onSubmit={onSubmitUpdateForm} launch={clickedLaunch} />
					</Modal>
				</ListDiv>
				<Modal title="Launch" visible={isDataViewModalVisible} setVisible={setDataViewModalVisible} className="launch-modal">
					<ListItemData>
						<strong>ID:</strong> {clickedLaunch?.id}
						<br />
						<strong>Launch code:</strong> {clickedLaunch?.launchCode}
						<br />
						<strong>Date:</strong> {clickedLaunch?.date}
						<br />
						<strong>Success:</strong> {`${clickedLaunch?.success}`}
						<br />
						<strong>Rocket:</strong>
						<Rocket isSubItem={true} renderButtons={false} rockets={clickedLaunch?.rocket ? [clickedLaunch?.rocket] : []} />
						{
							clickedLaunch?.crew && (
								<>
									<br />
									<strong>Crew:</strong>
									<Crew isSubItem={true} renderButtons={false} crews={[clickedLaunch?.crew]} />
								</>
							)
						}
					</ListItemData>
				</Modal>
			</ListItemContainerDiv>
		) : <LoadingPage />
	);
}
