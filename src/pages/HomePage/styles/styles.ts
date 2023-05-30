import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const HomeContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const HomeLogoDiv = styled.div`
	display: flex;
	height: 500px;
	width: 100%;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 50px 0px 0px 0px;
	background-image: url("src/resources/assets/pixel-rocket-opacity.png");
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;

	h1 {
		position: absolute;
		top: -50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: top 1s ease;
		opacity: 0;
	}

	h1.loaded {
		top: 300px;
		opacity: 1;
	}
`;

export const HomeCardsContainerDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	margin: 100px 0px;
`;

export const StyledLink = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;
	text-decoration: none;
	color: ${(props) => props.theme.fontColor};
	background-color: ${(props) => props.theme.backgroundSecondary};
	width: 250px;
	height: 150px;
	padding: 15px;
	margin: 30px;
	border-radius: 10px;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);

	h4 {
		font-size: 20px;
		margin: 0px;
	}

	img {
		height: 50px;
	}
`;

export const HomeCard = styled(StyledLink)`
	&:hover {
		cursor: pointer;
		filter: brightness(85%);
	}
`;
