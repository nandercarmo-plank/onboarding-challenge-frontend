import { styled } from "styled-components";

export const ContentDiv = styled.div`
	flex: 1;
	display: flex;
	height: 100%;
	justify-content: center;
`;

export const DataDiv = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 90%;
	margin-left: 10px;
	padding-left: 20px;
	padding-right: 20px;

	.h2-title {
		margin: 20px 0px 20px 0px;
		align-self: self-start;
	}
`;

export const DataHeaderDiv = styled.div`
	display: flex;
	flex-direction: row;
	text-align: center;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;

	h1 {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		width: 100%;
		margin-left: 120px;
	}

	a {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		margin-right: 40px;
		width: 140px;
		height: 40px;
		border-radius: 10px;
		background-color: ${(props) => props.theme.buttonColor};
		padding: 5px 15px 5px 15px;
		text-decoration: none;
		color: ${(props) => props.theme.buttonTextColor};
		font-size: 18px;
		font-family: "Press Start 2P";
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
	}

	a:hover {
		cursor: pointer;
		filter: brightness(95%);
	}

	a img {
		display: flex;
		align-self: center;
		justify-self: center;
		width: 20px;
		margin: 0px 0px 0px 0px;
	}
`;
