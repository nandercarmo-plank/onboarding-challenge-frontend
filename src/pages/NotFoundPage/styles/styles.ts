import { styled } from "styled-components";

export const NotFoundDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	align-items: center;
	text-align: center;

	h1,
	h2 {
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
