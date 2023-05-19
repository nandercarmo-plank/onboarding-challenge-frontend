import { ICrewman } from "../../../dto/crewmanDto";
import { deleteButton, editButton } from "../../../resources/images";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles";

interface ICrewmanProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	data: ICrewman[];
}

export default function Crewman({ isSubItem = false, renderButtons = true, data }: ICrewmanProps) {
	return (
		<ListDiv>
			{
				data.map(crewman => {
					return (
						<ListItemContainerDiv key={crewman.id}>
							<ListItem className={isSubItem ? "sub-list-item" : "crewman list-item"}>
								<ListItemData>
									<strong>ID:</strong> { crewman.id }
									<br/>
									<strong>Name:</strong> { crewman.name }
									<br/>
									<strong>Patent:</strong> { crewman.patent }
								</ListItemData>
								<ListItemImage>
									{ renderButtons && <img src={editButton} onClick={() => console.log(`Edit crewman ${crewman.id}`)}/> }
								</ListItemImage>
							</ListItem>
							{ renderButtons && <img src={deleteButton} onClick={() => console.log(`Delete crewman ${crewman.id}`)}/> }
						</ListItemContainerDiv>
					);
				})
			}
		</ListDiv>
	);
}