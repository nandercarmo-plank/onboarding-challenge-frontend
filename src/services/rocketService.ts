import { ICreateRocketDto, IRocketDto, IUpdateRocketDto } from "../dto/RocketDto";

function getRockets(): IRocketDto[] {
	return [
		{ "id": 1, "name": "Going Merry I" },
		{ "id": 2, "name": "Konoha I" },
		{ "id": 18, "name": "Teste 3" },
		{ "id": 19, "name": "Shazam" },
		{ "id": 16, "name": "Rocket Test 1" },
		{ "id": 17, "name": "Shuleigos 1" },
		{ "id": 20, "name": "New Rocket 1" }
	];
}

function createRocket(createRocketDto: ICreateRocketDto): void {
	console.log(createRocketDto);
}

function updateRocket(rocketId: number | undefined, updateRocketDto: IUpdateRocketDto): void {
	console.log(rocketId, updateRocketDto);
}

function deleteRocket(rocketId: number): void {
	console.log(`Delete rocket ${rocketId}`);
}

export {
	getRockets,
	createRocket,
	updateRocket,
	deleteRocket
};
