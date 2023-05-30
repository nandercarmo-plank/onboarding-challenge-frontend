import { del, get, post, put } from "../api/api";
import {
	ICreateCrewmanDto,
	ICrewmanDto,
	IUpdateCrewmanDto,
} from "../dto/CrewmanDto";

const PATH = "crewman";

export const getCrewmans = async (): Promise<ICrewmanDto[]> => {
	try {
		return await get<ICrewmanDto>(PATH);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
};

export const sendCreateCrewman = async (
	createCrewmanDto: ICreateCrewmanDto
): Promise<boolean> => {
	return post<ICreateCrewmanDto>(PATH, createCrewmanDto);
};

export const sendUpdateCrewman = async (
	crewmanId: number,
	updateCrewmanDto: IUpdateCrewmanDto
): Promise<boolean> => {
	return put<IUpdateCrewmanDto>(PATH, crewmanId, updateCrewmanDto);
};

export const sendDeleteCrewman = async (
	crewmanId: number
): Promise<boolean> => {
	return del(PATH, crewmanId);
};
