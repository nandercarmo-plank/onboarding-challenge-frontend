import { Meta } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import { withI18n } from "storybook-addon-i18n";
import { ThemeProvider } from "styled-components";
import { NotificationProvider } from "../../../../context/NotificationContext";
import { i18n } from "../../../../locale/i18n";
import { GlobalStyle } from "../../../../styles/styles";
import { theme } from "../../../../styles/theme";
import { RocketForm } from "../RocketForm";

export default {
	title: "components/Forms/RocketForm",
	component: RocketForm,
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
} as Meta;

export const Default = {};
