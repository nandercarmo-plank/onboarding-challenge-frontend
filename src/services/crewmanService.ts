import { ICreateCrewmanDto, ICrewman, IUpdateCrewmanDto } from "../dto/crewmanDto";

export function getCrewmans(): ICrewman[] {
	return [
		{ "id": 1, "name": "Luffy", "patent": "Capitão" },
		{ "id": 2, "name": "Zoro", "patent": "Primeiro imediato" },
		{ "id": 3, "name": "Nami", "patent": "Navegadora" },
		{ "id": 4, "name": "Naruto", "patent": "Hokage" },
		{ "id": 5, "name": "Sakura", "patent": "Kunoich" },
		{ "id": 6, "name": "Sasuke", "patent": "Jounin" },
		{ "id": 7, "name": "Kakashi", "patent": "Ambu" },
		{ "id": 12, "name": "Teste 2", "patent": "Crew" },
		{ "id": 11, "name": "Crewman", "patent": "Captain" }
	];
}

export function createCrewman(createCrewmanDto: ICreateCrewmanDto): void {
	console.log(createCrewmanDto);
}

export function updateCrewman(crewmanId: number | undefined, updateCrewmanDto: IUpdateCrewmanDto): void {
	console.log(crewmanId, updateCrewmanDto);
}

export function deleteCrewman(crewmanId: number): void {
	console.log(`Delete crewman ${crewmanId}`);
}