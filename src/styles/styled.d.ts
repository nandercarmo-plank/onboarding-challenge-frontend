import "styled-components";

declare module "styled-components" {
	export type DefaultTheme = {
		fontColor: string;
		backgroundPrimary: string;
		backgroundSecondary: string;
		borderRadius: string;
		rocketColor: string;
		crewmanColor: string;
		crewColor: string;
		launchColor: string;
		rocketBorderColor: string;
		crewmanBorderColor: string;
		crewBorderColor: string;
		launchBorderColor: string;
		buttonColor: string;
		buttonHoverColor: string;
		buttonTextColor: string;
	};
}
