import { Meta } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import { withI18n } from "storybook-addon-i18n";
import { ThemeProvider } from "styled-components";
import { NotificationProvider } from "../../../../context/NotificationContext";
import { i18n } from "../../../../locale/i18n";
import { GlobalStyle } from "../../../../styles/styles";
import { theme } from "../../../../styles/theme";
import { Crew, CrewProps } from "../Crew";

export default {
	title: "components/DataRenders/Crew",
	component: Crew,
	decorators: [
		withI18n,
		(Story: React.ComponentType) => (
			<ThemeProvider theme={theme}>
				<NotificationProvider>
					<GlobalStyle />
					<I18nextProvider i18n={i18n}>
						<Router>
							<Story />
						</Router>
					</I18nextProvider>
				</NotificationProvider>
			</ThemeProvider>
		),
	],
} as Meta<CrewProps>;

export const WithCrewmans = {
	args: {
		isSubItem: false,
		renderButtons: true,
		crews: [
			{
				id: 1,
				name: "Crew",
				crewmans: [{ id: 1, name: "Crewman", patent: "Captain" }],
			},
		],
	},
};

export const WithoutCrewmans = {
	args: {
		isSubItem: false,
		renderButtons: true,
		crews: [
			{
				id: 1,
				name: "Crew",
				crewmans: [],
			},
		],
	},
};
