import { IRocket } from "../../../dto/rocketDto";
import { deleteButton, editButton } from "../../../resources/images";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles";

interface IRocketProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	data: IRocket[];
}

export default function Rocket({ isSubItem = false, renderButtons = true, data }: IRocketProps) {
	return (
		<ListDiv>
			{
				data.map(rocket => {
					return (
						<ListItemContainerDiv key={rocket.id}>
							<ListItem className={isSubItem ? "sub-list-item" : "rocket list-item"}>
								<ListItemData>
									<strong>ID:</strong> { rocket.id }
									<br/>
									<strong>Name:</strong> { rocket.name }
								</ListItemData>
								<ListItemImage>
									{ renderButtons && <img src={editButton} onClick={() => console.log(`Edit rocket ${rocket.id}`)}/> }
								</ListItemImage>
							</ListItem>
							{ renderButtons && <img src={deleteButton} onClick={() => console.log(`Delete rocket ${rocket.id}`)}/> }
						</ListItemContainerDiv>
					);
				})
			}
		</ListDiv>
	);
}