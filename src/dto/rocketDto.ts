type IRocketDto = {
	id: number;
	name: string;
};

type ICreateRocketDto = {
	name: string;
};

type IUpdateRocketDto = {
	name: string;
};

export type { IRocketDto, ICreateRocketDto, IUpdateRocketDto };
