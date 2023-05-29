import { useState } from "react";
import { ICreateRocketDto, IRocketDto, IUpdateRocketDto } from "../dto/RocketDto";
import { getRockets, sendCreateRocket, sendDeleteRocket, sendUpdateRocket } from "../services/rocketService";
import { useNotification } from "./useNotification";

export interface IUseRocket {
	fetchRockets: () => Promise<void>;
	addRocket: (createRocketDto: ICreateRocketDto) => Promise<void>;
	editRocket: (id: number, updateRocketDto: IUpdateRocketDto) => Promise<void>;
	deleteRocket: (id: number) => Promise<void>;
	isDataLoaded: () => boolean;
};

export const useRocket = (initState: IRocketDto[] = []): [IRocketDto[], IUseRocket] => {

	const [dataIsLoad, setDataIsLoad] = useState(false);
	const [rockets, setRockets] = useState(initState);
	const [, setNotification] = useNotification();

	const fetchRockets = async () => {
		try {
			setDataIsLoad(false);
			setRockets((await getRockets()).sort((a, b) => a.id - b.id));
			setTimeout(() => setDataIsLoad(true), 1000);
		} catch (err) {
			setNotification.showNotification(`${err}`, false);
		}
	}

	const addRocket = async (createRocketDto: ICreateRocketDto) => {
		const requestSucceed = await sendCreateRocket(createRocketDto);
		setNotification.showNotification(
			requestSucceed ? "Rocket created!" : "Sorry, rocket could not be created!",
			requestSucceed
		);
		fetchRockets();
	}

	const editRocket = async (id: number, updateRocketDto: IUpdateRocketDto) => {
		const requestSucceed = await sendUpdateRocket(id, updateRocketDto);
		setNotification.showNotification(
			requestSucceed ? "Rocket updated!" : "Sorry, rocket could not be updated!",
			requestSucceed
		);
		fetchRockets();
	}

	const deleteRocket = async (id: number) => {
		const requestSucceed = await sendDeleteRocket(id);
		setNotification.showNotification(
			requestSucceed ? "Rocket deleted!" : "Sorry, rocket could not be deleted!",
			requestSucceed
		);
		fetchRockets();
	}

	const isDataLoaded = () => dataIsLoad;

	return [
		rockets,
		{
			fetchRockets,
			addRocket,
			editRocket,
			deleteRocket,
			isDataLoaded,
		}
	]
}
