import '../support/e2e';

const createdCrew = {
	name: "E2E Test Crew",
	crewmans: "2, 3, 4"
};

const updatedCrew = {
	name: "E2E Test Crew - Updated",
	crewmans: "2, 4"
};

describe("Crew user flow", () => {

	beforeEach(() => {
	});

	it("Should open the not found page", () => {
		cy.visit("/test");
		cy.get(".not-found-div").should("exist").click();
	});
})