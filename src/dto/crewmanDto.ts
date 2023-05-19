export interface ICrewman {
	id: number;
	name: string;
	patent: string;
}

export interface ICreateCrewmanDto {
	name: string;
	patent: string;
}

export interface IUpdateCrewmanDto {
	name: string;
	patent: string;
}