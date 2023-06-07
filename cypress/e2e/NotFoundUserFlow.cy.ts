import '../support/e2e';

describe("Not found page flow", () => {

	it("Should open the not found page", () => {
		cy.visit("/test");
		cy.get(".not-found-div").should("exist").click();
	});
})