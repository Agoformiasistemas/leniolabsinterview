/// Mocha (is a very famous test framework that Cypress used by default)

describe("Login feature page", () => {
  // before(() => {
  //   cy.log("Run the server locally");
  // });

  // after(() => {
  //   cy.log("kill the server");
  // });

  // beforeEach(() => {
  //   cy.log("navigate to login page");
  // });

  //hocks
  //before will run 1 time
  //beforeeach will run 10 times
  //after will run 1 time
  //aftereach 10
  it("Example test case for Leniolabs interview", () => {
    cy.visit("https://demo.applitools.com/");
    cy.get("#username").type("test");
    cy.get("#password").type("test");
    cy.get("#log-in").click();
    cy.get(".logged-user-name").should(
      "have.text",
      "\n                Jack Gomez\n              "
    );
  });

  // it("should visit the login page correctly", function () {
  //   cy.log("fill the username and the password and login");
  //   cy.log("should navigate the login page");
  // });
});
