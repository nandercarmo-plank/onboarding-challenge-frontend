import { ILaunch } from "../dto/launchDto";

export function getLaunchs(): ILaunch[] {
	return [
		{
			"id": 1,
			"launchCode": "Lançamento Going Merry 1",
			"date": "2023-04-24",
			"success": true,
			"rocket": {
				"id": 1,
				"name": "Going Merry I"
			},
			"crew": {
				"id": 1,
				"name": "Bando do chapéu de palha",
				"crewmans": [
					{
						"id": 1,
						"name": "Luffy",
						"patent": "Capitão"
					},
					{
						"id": 2,
						"name": "Zoro",
						"patent": "Primeiro imediato"
					},
					{
						"id": 3,
						"name": "Nami",
						"patent": "Navegadora"
					}
				]
			}
		},
		{
			"id": 2,
			"launchCode": "Lançamento Konoha 1",
			"date": "2023-04-24",
			"success": true,
			"rocket": {
				"id": 2,
				"name": "Konoha I"
			},
			"crew": {
				"id": 2,
				"name": "Time 7",
				"crewmans": [
					{
						"id": 4,
						"name": "Naruto",
						"patent": "Hokage"
					},
					{
						"id": 5,
						"name": "Sakura",
						"patent": "Kunoich"
					},
					{
						"id": 6,
						"name": "Sasuke",
						"patent": "Jounin"
					},
					{
						"id": 7,
						"name": "Kakashi",
						"patent": "Ambu"
					}
				]
			}
		},
		{
			"id": 7,
			"launchCode": "Launch Test II",
			"date": "2023-05-12",
			"success": false,
			"rocket": {
				"id": 18,
				"name": "Teste 3"
			},
			"crew": {
				"id": 6,
				"name": "Crew Test 1",
				"crewmans": [
					{
						"id": 1,
						"name": "Luffy",
						"patent": "Capitão"
					},
					{
						"id": 3,
						"name": "Nami",
						"patent": "Navegadora"
					},
					{
						"id": 4,
						"name": "Naruto",
						"patent": "Hokage"
					}
				]
			}
		},
		{
			"id": 6,
			"launchCode": "Launch Test I Updated",
			"date": "2023-05-12",
			"success": false,
			"rocket": {
				"id": 20,
				"name": "New Rocket 1"
			},
			"crew": {
				"id": 8,
				"name": "New Crew 1",
				"crewmans": [
					{
						"id": 2,
						"name": "Zoro",
						"patent": "Primeiro imediato"
					},
					{
						"id": 5,
						"name": "Sakura",
						"patent": "Kunoich"
					}
				]
			}
		}
	];
}import { ICrew } from "../dto/crewDto";

export function getCrews(): ICrew[] {
	return [
		{
			"id": 1,
			"name": "Bando do chapéu de palha",
			"crewmans": [
				{
					"id": 1,
					"name": "Luffy",
					"patent": "Capitão"
				},
				{
					"id": 2,
					"name": "Zoro",
					"patent": "Primeiro imediato"
				},
				{
					"id": 3,
					"name": "Nami",
					"patent": "Navegadora"
				}
			]
		},
		{
			"id": 2,
			"name": "Time 7",
			"crewmans": [
				{
					"id": 4,
					"name": "Naruto",
					"patent": "Hokage"
				},
				{
					"id": 5,
					"name": "Sakura",
					"patent": "Kunoich"
				},
				{
					"id": 6,
					"name": "Sasuke",
					"patent": "Jounin"
				},
				{
					"id": 7,
					"name": "Kakashi",
					"patent": "Ambu"
				}
			]
		},
		{
			"id": 6,
			"name": "Crew Test 1",
			"crewmans": [
				{
					"id": 1,
					"name": "Luffy",
					"patent": "Capitão"
				},
				{
					"id": 3,
					"name": "Nami",
					"patent": "Navegadora"
				},
				{
					"id": 4,
					"name": "Naruto",
					"patent": "Hokage"
				}
			]
		},
		{
			"id": 7,
			"name": "Crew Test 2",
			"crewmans": [
				{
					"id": 1,
					"name": "Luffy",
					"patent": "Capitão"
				},
				{
					"id": 2,
					"name": "Zoro",
					"patent": "Primeiro imediato"
				},
				{
					"id": 4,
					"name": "Naruto",
					"patent": "Hokage"
				}
			]
		},
		{
			"id": 8,
			"name": "New Crew 1",
			"crewmans": [
				{
					"id": 2,
					"name": "Zoro",
					"patent": "Primeiro imediato"
				},
				{
					"id": 5,
					"name": "Sakura",
					"patent": "Kunoich"
				}
			]
		}
	];
}