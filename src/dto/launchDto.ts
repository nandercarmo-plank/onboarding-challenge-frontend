import { ICrewDto } from "./CrewDto";
import { IRocketDto } from "./RocketDto";

interface ILaunchDto {
	id: number;
	launchCode: string;
	date: string;
	success: boolean;
	rocket: IRocketDto;
	crew?: ICrewDto;
}

interface ICreateLaunchDto {
	launchCode: string;
	date: string;
	success: boolean;
	rocketId: number;
	crewId?: number;
}

interface IUpdateLaunchDto {
	launchCode: string;
	date: string;
	success: boolean;
	rocketId: number;
	crewId?: number;
}

export type {
	ILaunchDto,
	ICreateLaunchDto,
	IUpdateLaunchDto
};
