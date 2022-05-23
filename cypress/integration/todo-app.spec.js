/// <reference types="cypress" />

describe("Todo App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should have input field", () => {
    cy.get("#new-todo").should("exist");
  });

  it("should add new elements", () => {
    cy.get("#new-todo").type("learn cypress");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 1);
  });

  it("should display done todos", () => {
    cy.get("#new-todo").type("learn cypress");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 1);
    cy.get("#new-todo").type("learn Vue.js");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 2);
    cy.get("#todo-list").get("li input[type=checkbox]").first().check();
    cy.get("#filter-done").click();
    cy.get("#todo-list").get("li").first().should("be.visible");
    cy.get("#todo-list").get("li").last().should("have.attr", "hidden");
  });

  it("should display open todos", () => {
    cy.get("#new-todo").type("learn cypress");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 1);
    cy.get("#new-todo").type("learn Vue.js");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 2);
    cy.get("#todo-list").get("li input[type=checkbox]").first().check();
    cy.get("#filter-open").click();
    cy.get("#todo-list").get("li").first().should("have.attr", "hidden");
    cy.get("#todo-list").get("li").last().should("be.visible");
  });

  it("should delete done todos", () => {
    cy.get("#new-todo").type("learn cypress");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 1);
    cy.get("#new-todo").type("learn Vue.js");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 2);
    cy.get("#todo-list").get("li input[type=checkbox]").first().check();
    cy.get("#delete-todos").click();
    cy.get("#todo-list").get("li").should("have.length", 1);
  });

  it("should duplicate check", () => {
    cy.get("#new-todo").type("learn cypress");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 1);
    cy.get("#new-todo").type("learn Vue.js");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 2);
    cy.get("#new-todo").type("learn Cypress");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 2);
  });
});
