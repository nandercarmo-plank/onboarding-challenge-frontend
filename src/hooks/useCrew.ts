import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
	type ICreateCrewDto,
	type ICrewDto,
	type IUpdateCrewDto,
} from "../dto/CrewDto";
import {
	getCrews,
	sendCreateCrew,
	sendDeleteCrew,
	sendUpdateCrew,
} from "../services/crewService";
import { useNotification } from "./useNotification";

export type IUseCrew = {
	fetchCrews: () => void;
	addCrew: (createCrewDto: ICreateCrewDto) => Promise<void>;
	editCrew: (id: number, updateCrewDto: IUpdateCrewDto) => Promise<void>;
	deleteCrew: (id: number) => void;
	isDataLoaded: () => boolean;
};

export const useCrew = (initState: ICrewDto[] = []): [ICrewDto[], IUseCrew] => {
	const { t } = useTranslation();

	const [dataIsLoad, setDataIsLoad] = useState(false);
	const [crews, setCrews] = useState(initState);
	const [, setNotification] = useNotification();

	const fetchCrews = async () => {
		try {
			setDataIsLoad(false);
			const fetchedCrews = (await getCrews()).sort((a, b) => a.id - b.id);
			fetchedCrews.forEach((crew) =>
				crew.crewmans?.sort((a, b) => a.id - b.id)
			);
			setCrews(fetchedCrews);
			setDataIsLoad(true);
		} catch (err) {
			setNotification.showNotification(
				t("hooks.use_crew.not_fetched"),
				false
			);
		}
	};

	const addCrew = async (createCrewDto: ICreateCrewDto) => {
		const requestSucceed = await sendCreateCrew(createCrewDto);
		setNotification.showNotification(
			requestSucceed
				? t("hooks.use_crew.created")
				: t("hooks.use_crew.not_created"),
			requestSucceed
		);
		fetchCrews();
	};

	const editCrew = async (id: number, updateCrewDto: IUpdateCrewDto) => {
		const requestSucceed = await sendUpdateCrew(id, updateCrewDto);
		setNotification.showNotification(
			requestSucceed
				? t("hooks.use_crew.updated")
				: t("hooks.use_crew.not_updated"),
			requestSucceed
		);
		fetchCrews();
	};

	const deleteCrew = async (id: number) => {
		const requestSucceed = await sendDeleteCrew(id);
		setNotification.showNotification(
			requestSucceed
				? t("hooks.use_crew.deleted")
				: t("hooks.use_crew.not_deleted"),
			requestSucceed
		);
		return await fetchCrews();
	};

	const isDataLoaded = () => dataIsLoad;

	return [
		crews,
		{
			fetchCrews,
			addCrew,
			editCrew,
			deleteCrew,
			isDataLoaded,
		},
	];
};
