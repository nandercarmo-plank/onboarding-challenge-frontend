import { ICrewmanDto } from "./CrewmanDto";

type ICrewDto = {
	id: number;
	name: string;
	crewmans?: ICrewmanDto[];
};

type ICreateCrewDto = {
	name: string;
	crewmans?: number[];
};

type IUpdateCrewDto = {
	name: string;
	crewmans?: number[];
};

export type { ICrewDto, ICreateCrewDto, IUpdateCrewDto };
