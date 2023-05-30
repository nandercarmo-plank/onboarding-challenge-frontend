type ICrewmanDto = {
	id: number;
	name: string;
	patent: string;
};

type ICreateCrewmanDto = {
	name: string;
	patent: string;
};

type IUpdateCrewmanDto = {
	name: string;
	patent: string;
};

export type { ICrewmanDto, ICreateCrewmanDto, IUpdateCrewmanDto };
