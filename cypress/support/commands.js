// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "@testing-library/cypress/add-commands";
import "cypress-wait-until";

export function enterValue(locator, value) {
  cy.get(locator).should("be.visible").type(value);
  cy.get(".ph-send-button").click();
}

export function selectOption(locator, id, text) {
  cy.get(locator).should("be.visible");
  cy.get(id).contains(text).click();
}

export function checkMessage(locator, arrayMess) {
  arrayMess.forEach((mess) =>
    cy.get(locator).contains(mess).should("be.visible")
  );
}
export function checkSingleMess(mess) {
  cy.fixture("locator").then(function (locator) {
    this.locator = locator;
    cy.get(locator.locatorMess).contains(mess).should("exist");
  });
}
