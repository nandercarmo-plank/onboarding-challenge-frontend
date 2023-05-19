import { ICrew } from "./crewDto";
import { IRocket } from "./rocketDto";

export interface ILaunch {
	id: number;
	launchCode: string;
	date: string;
	success: boolean;
	rocket: IRocket;
	crew?: ICrew;
}

export interface ICreateLaunchDto {
	launchCode: string;
	date: string;
	success: boolean;
	rocketId?: number;
	crewId?: number;
}

export interface IUpdateLaunchDto {
	launchCode: string;
	date: string;
	success: boolean;
	rocketId?: number;
	crewId?: number;
}