import { v4 as uuidv4 } from 'uuid';
import '../support/e2e';

const createdCrewman = {
	name: uuidv4(),
	patent: "Captain"
};

const updatedCrewman = {
	name: uuidv4(),
	patent: "Crewman"
};

describe("Crewman user flow", () => {

	beforeEach(() => {
		cy.visit("/");
	});

	it("Should create a crewman", () => {
		cy.get("#crewman-card").should("exist").click();
		cy.url().should("include", '/crewman');
		cy.get(".modal-div").should("not.exist");
		cy.get(".add-crewman-btn").should("exist").click();
		cy.get(".modal-div").should("exist");
		cy.get(".crewman-form").should("exist");
		cy.get(".input-name").should("exist").type(createdCrewman.name);
		cy.get(".input-patent").should("exist").type(createdCrewman.patent);
		cy.get(".button-crewman-form").should("exist").click();
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".crewman-data-div", createdCrewman.name).click();
		cy.get(".modal-div").should("exist").contains(".crewman-data-div", createdCrewman.name);
	});

	it("Should edit a crewman", () => {
		cy.get("#crewman-card").should("exist").click();
		cy.url().should("include", '/crewman');
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".crewman-data-div", createdCrewman.name).parent().within(() => {
			cy.get(".edit-button").should("exist").click();
		});
		cy.get(".crewman-form").should("exist");
		cy.get(".input-name").should("exist").clear().type(updatedCrewman.name);
		cy.get(".input-patent").should("exist").clear().type(updatedCrewman.patent);
		cy.get(".button-crewman-form").should("exist").click();
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".crewman-data-div", updatedCrewman.name).click();
		cy.get(".modal-div").should("exist").contains(".crewman-data-div", updatedCrewman.name);
	});

	it("Should delete a crewman", () => {
		cy.get("#crewman-card").should("exist").click();
		cy.url().should("include", '/crewman');
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".crewman-data-div", updatedCrewman.name).parent().parent().within(() => {
			cy.get(".delete-button").should("exist").click();
		});
		cy.get(".div-data-list").should("not.contain", updatedCrewman.name);
	});
})