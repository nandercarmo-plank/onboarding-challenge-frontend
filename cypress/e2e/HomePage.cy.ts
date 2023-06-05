import '../support/e2e';

describe("Home Page", () => {
	it("Home should contains all the pages cards", () => {
		cy.visit("/");
		cy.get("#rocket-card").should("exist");
		cy.get("#crewman-card").should("exist");
		cy.get("#crew-card").should("exist");
		cy.get("#launch-card").should("exist");
	});
})