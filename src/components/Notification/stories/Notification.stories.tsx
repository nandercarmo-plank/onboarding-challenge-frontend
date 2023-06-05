import { Meta } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import { withI18n } from "storybook-addon-i18n";
import { ThemeProvider } from "styled-components";
import { NotificationProvider } from "../../../context/NotificationContext";
import {
	ERROR_NOTIFICATION,
	SUCCESS_NOTIFICATION,
} from "../../../hooks/useNotification";
import { i18n } from "../../../locale/i18n";
import { GlobalStyle } from "../../../styles/styles";
import { theme } from "../../../styles/theme";
import { Notification, NotificationProps } from "../Notification";

export default {
	title: "components/Notification/Notification",
	component: Notification,
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
} as Meta<NotificationProps>;

export const SuccessNotification = {
	args: {
		visible: true,
		type: SUCCESS_NOTIFICATION,
		message: "Success notification",
		hideFunction: () => {
			console.log("Success notification");
		},
	},
};

export const ErrorNotification = {
	args: {
		visible: true,
		type: ERROR_NOTIFICATION,
		message: "Error notification",
		hideFunction: () => {
			console.log("Error notification");
		},
	},
};
