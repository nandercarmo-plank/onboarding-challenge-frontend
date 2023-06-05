import { v4 as uuidv4 } from 'uuid';
import '../support/e2e';

const createdCrew = {
	name: uuidv4(),
	crewmans: "2, 3, 4"
};

const updatedCrew = {
	name: uuidv4(),
	crewmans: "2, 4"
};

describe("Crew user flow", () => {

	beforeEach(() => {
		cy.visit("/");
	});

	it("Should create a crew", () => {
		cy.get("#crew-card").should("exist").click();
		cy.url().should("include", '/crew');
		cy.get(".modal-div").should("not.exist");
		cy.get(".add-crew-btn").should("exist").click();
		cy.get(".modal-div").should("exist");
		cy.get(".crew-form").should("exist");
		cy.get(".input-name").should("exist").type(createdCrew.name);
		cy.get(".input-crewmans").should("exist").type(createdCrew.crewmans);
		cy.get(".button-crew-form").should("exist").click();
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".crew-data-div", createdCrew.name).click();
		cy.get(".modal-div").should("exist").contains(".crew-data-div", createdCrew.name);
	});

	it("Should edit a crew", () => {
		cy.get("#crew-card").should("exist").click();
		cy.url().should("include", '/crew');
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".crew-data-div", createdCrew.name).parent().within(() => {
			cy.get(".edit-button").should("exist").click();
		});
		cy.get(".crew-form").should("exist");
		cy.get(".input-name").should("exist").clear().type(updatedCrew.name);
		cy.get(".input-crewmans").should("exist").clear().type(updatedCrew.crewmans);
		cy.get(".button-crew-form").should("exist").click();
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".crew-data-div", updatedCrew.name).click();
		cy.get(".modal-div").should("exist").contains(".crew-data-div", updatedCrew.name);
	});

	it("Should delete a crew", () => {
		cy.get("#crew-card").should("exist").click();
		cy.url().should("include", '/crew');
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".crew-data-div", updatedCrew.name).parent().parent().within(() => {
			cy.get(".delete-button").should("exist").click();
		});
		cy.get(".div-data-list").should("not.contain", updatedCrew.name);
	});
})