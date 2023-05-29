import { styled } from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;	
`;

export const StyledLabel = styled.label`
	margin: 10px 0px;
	font-size: 18px;
	font-weight: bold;
`;

export const StyledInput = styled.input`
	margin-bottom: 20px;
	font-size: 18px;
	padding: 10px;
	border: 1px solid #AAA;
	border-radius: 10px;
`;

export const StyledSelect = styled.select`
	margin-bottom: 20px;
	font-size: 18px;
	padding: 10px 30px 10px 10px;
	border: 1px solid #AAA;
	border-radius: 10px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background-color: white;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 9.2l3.6-4.8H2.4L6 9.2z' fill='black'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: right 10px center;
`;

export const StyledButton = styled.button`
	align-self: center;
	width: 140px;
	height: 50px;
	border: none;
	border-radius: 10px;
	background-color: ${props => props.theme.buttonColor};
	color: ${props => props.theme.buttonTextColor};
	margin-top: 20px;
	padding: 5px 15px 5px 15px;
	text-align: center;

	h4 {
		margin: 0px;
	}

	&:hover {
		cursor: pointer;
		filter: brightness(95%);
	}
`;
