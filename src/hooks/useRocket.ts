import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
	ICreateRocketDto,
	IRocketDto,
	IUpdateRocketDto,
} from "../dto/RocketDto";
import {
	getRockets,
	sendCreateRocket,
	sendDeleteRocket,
	sendUpdateRocket,
} from "../services/rocketService";
import { useNotification } from "./useNotification";

export type IUseRocket = {
	fetchRockets: () => Promise<void>;
	addRocket: (createRocketDto: ICreateRocketDto) => Promise<void>;
	editRocket: (id: number, updateRocketDto: IUpdateRocketDto) => Promise<void>;
	deleteRocket: (id: number) => Promise<void>;
	isDataLoaded: () => boolean;
};

export const useRocket = (
	initState: IRocketDto[] = []
): [IRocketDto[], IUseRocket] => {
	const { t } = useTranslation();

	const [dataIsLoad, setDataIsLoad] = useState(false);
	const [rockets, setRockets] = useState(initState);
	const [, setNotification] = useNotification();

	const fetchRockets = async () => {
		try {
			setDataIsLoad(false);
			setRockets((await getRockets()).sort((a, b) => a.id - b.id));
			setDataIsLoad(true);
		} catch (err) {
			setNotification.showNotification(
				t("hooks.use_rocket.not_fetched"),
				false
			);
		}
	};

	const addRocket = async (createRocketDto: ICreateRocketDto) => {
		const requestSucceed = await sendCreateRocket(createRocketDto);
		setNotification.showNotification(
			requestSucceed
				? t("hooks.use_rocket.created")
				: t("hooks.use_rocket.not_created"),
			requestSucceed
		);
		fetchRockets();
	};

	const editRocket = async (id: number, updateRocketDto: IUpdateRocketDto) => {
		const requestSucceed = await sendUpdateRocket(id, updateRocketDto);
		setNotification.showNotification(
			requestSucceed
				? t("hooks.use_rocket.updated")
				: t("hooks.use_rocket.not_updated"),
			requestSucceed
		);
		fetchRockets();
	};

	const deleteRocket = async (id: number) => {
		const requestSucceed = await sendDeleteRocket(id);
		setNotification.showNotification(
			requestSucceed
				? t("hooks.use_rocket.deleted")
				: t("hooks.use_rocket.not_deleted"),
			requestSucceed
		);
		fetchRockets();
	};

	const isDataLoaded = () => dataIsLoad;

	return [
		rockets,
		{
			fetchRockets,
			addRocket,
			editRocket,
			deleteRocket,
			isDataLoaded,
		},
	];
};
