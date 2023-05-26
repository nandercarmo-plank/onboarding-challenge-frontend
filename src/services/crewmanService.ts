import { del, get, post, put } from "../api/api";
import { ICreateCrewmanDto, ICrewmanDto, IUpdateCrewmanDto } from "../dto/CrewmanDto";

const PATH = "crewman";

async function getCrewmans(): Promise<ICrewmanDto[]> {
	try {
		return await get<ICrewmanDto>(PATH);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
}

async function sendCreateCrewman(createCrewmanDto: ICreateCrewmanDto): Promise<boolean> {
	try {
		return post<ICreateCrewmanDto>(PATH, createCrewmanDto);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
}

async function sendUpdateCrewman(crewmanId: number, updateCrewmanDto: IUpdateCrewmanDto): Promise<boolean> {
	try {
		return put<IUpdateCrewmanDto>(PATH, crewmanId, updateCrewmanDto);
	} catch (err) {
		throw "Sorry, crewman could not be updated!";
	}
}

async function sendDeleteCrewman(crewmanId: number): Promise<boolean> {
	try {
		return del(PATH, crewmanId);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
}

export {
	getCrewmans,
	sendCreateCrewman,
	sendUpdateCrewman,
	sendDeleteCrewman
};
