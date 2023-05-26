import { styled } from "styled-components";

export const NotificationDiv = styled.div`
	display: flex;
	position: fixed;
	visibility: visible;
	justify-content: center;
	align-items: center;
	right: 0px;
	top: 0px;
	width: 200px;
	height: 75px;
	border-radius: 10px;
	margin: 15px;
	padding: 5px;
	filter: opacity(90%);
	color: #fff;
	font-weight: bold;
	text-align: center;
	transition: top 0.25s ease;

	&:hover {
		filter: brightness(70%);
		filter: opacity(100%);
	}

	&.error {
		border: 1px solid rgb(219, 70, 70);
		background-color: rgb(255, 105, 105);
	}

	&.success {
		border: 1px solid rgb(123, 203, 123);
		background-color: #6edf7d;
	}
`;
