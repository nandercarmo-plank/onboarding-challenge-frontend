import { del, get, post, put } from "../api/api";
import { ICreateCrewDto, ICrewDto, IUpdateCrewDto } from "../dto/CrewDto";

const PATH = "crew";

async function getCrews(): Promise<ICrewDto[]> {
	try {
		return await get<ICrewDto>(PATH);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
}

async function sendCreateCrew(createCrewDto: ICreateCrewDto): Promise<boolean> {
	try {
		return post<ICreateCrewDto>(PATH, createCrewDto);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
}

async function sendUpdateCrew(crewId: number, updateCrewDto: IUpdateCrewDto): Promise<boolean> {
	try {
		return put<IUpdateCrewDto>(PATH, crewId, updateCrewDto);
	} catch (err) {
		throw "Sorry, crew could not be updated!";
	}
}

async function sendDeleteCrew(crewId: number): Promise<boolean> {
	try {
		return del(PATH, crewId);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
}

export {
	getCrews,
	sendCreateCrew,
	sendUpdateCrew,
	sendDeleteCrew
};
