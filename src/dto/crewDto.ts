import { ICrewman } from "./crewmanDto";

export interface ICrew {
	id: number;
	name: string;
	crewmans?: ICrewman[];
}