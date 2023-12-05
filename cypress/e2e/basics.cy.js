/// Mocha (is a very famous test framework that Cypress used by default)

describe("Login feature page", () => {
  before(() => {
    cy.log("Run the server locally");
  });

  after(() => {
    cy.log("kill the server");
  });

  beforeEach(() => {
    cy.log("navigate to login page");
  });

  //hocks
  //before will run 1 time
  //beforeeach will run 10 times
  //after will run 1 time
  //aftereach 10
  it("should visit the login page correctly", function () {
    cy.log("Website should have the correct URL");
  });

  it("should visit the login page correctly", function () {
    cy.log("fill the username and the password and login");
    cy.log("should navigate the login page");
  });
});
