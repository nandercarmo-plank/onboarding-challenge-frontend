import { ICrewman } from "./crewmanDto";

export interface ICrew {
	id: number;
	name: string;
	crewmans?: ICrewman[];
}

export interface ICreateCrewDto {
	name: string;
	crewmans?: number[];
}

export interface IUpdateCrewDto {
	name: string;
	crewmans?: number[];
}