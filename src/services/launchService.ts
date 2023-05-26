import { del, get, post, put } from "../api/api";
import { ICreateLaunchDto, ILaunchDto, IUpdateLaunchDto } from "../dto/LaunchDto";

const PATH = "launch";

export const getLaunchs = async (): Promise<ILaunchDto[]> => {
	try {
		return await get<ILaunchDto>(PATH);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
}

export const sendCreateLaunch = async (createLaunchDto: ICreateLaunchDto): Promise<boolean> => {
	return post<ICreateLaunchDto>(PATH, createLaunchDto);
}

export const sendUpdateLaunch = async (launchId: number, updateLaunchDto: IUpdateLaunchDto): Promise<boolean> => {
	return put<IUpdateLaunchDto>(PATH, launchId, updateLaunchDto);
}

export const sendDeleteLaunch = async (launchId: number): Promise<boolean> => {
	return del(PATH, launchId);
}
