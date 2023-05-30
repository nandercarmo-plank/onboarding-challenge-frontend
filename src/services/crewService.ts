import { del, get, post, put } from "../api/api";
import { ICreateCrewDto, ICrewDto, IUpdateCrewDto } from "../dto/CrewDto";

const PATH = "crew";

export const getCrews = async (): Promise<ICrewDto[]> => {
	try {
		return await get<ICrewDto>(PATH);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
};

export const sendCreateCrew = async (
	createCrewDto: ICreateCrewDto
): Promise<boolean> => {
	return post<ICreateCrewDto>(PATH, createCrewDto);
};

export const sendUpdateCrew = async (
	crewId: number,
	updateCrewDto: IUpdateCrewDto
): Promise<boolean> => {
	return put<IUpdateCrewDto>(PATH, crewId, updateCrewDto);
};

export const sendDeleteCrew = async (crewId: number): Promise<boolean> => {
	return del(PATH, crewId);
};
