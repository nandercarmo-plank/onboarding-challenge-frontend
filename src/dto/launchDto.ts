import { ICrewDto } from "./CrewDto";
import { IRocketDto } from "./RocketDto";

type ILaunchDto = {
	id: number;
	launchCode: string;
	date: string;
	success: boolean;
	rocket: IRocketDto;
	crew?: ICrewDto;
};

type ICreateLaunchDto = {
	launchCode: string;
	date: string;
	success: boolean;
	rocketId: number;
	crewId?: number;
};

type IUpdateLaunchDto = {
	launchCode: string;
	date: string;
	success: boolean;
	rocketId: number;
	crewId?: number;
};

export type { ILaunchDto, ICreateLaunchDto, IUpdateLaunchDto };
