import {styled} from "styled-components";

const Header = styled.header`
	background-color: ${props => props.theme.backgroundSecondary};
	padding: 5px 15px;
	border-radius: 10px;
	margin-bottom: 10px;
	text-align: center;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
	width: 300px;

	h2 {
		display: flex;
		align-items: center;
		margin: 0px 15px 40px 15px;
		height: 100px;
	}

	a img {
		display: flex;
		align-self: center;
		margin: 30px auto 20px auto;
		height: 130px;
	}

	nav ul {
		text-align: center;
		padding: 0;
		list-style: none;
	}
	
	nav ul li {
		display: flex;
		margin-bottom: 15px;
	}
	
	nav ul li a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 10px;
		background-color: ${props => props.theme.backgroundPrimary};
		width: 100%;
		height: 50px;
		padding: 15px 30px 15px 30px;
		text-decoration: none;
		color: ${props => props.theme.fontColor};
		font-size: 18px;
		font-family: 'Press Start 2P';
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
	}
	
	nav ul li a img {
		display: flex;
		justify-self: center;
		height: 30px;
		width: 35px;
		margin: 0px 0px 0px 0px;
	}

	nav ul li a:hover {
		background-color: #ccc;
	}
`;

export {
	Header
}