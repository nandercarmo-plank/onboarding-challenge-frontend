import { styled } from "styled-components";

export const ListItemContainerDiv = styled.div`
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

	.list-item {
		border-radius: 10px;
		padding: 25px;
		margin-bottom: 10px;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
	}

	.sub-list-item {
		padding-left: 20px;
		padding-top: 10px;
	}

	.rocket {
		border: 1px solid #aaddff;
		background-color: #bbddff;
	}

	.crewman {
		border: 1px solid #ddaaff;
		background-color: #ddbbff;
	}

	.crew {
		border: 1px solid #ddffaa;
		background-color: #ddffbb;
	}

	.launch {
		border: 1px solid #ffddaa;
		background-color: #ffddbb;
	}
`;

export const ListDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const ListItem = styled.div`
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	width: 100%;
	align-items: start;
	
	&:hover {
		filter: brightness(95%);
		cursor: pointer;
	}
`;

export const ListItemData = styled.div`
	display: block;
	flex-direction: column;
	width: 100%;
	flex-grow: 1;
	font-size: 16px;
	
	strong {
		font-size: 20px;
	}
`;

export const ListItemImage = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 20px;
	flex-shrink: 0;

	img {
		height: 18px;
		margin: 0px 0px 0px 0px;
	}

	img:hover {
		cursor: pointer;
	}
`;
