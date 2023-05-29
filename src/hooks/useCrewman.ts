import { useState } from "react";
import { ICreateCrewmanDto, ICrewmanDto, IUpdateCrewmanDto } from "../dto/CrewmanDto";
import { getCrewmans, sendCreateCrewman, sendDeleteCrewman, sendUpdateCrewman } from "../services/crewmanService";
import { useNotification } from "./useNotification";

export interface IUseCrewman {
	fetchCrewmans: () => Promise<void>;
	addCrewman: (createCrewmanDto: ICreateCrewmanDto) => Promise<void>;
	editCrewman: (id: number, updateCrewmanDto: IUpdateCrewmanDto) => Promise<void>;
	deleteCrewman: (id: number) => Promise<void>;
	isDataLoaded: () => boolean;
};

export const useCrewman = (initState: ICrewmanDto[] = []): [ICrewmanDto[], IUseCrewman] => {

	const [dataIsLoad, setDataIsLoad] = useState(false);
	const [crewmans, setCrewmans] = useState(initState);
	const [, setNotification] = useNotification();

	const fetchCrewmans = async () => {
		try {
			setDataIsLoad(false);
			setCrewmans((await getCrewmans()).sort((a, b) => a.id - b.id));
			setTimeout(() => setDataIsLoad(true), 1000);
		} catch (err) {
			setNotification.showNotification(`${err}`, false);
		}
	}

	const addCrewman = async (createCrewmanDto: ICreateCrewmanDto) => {
		const requestSucceed = await sendCreateCrewman(createCrewmanDto);
		setNotification.showNotification(
			requestSucceed ? "Crewman created!" : "Sorry, crewman could not be created!",
			requestSucceed
		);
		fetchCrewmans();
	}

	const editCrewman = async (id: number, updateCrewmanDto: IUpdateCrewmanDto) => {
		const requestSucceed = await sendUpdateCrewman(id, updateCrewmanDto);
		setNotification.showNotification(
			requestSucceed ? "Crewman updated!" : "Sorry, crewman could not be updated!",
			requestSucceed
		);
		fetchCrewmans();
	}

	const deleteCrewman = async (id: number) => {
		const requestSucceed = await sendDeleteCrewman(id);
		setNotification.showNotification(
			requestSucceed ? "Crewman deleted!" : "Sorry, crewman could not be deleted!",
			requestSucceed
		);
		fetchCrewmans();
	}

	const isDataLoaded = () => dataIsLoad;

	return [
		crewmans,
		{
			fetchCrewmans,
			addCrewman,
			editCrewman,
			deleteCrewman,
			isDataLoaded,
		}
	]
}
