import { useState } from "react";
import { ICreateLaunchDto, ILaunchDto, IUpdateLaunchDto } from "../dto/LaunchDto";
import { getLaunchs, sendCreateLaunch, sendDeleteLaunch, sendUpdateLaunch } from "../services/launchService";
import { useNotification } from "./useNotification";

export interface IUseLaunch {
	fetchLaunchs: () => Promise<void>;
	addLaunch: (createLaunchDto: ICreateLaunchDto) => Promise<void>;
	editLaunch: (id: number, updateLaunchDto: IUpdateLaunchDto) => Promise<void>;
	deleteLaunch: (id: number) => Promise<void>;
	isDataLoaded: () => boolean;
};

export const useLaunch = (initState: ILaunchDto[] = []): [ILaunchDto[], IUseLaunch] => {

	const [dataIsLoad, setDataIsLoad] = useState(false);
	const [launchs, setLaunchs] = useState(initState);
	const [, setNotification] = useNotification();

	const fetchLaunchs = async () => {
		try {
			setDataIsLoad(false);
			const fetchedLaunchs = (await getLaunchs()).sort((a, b) => a.id - b.id);
			fetchedLaunchs.forEach(launch => launch.crew?.crewmans?.sort((a, b) => a.id - b.id));
			setLaunchs(fetchedLaunchs);
			setTimeout(() => setDataIsLoad(true), 1000);
		} catch (err) {
			setNotification.showNotification(`${err}`, false);
		}
	}

	const addLaunch = async (createLaunchDto: ICreateLaunchDto) => {
		const requestSucceed = await sendCreateLaunch(createLaunchDto);
		setNotification.showNotification(
			requestSucceed ? "Launch created!" : "Sorry, launch could not be created!",
			requestSucceed
		);
		fetchLaunchs();
	}

	const editLaunch = async (id: number, updateLaunchDto: IUpdateLaunchDto) => {
		const requestSucceed = await sendUpdateLaunch(id, updateLaunchDto);
		setNotification.showNotification(
			requestSucceed ? "Launch updated!" : "Sorry, launch could not be updated!",
			requestSucceed
		);
		fetchLaunchs();
	}

	const deleteLaunch = async (id: number) => {
		const requestSucceed = await sendDeleteLaunch(id);
		setNotification.showNotification(
			requestSucceed ? "Launch deleted!" : "Sorry, launch could not be deleted!",
			requestSucceed
		);
		fetchLaunchs();
	}

	const isDataLoaded = () => dataIsLoad;

	return [
		launchs,
		{
			fetchLaunchs,
			addLaunch,
			editLaunch,
			deleteLaunch,
			isDataLoaded,
		}
	]
}
