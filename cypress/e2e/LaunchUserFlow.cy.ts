import { v4 as uuidv4 } from 'uuid';
import '../support/e2e';

const createdLaunch = {
	launchCode: uuidv4(),
	date: "2023-06-02",
	success: "true",
	rocketId: "16",
	crewId: "7"
};

const updatedLaunch = {
	launchCode: uuidv4(),
	date: "2023-06-01",
	success: "false",
	rocketId: "16",
	crewId: "7"
};

describe("Launch user flow", () => {

	beforeEach(() => {
		cy.visit("/");
	});

	it("Should create a launch", () => {
		cy.get("#launch-card").should("exist").click();
		cy.url().should("include", '/launch');
		cy.get(".modal-div").should("not.exist");
		cy.get(".add-launch-btn").should("exist").click();
		cy.get(".modal-div").should("exist");
		cy.get(".launch-form").should("exist");
		cy.get(".input-launch_code").should("exist").clear().type(createdLaunch.launchCode);
		cy.get(".input-date").should("exist").clear().type(createdLaunch.date);
		cy.get(".input-success").should("exist").select(createdLaunch.success);
		cy.get(".input-rocket_id").should("exist").clear().type(createdLaunch.rocketId);
		cy.get(".input-crew_id").should("exist").clear().type(createdLaunch.crewId);
		cy.get(".button-launch-form").should("exist").click();
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".launch-data-div", createdLaunch.launchCode).click();
		cy.get(".modal-div").should("exist").contains(".launch-data-div", createdLaunch.launchCode);

	});

	it("Should edit a launch", () => {
		cy.get("#launch-card").should("exist").click();
		cy.url().should("include", '/launch');
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".launch-data-div", createdLaunch.launchCode).parent().within(() => {
			cy.get(".edit-button").should("exist").click();
		});
		cy.get(".launch-form").should("exist");
		cy.get(".input-launch_code").should("exist").clear().type(updatedLaunch.launchCode);
		cy.get(".input-date").should("exist").clear().type(updatedLaunch.date);
		cy.get(".input-success").should("exist").select(updatedLaunch.success);
		cy.get(".input-rocket_id").should("exist").clear().type(updatedLaunch.rocketId);
		cy.get(".input-crew_id").should("exist").clear().type(updatedLaunch.crewId);
		cy.get(".button-launch-form").should("exist").click();
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".launch-data-div", updatedLaunch.launchCode).click();
		cy.get(".modal-div").should("exist").contains(".launch-data-div", updatedLaunch.launchCode);
	});


	it("Should delete a launch", () => {
		cy.get("#launch-card").should("exist").click();
		cy.url().should("include", '/launch');
		cy.get(".modal-div").should("not.exist");
		cy.get(".div-data-list").contains(".launch-data-div", updatedLaunch.launchCode).parent().parent().within(() => {
			cy.get(".delete-button").should("exist").click();
		});
		cy.get(".div-data-list").should("not.contain", updatedLaunch.launchCode);
	});
})