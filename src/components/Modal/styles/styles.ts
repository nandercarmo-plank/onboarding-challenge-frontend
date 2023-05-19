import { styled } from "styled-components";

const ModalDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContentDiv = styled.div`
	display: block;
	background-color: #fefefe;
	border: 1px solid #888;
	border-radius: 10px;
	margin: auto;
	padding: 30px 30px;
	width: 40%;
`;

const ModalHeaderDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	width: 100%;
	margin-bottom: 30px;

	h2 {
		align-self: center;
		margin: 0px;
	}
`;

const StyledSpan = styled.span`
	display: flex;
	color: #aaa;
	font-size: 28px;
	font-weight: bold;
	cursor: pointer;
`;

export {
	ModalDiv,
	ModalHeaderDiv,
	ModalContentDiv,
	StyledSpan
};
