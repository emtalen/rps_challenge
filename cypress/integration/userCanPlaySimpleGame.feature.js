describe("User can navigate trough the page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#simplegame-tab").click();
  });

  it("and it displays header", () => {
    cy.get("#simplegame-header").should(
      "contain",
      "Play to score for every win!"
    );
  });

  it("user can see three buttons", () => {
    cy.get("#rock").should("contain", "Rock");
    cy.get("#paper").shoudl("contain", "Paper");
    cy.get("#scissors").should("contain", "Scissors");
  });
});
