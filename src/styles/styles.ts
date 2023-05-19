import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	* {
		font-family: 'Courier New', Courier, monospace;
	}

	html, body {
		display: flex;
		flex-direction: column;
		flex: 1;
		height: 100%;
		color: ${(props) => props.theme.fontColor};
	}

	#root {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	h1, h2, h3, h4 {
		font-family: 'Press Start 2P', cursive;
	}

	h1 {
		justify-content: center;
		justify-self: center;
		font-size:50px;
		margin: 10px auto 10px auto;
		height: 130px;
	}

	h3 {
		justify-content: center;
		justify-self: center;
		font-size: 18px;
		width: 100%;
		flex-grow: 1;
	}

	h4 {
		justify-content: center;
		justify-self: center;
		font-size: 14px;
		width: 100%;
	}

`;

export default GlobalStyle;