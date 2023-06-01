import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
	background-color: ${(props) => props.theme.backgroundSecondary};
	padding: 5px 15px;
	border-radius: 10px;
	margin-bottom: 10px;
	text-align: center;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
	width: 350px;
	text-align: center;

	h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0px 15px 40px 15px;
		height: 100px;
	}

	nav ul {
		text-align: center;
		padding: 0;
		list-style: none;
	}
`;

export const StyledLogoImage = styled(Link)`
	img {
		display: flex;
		align-self: center;
		margin: 30px auto 20px auto;
		height: 130px;
	}

	img:hover {
		cursor: pointer;
		filter: brightness(95%);
	}
`;

export const StyledLink = styled(Link)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 10px;
	background-color: ${(props) => props.theme.backgroundPrimary};
	width: 100%;
	height: 50px;
	padding: 15px 30px;
	text-decoration: none;
	color: ${(props) => props.theme.fontColor};
	font-size: 18px;
	font-family: "Press Start 2P";
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`;

export const StyledImage = styled.img`
	display: flex;
	justify-self: center;
	height: 30px;
	width: 35px;
	margin: 0;
`;

export const StyledNavItem = styled.li`
	display: flex;
	margin-bottom: 15px;
`;

export const StyledNav = styled.ul`
	text-align: center;
	padding: 0;
	list-style: none;
`;

export const StyledLinkHover = styled(StyledLink)`
	&:hover {
		filter: brightness(85%);
	}
`;
