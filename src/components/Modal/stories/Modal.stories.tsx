import { Meta, StoryObj } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import { withI18n } from "storybook-addon-i18n";
import { ThemeProvider } from "styled-components";
import { NotificationProvider } from "../../../context/NotificationContext";
import { i18n } from "../../../locale/i18n";
import { GlobalStyle } from "../../../styles/styles";
import { theme } from "../../../styles/theme";
import { CrewForm } from "../../Forms/Crew/CrewForm";
import { CrewmanForm } from "../../Forms/Crewman/CrewmanForm";
import { LaunchForm } from "../../Forms/Launch/LaunchForm";
import { RocketForm } from "../../Forms/Rocket/RocketForm";
import { Modal, ModalProps } from "../Modal";

export default {
	title: "components/Modal/Modal",
	component: Modal,
	args: {
		visible: true,
		title: "Modal",
	},
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
} as Meta<ModalProps>;

export const Rocket: StoryObj<ModalProps> = {
	args: {
		visible: true,
		title: "Rocket",
		children: (
			<RocketForm
				onSubmit={() => {
					console.log("RocketModal");
				}}
			/>
		),
	},
};

export const Crew: StoryObj<ModalProps> = {
	args: {
		visible: true,
		title: "Crew",
		children: (
			<CrewForm
				onSubmit={() => {
					console.log("CrewModal");
				}}
			/>
		),
	},
};

export const Crewman: StoryObj<ModalProps> = {
	args: {
		visible: true,
		title: "Crewman",
		children: (
			<CrewmanForm
				onSubmit={() => {
					console.log("CrewmanModal");
				}}
			/>
		),
	},
};

export const Launch: StoryObj<ModalProps> = {
	args: {
		visible: true,
		title: "Launch",
		children: (
			<LaunchForm
				onSubmit={() => {
					console.log("LaunchModal");
				}}
			/>
		),
	},
};
