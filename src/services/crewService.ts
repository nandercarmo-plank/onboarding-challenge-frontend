import { ICreateCrewDto, ICrewDto, IUpdateCrewDto } from "../dto/CrewDto";

function getCrews(): ICrewDto[] {
	return [
		{ "id": 1, "name": "Bando do chapéu de palha", "crewmans": [{ "id": 1, "name": "Luffy", "patent": "Capitão" }, { "id": 2, "name": "Zoro", "patent": "Primeiro imediato" }, { "id": 3, "name": "Nami", "patent": "Navegadora" }] },
		{ "id": 2, "name": "Time 7", "crewmans": [{ "id": 4, "name": "Naruto", "patent": "Hokage" }, { "id": 5, "name": "Sakura", "patent": "Kunoich" }, { "id": 6, "name": "Sasuke", "patent": "Jounin" }, { "id": 7, "name": "Kakashi", "patent": "Ambu" }] },
		{ "id": 6, "name": "Crew Test 1", "crewmans": [{ "id": 1, "name": "Luffy", "patent": "Capitão" }, { "id": 3, "name": "Nami", "patent": "Navegadora" }, { "id": 4, "name": "Naruto", "patent": "Hokage" }] },
		{ "id": 7, "name": "Crew Test 2", "crewmans": [{ "id": 1, "name": "Luffy", "patent": "Capitão" }, { "id": 2, "name": "Zoro", "patent": "Primeiro imediato" }, { "id": 4, "name": "Naruto", "patent": "Hokage" }] },
		{ "id": 8, "name": "New Crew 1", "crewmans": [{ "id": 2, "name": "Zoro", "patent": "Primeiro imediato" }, { "id": 5, "name": "Sakura", "patent": "Kunoich" }] }
	];
}

function createCrew(createCrewDto: ICreateCrewDto): void {
	console.log(createCrewDto);
}

function updateCrew(crewId: number | undefined, updateCrewDto: IUpdateCrewDto): void {
	console.log(crewId, updateCrewDto);
}

function deleteCrew(crewId: number): void {
	console.log(`Delete crew ${crewId}`);
}

export {
	getCrews,
	createCrew,
	updateCrew,
	deleteCrew
};
