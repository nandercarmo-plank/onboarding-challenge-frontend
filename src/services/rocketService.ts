import { del, get, post, put } from "../api/api";
import { ICreateRocketDto, IRocketDto, IUpdateRocketDto } from "../dto/RocketDto";

const PATH = "rocket";

async function getRockets(): Promise<IRocketDto[]> {
	try {
		return await get<IRocketDto>(PATH);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
}

async function sendCreateRocket(createRocketDto: ICreateRocketDto): Promise<boolean> {
	try {
		await post<ICreateRocketDto>(PATH, createRocketDto);
		return true;
	} catch (err) {
		return false;
	}
}

async function sendUpdateRocket(rocketId: number, updateRocketDto: IUpdateRocketDto): Promise<boolean> {
	try {
		await put<IUpdateRocketDto>(PATH, rocketId, updateRocketDto);
		return true;
	} catch (err) {
		return false;
		throw "Sorry, rocket could not be updated!";
	}
}

async function sendDeleteRocket(rocketId: number): Promise<boolean> {
	try {
		await del(PATH, rocketId);
		return true;
	} catch (err) {
		return false;
		throw "Sorry, rocket could not be deleted!";
	}
}

export {
	getRockets,
	sendCreateRocket,
	sendUpdateRocket,
	sendDeleteRocket
};
