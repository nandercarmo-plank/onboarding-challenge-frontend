import {styled} from "styled-components";

const ListItemContainerDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;

	img {
		display: flex;
		margin-left: 20px;
		width: 20px;
	}

	img:hover {
		cursor: pointer;
	}
`;

export {
	ListItemContainerDiv
}