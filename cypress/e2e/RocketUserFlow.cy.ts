import { v4 as uuidv4 } from 'uuid';
import '../support/e2e';

const createdRocket = {
	name: uuidv4()
};

const updatedRocket = {
	name: uuidv4()
};

describe("Rocket user flow", () => {

	beforeEach(() => {
		cy.visit("/");
	});

	it("Should create a rocket", () => {
		cy.get("#rocket-card").should("exist").click();
		cy.url().should("include", '/rocket');
		cy.get(".modal-div").should("not.exist");
		cy.get(".add-rocket-btn").should("exist").click();
		cy.get(".modal-div").should("exist");
		cy.get(".rocket-form").should("exist");
		cy.get(".input-name").should("exist").type(createdRocket.name);
		cy.get(".button-rocket-form").should("exist").click();
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".rocket-data-div", createdRocket.name).click();
		cy.get(".modal-div").should("exist").contains(".rocket-data-div", createdRocket.name);

	});

	it("Should edit a rocket", () => {
		cy.get("#rocket-card").should("exist").click();
		cy.url().should("include", '/rocket');
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".rocket-data-div", createdRocket.name).parent().within(() => {
			cy.get(".edit-button").should("exist").click();
		});
		cy.get(".rocket-form").should("exist");
		cy.get(".input-name").should("exist").clear().type(updatedRocket.name);
		cy.get(".button-rocket-form").should("exist").click();
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".rocket-data-div", updatedRocket.name).click();
		cy.get(".modal-div").should("exist").contains(".rocket-data-div", updatedRocket.name);
	});


	it("Should delete a rocket", () => {
		cy.get("#rocket-card").should("exist").click();
		cy.url().should("include", '/rocket');
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".rocket-data-div", updatedRocket.name).parent().parent().within(() => {
			cy.get(".delete-button").should("exist").click();
		});
		cy.get(".div-data-list").should("not.contain", updatedRocket.name);
	});
})