import { del, get, post, put } from "../api/api";
import { ICreateRocketDto, IRocketDto, IUpdateRocketDto } from "../dto/RocketDto";

const PATH = "rocket";

export const getRockets = async (): Promise<IRocketDto[]> => {
	try {
		return await get<IRocketDto>(PATH);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
}

export const sendCreateRocket = async (createRocketDto: ICreateRocketDto): Promise<boolean> => {
	return post<ICreateRocketDto>(PATH, createRocketDto);
}

export const sendUpdateRocket = async (rocketId: number, updateRocketDto: IUpdateRocketDto): Promise<boolean> => {
	return put<IUpdateRocketDto>(PATH, rocketId, updateRocketDto);
}

export const sendDeleteRocket = async (rocketId: number): Promise<boolean> => {
	return del(PATH, rocketId);
}
