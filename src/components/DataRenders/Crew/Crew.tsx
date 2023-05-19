import { ICrew } from "../../../dto/crewDto";
import { deleteButton, editButton } from "../../../resources/images";
import Crewman from "../Crewman/Crewman";
import { ListDiv, ListItem, ListItemContainerDiv, ListItemData, ListItemImage } from "../styles";

interface ICrewProps {
	isSubItem?: boolean;
	renderButtons?: boolean;
	data: ICrew[];
}

export default function Crew({ isSubItem = false, renderButtons = true, data }: ICrewProps) {
	return (
		<ListDiv>
			{
				data.map(crew => {
					return (
						<ListItemContainerDiv key={crew.id}>
							<ListItem className={isSubItem ? "sub-list-item" : "crew list-item"}>
								<ListItemData>
									<strong>ID:</strong> { crew.id }
									<br/>
									<strong>Name:</strong> { crew.name }
									<br/>
									<strong>Crewmans:</strong>
									<br/>
									{
										crew.crewmans && <Crewman isSubItem={true} renderButtons={false} data={crew.crewmans} />
									} 
								</ListItemData>
								<ListItemImage>
									{ renderButtons && <img src={editButton} onClick={() => console.log(`Edit crew ${crew.id}`)}/> }
								</ListItemImage>
							</ListItem>
							{ renderButtons && <img src={deleteButton} onClick={() => console.log(`Delete crew ${crew.id}`)}/> }
						</ListItemContainerDiv>
					);
				})
			}
		</ListDiv>
	);
}