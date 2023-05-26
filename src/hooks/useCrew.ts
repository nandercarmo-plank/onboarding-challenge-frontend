import { useState } from "react";
import { ICreateCrewDto, ICrewDto, IUpdateCrewDto } from "../dto/CrewDto";
import { getCrews, sendCreateCrew, sendDeleteCrew, sendUpdateCrew } from "../services/crewService";
import { useNotification } from "./useNotification";

export interface IUseCrew {
	fetchCrews: () => Promise<void>;
	addCrew: (createCrewDto: ICreateCrewDto) => Promise<void>;
	editCrew: (id: number, updateCrewDto: IUpdateCrewDto) => Promise<void>;
	deleteCrew: (id: number) => Promise<void>;
};

export const useCrew = (initState: ICrewDto[] = []): [ICrewDto[], IUseCrew] => {

	const [crews, setCrews] = useState(initState);
	const [, setNotification] = useNotification();

	const fetchCrews = async () => {
		try {
			const fetchedCrews = (await getCrews()).sort((a, b) => a.id - b.id);
			fetchedCrews.forEach(crew => crew.crewmans?.sort((a, b) => a.id - b.id));
			setCrews(fetchedCrews);
		} catch (err) {
			setNotification.showNotification(`${err}`, false);
		}
	}

	const addCrew = async (createCrewDto: ICreateCrewDto) => {
		const requestSucceed = await sendCreateCrew(createCrewDto);
		setNotification.showNotification(
			requestSucceed ? "Crew created!" : "Sorry, crew could not be created!",
			requestSucceed
		);
		fetchCrews();
	}

	const editCrew = async (id: number, updateCrewDto: IUpdateCrewDto) => {
		const requestSucceed = await sendUpdateCrew(id, updateCrewDto);
		setNotification.showNotification(
			requestSucceed ? "Crew updated!" : "Sorry, crew could not be updated!",
			requestSucceed
		);
		fetchCrews();
	}

	const deleteCrew = async (id: number) => {
		const requestSucceed = await sendDeleteCrew(id);
		setNotification.showNotification(
			requestSucceed ? "Crew deleted!" : "Sorry, crew could not be deleted!",
			requestSucceed
		);
		fetchCrews();
	}

	return [
		crews,
		{
			fetchCrews,
			addCrew,
			editCrew,
			deleteCrew
		}
	]
}
