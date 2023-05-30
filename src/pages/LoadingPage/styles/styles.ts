import { keyframes, styled } from "styled-components";

const resizeAnimation = keyframes`
  0% {
    height: 90px;
  }
  50% {
    height: 110px;
  }
  100% {
    height: 90px;
  }
`;

export const LoadDiv = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 40%;
	height: 200px;
	justify-content: center;
	align-items: center;
	align-self: center;
	filter: grayscale(100%) opacity(50%);

	h2 {
		font-size: 18px;
		position: fixed;
		bottom: 0;
	}
`;

export const LoadImage = styled.img`
	animation: ${resizeAnimation} 2s linear infinite;
`;
