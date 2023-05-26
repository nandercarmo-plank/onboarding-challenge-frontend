import { del, get, post, put } from "../api/api";
import { ICreateLaunchDto, ILaunchDto, IUpdateLaunchDto } from "../dto/LaunchDto";

const PATH = "launch";

async function getLaunchs(): Promise<ILaunchDto[]> {
	try {
		return await get<ILaunchDto>(PATH);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
}

async function sendCreateLaunch(createLaunchDto: ICreateLaunchDto): Promise<boolean> {
	try {
		return post<ICreateLaunchDto>(PATH, createLaunchDto);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
}

async function sendUpdateLaunch(launchId: number, updateLaunchDto: IUpdateLaunchDto): Promise<boolean> {
	try {
		return put<IUpdateLaunchDto>(PATH, launchId, updateLaunchDto);
	} catch (err) {
		throw "Sorry, launch could not be updated!";
	}
}

async function sendDeleteLaunch(launchId: number): Promise<boolean> {
	try {
		return del(PATH, launchId);
	} catch (err) {
		throw "Sorry, an error ocurred!";
	}
}

export {
	getLaunchs,
	sendCreateLaunch,
	sendUpdateLaunch,
	sendDeleteLaunch
};
