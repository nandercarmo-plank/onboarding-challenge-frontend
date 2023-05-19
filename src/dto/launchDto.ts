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