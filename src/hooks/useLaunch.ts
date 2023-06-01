import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
	ICreateLaunchDto,
	ILaunchDto,
	IUpdateLaunchDto,
} from "../dto/LaunchDto";
import {
	getLaunchs,
	sendCreateLaunch,
	sendDeleteLaunch,
	sendUpdateLaunch,
} from "../services/launchService";
import { useNotification } from "./useNotification";

export type IUseLaunch = {
	fetchLaunchs: () => Promise<void>;
	addLaunch: (createLaunchDto: ICreateLaunchDto) => Promise<void>;
	editLaunch: (id: number, updateLaunchDto: IUpdateLaunchDto) => Promise<void>;
	deleteLaunch: (id: number) => Promise<void>;
	isDataLoaded: () => boolean;
};

export const useLaunch = (
	initState: ILaunchDto[] = []
): [ILaunchDto[], IUseLaunch] => {
	const { t } = useTranslation();

	const [dataIsLoad, setDataIsLoad] = useState(false);
	const [launchs, setLaunchs] = useState(initState);
	const [, setNotification] = useNotification();

	const fetchLaunchs = async () => {
		try {
			setDataIsLoad(false);
			const fetchedLaunchs = (await getLaunchs()).sort(
				(a, b) => a.id - b.id
			);
			fetchedLaunchs.forEach((launch) =>
				launch.crew?.crewmans?.sort((a, b) => a.id - b.id)
			);
			setLaunchs(fetchedLaunchs);
			setDataIsLoad(true);
		} catch (err) {
			setNotification.showNotification(
				t("hooks.use_launch.not_fetched"),
				false
			);
		}
	};

	const addLaunch = async (createLaunchDto: ICreateLaunchDto) => {
		const requestSucceed = await sendCreateLaunch(createLaunchDto);
		setNotification.showNotification(
			requestSucceed
				? t("hooks.use_launch.created")
				: t("hooks.use_launch.not_created"),
			requestSucceed
		);
		fetchLaunchs();
	};

	const editLaunch = async (id: number, updateLaunchDto: IUpdateLaunchDto) => {
		const requestSucceed = await sendUpdateLaunch(id, updateLaunchDto);
		setNotification.showNotification(
			requestSucceed
				? t("hooks.use_launch.updated")
				: t("hooks.use_launch.not_updated"),
			requestSucceed
		);
		fetchLaunchs();
	};

	const deleteLaunch = async (id: number) => {
		const requestSucceed = await sendDeleteLaunch(id);
		setNotification.showNotification(
			requestSucceed
				? t("hooks.use_launch.deleted")
				: t("hooks.use_launch.deleted"),
			requestSucceed
		);
		fetchLaunchs();
	};

	const isDataLoaded = () => dataIsLoad;

	return [
		launchs,
		{
			fetchLaunchs,
			addLaunch,
			editLaunch,
			deleteLaunch,
			isDataLoaded,
		},
	];
};
