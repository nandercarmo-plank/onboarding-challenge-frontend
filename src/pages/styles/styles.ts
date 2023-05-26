import { Link } from 'react-router-dom';
import { styled } from "styled-components";

const ContentDiv = styled.div`
	flex: 1;
	display: flex;
	height: 100%;
	justify-content: center;
`;

const DataDiv = styled.div`
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

const DataHeaderDiv = styled.div`
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
		width: 140px;
		height: 40px;
		border-radius: 10px;
		background-color: ${props => props.theme.buttonColor};
		padding: 5px 15px 5px 15px;
		text-decoration: none;
		color: ${props => props.theme.buttonTextColor};
		font-size: 18px;
		font-family: 'Press Start 2P';
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
	}

	a:hover {
		cursor: pointer;
		background-color: ${props => props.theme.buttonHoverColor} ;
	}

	a img {
		display: flex;
		align-self: center;
		justify-self: center;
		width: 20px;
		margin: 0px 0px 0px 0px;
	}
`;

const NotFoundDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	align-items: center;
	text-align: center;
	
	h1, h2 {
		align-self: center;
		height: auto;
	}

	img {
		height: 200px;
		margin: 50px 0px;
		align-self: center;
		filter: grayscale(100%) opacity(25%);
	}
`;

const HomeContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

const HomeLogoDiv = styled.div`
	display: flex;
	height: 500px;
	width: 100%;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 50px 0px 0px 0px;
	background-image: url('src/assets/pixel-rocket-opacity.png');
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

const HomeCardsContainerDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items:center;
	flex-wrap: wrap;
	margin: 100px 0px;
`;

const StyledLink = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;
	text-decoration: none;
	color: ${props => props.theme.fontColor};
	background-color: ${props => props.theme.backgroundSecondary};
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

const HomeCard = styled(StyledLink)`
  &:hover {
	cursor: pointer;
    background-color: #ccc;
  }
`;

export {
	ContentDiv,
	DataDiv,
	DataHeaderDiv,
	NotFoundDiv,
	HomeContentDiv,
	HomeLogoDiv,
	HomeCardsContainerDiv,
	HomeCard
};
