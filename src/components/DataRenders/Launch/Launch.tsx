import { ILaunch } from "../../../dto/launchDto";
import { deleteButton, editButton } from "../../../resources/images";
import Crew from "../Crew/Crew";
import Rocket from "../Rocket/Rocket";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles";

interface ILaunchProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	data: ILaunch[];
}

export default function Launch({ isSubItem = false, renderButtons = true, data }: ILaunchProps) {
	return (
		<ListDiv>
			{
				data.map(launch => {
					return (
						<ListItemContainerDiv key={launch.id}>
							<ListItem className={isSubItem ? "sub-list-item" : "launch list-item"}>
								<ListItemData>
									<strong>ID:</strong> { launch.id }
									<br/>
									<strong>Launch code:</strong> { launch.launchCode }
									<br/>
									<strong>Date:</strong> { launch.date }
									<br/>
									<strong>Success:</strong> { launch.success }
									<br/>
									<strong>Rocket:</strong>
									<Rocket isSubItem={true} renderButtons={false} data={[launch.rocket]} />
									{
										launch.crew && (
											<>
												<br/>
												<strong>Crew:</strong>
												<Crew isSubItem={true} renderButtons={false} data={[launch.crew]}/>
											</>
										)
									}
								</ListItemData>
								<ListItemImage>
									{ renderButtons && <img src={editButton} onClick={() => console.log(`Edit launch ${launch.id}`)}/> }
								</ListItemImage>
							</ListItem>
							{ renderButtons && <img src={deleteButton} onClick={() => console.log(`Delete launch ${launch.id}`)}/> }
						</ListItemContainerDiv>
					);
				})
			}
		</ListDiv>
	);
}