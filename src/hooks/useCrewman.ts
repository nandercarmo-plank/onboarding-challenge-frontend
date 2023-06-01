import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
	ICreateCrewmanDto,
	ICrewmanDto,
	IUpdateCrewmanDto,
} from "../dto/CrewmanDto";
import {
	getCrewmans,
	sendCreateCrewman,
	sendDeleteCrewman,
	sendUpdateCrewman,
} from "../services/crewmanService";
import { useNotification } from "./useNotification";

export type IUseCrewman = {
	fetchCrewmans: () => Promise<void>;
	addCrewman: (createCrewmanDto: ICreateCrewmanDto) => Promise<void>;
	editCrewman: (
		id: number,
		updateCrewmanDto: IUpdateCrewmanDto
	) => Promise<void>;
	deleteCrewman: (id: number) => Promise<void>;
	isDataLoaded: () => boolean;
};

export const useCrewman = (
	initState: ICrewmanDto[] = []
): [ICrewmanDto[], IUseCrewman] => {
	const { t } = useTranslation();

	const [dataIsLoad, setDataIsLoad] = useState(false);
	const [crewmans, setCrewmans] = useState(initState);
	const [, setNotification] = useNotification();

	const fetchCrewmans = async () => {
		try {
			setDataIsLoad(false);
			setCrewmans((await getCrewmans()).sort((a, b) => a.id - b.id));
			setDataIsLoad(true);
		} catch (err) {
			setNotification.showNotification(
				t("hooks.use_crewman.not_fetched"),
				false
			);
		}
	};

	const addCrewman = async (createCrewmanDto: ICreateCrewmanDto) => {
		const requestSucceed = await sendCreateCrewman(createCrewmanDto);
		setNotification.showNotification(
			requestSucceed
				? t("hooks.use_crewman.created")
				: t("hooks.use_crewman.not_created"),
			requestSucceed
		);
		fetchCrewmans();
	};

	const editCrewman = async (
		id: number,
		updateCrewmanDto: IUpdateCrewmanDto
	) => {
		const requestSucceed = await sendUpdateCrewman(id, updateCrewmanDto);
		setNotification.showNotification(
			requestSucceed
				? t("hooks.use_crewman.updated")
				: t("hooks.use_crewman.not_updated"),
			requestSucceed
		);
		fetchCrewmans();
	};

	const deleteCrewman = async (id: number) => {
		const requestSucceed = await sendDeleteCrewman(id);
		setNotification.showNotification(
			requestSucceed
				? t("hooks.use_crewman.deleted")
				: t("hooks.use_crewman.not_deleted"),
			requestSucceed
		);
		fetchCrewmans();
	};

	const isDataLoaded = () => dataIsLoad;

	return [
		crewmans,
		{
			fetchCrewmans,
			addCrewman,
			editCrewman,
			deleteCrewman,
			isDataLoaded,
		},
	];
};
