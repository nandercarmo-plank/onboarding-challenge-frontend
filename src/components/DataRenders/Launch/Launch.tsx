import { useState } from "react";
import { ILaunchDto, IUpdateLaunchDto } from "../../../dto/LaunchDto";
import { deleteButton, editButton } from "../../../resources/images";
import { deleteLaunch, updateLaunch } from "../../../services/launchService";
import { LaunchForm } from "../../Forms/Launch/LaunchForm";
import { Modal } from "../../Modal/Modal";
import { Crew } from "../Crew/Crew";
import { Rocket } from "../Rocket/Rocket";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles";

interface ILaunchProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	data: ILaunchDto[];
}

function Launch({ isSubItem = false, renderButtons = true, data }: ILaunchProps) {

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [clickedLaunch, setClickedLaunch] = useState<ILaunchDto>();

	const onSubmitUpdateForm = (updateLaunchDto: IUpdateLaunchDto) => {
		setUpdateModalVisibility(false);
		updateLaunch(clickedLaunch?.id, updateLaunchDto);
	}

	const openUpdateLaunchModal = (launch: ILaunchDto) => {
		setClickedLaunch(launch);
		setUpdateModalVisibility(true);
	}

	return (
		<ListDiv>
			{
				data.map(launch => {
					return (
						<ListItemContainerDiv key={launch.id}>
							<ListItem className={isSubItem ? "sub-list-item" : "launch list-item"}>
								<ListItemData>
									<strong>ID:</strong> {launch.id}
									<br />
									<strong>Launch code:</strong> {launch.launchCode}
									<br />
									<strong>Date:</strong> {launch.date}
									<br />
									<strong>Success:</strong> {`${launch.success}`}
									<br />
									<strong>Rocket:</strong>
									<Rocket isSubItem={true} renderButtons={false} data={[launch.rocket]} />
									{
										launch.crew && (
											<>
												<br />
												<strong>Crew:</strong>
												<Crew isSubItem={true} renderButtons={false} data={[launch.crew]} />
											</>
										)
									}
								</ListItemData>
								<ListItemImage>
									{renderButtons && <img src={editButton} onClick={() => openUpdateLaunchModal(launch)} />}
								</ListItemImage>
							</ListItem>
							{renderButtons && <img src={deleteButton} onClick={() => deleteLaunch(launch.id)} />}
						</ListItemContainerDiv>
					);
				})
			}
			<Modal title="Update Launch" visible={isUpdateModalVisible} setVisible={setUpdateModalVisibility}>
				<LaunchForm onSubmit={onSubmitUpdateForm} launch={clickedLaunch} />
			</Modal>
		</ListDiv>
	);
}

export {
	Launch
};
