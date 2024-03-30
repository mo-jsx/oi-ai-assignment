describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.get('[data-cy="create-chart-container"]').click();
  });
  it("should create a chart", () => {});

  it("should update chart title", () => {
    cy.get('[data-cy="chart-title"]').click();
    cy.get('[data-cy="chart-title-input"]').clear();
    cy.get('[data-cy="chart-title-input"]').type("Title 123{enter}");
    cy.get('[data-cy="chart-edit-title"]').click();
    cy.get('[data-cy="chart-title-input"]').clear();
    cy.get('[data-cy="chart-title-input"]').type("Title 123456");
    cy.get(".container--solid").click();
  });

  it("should update chart type", () => {
    cy.get('[data-cy="chart-select-newType"]').select("Line");
    cy.get('[data-cy="chart-select-newType"]').select("Scatter");
  });

  it("should update chart interval", () => {
    cy.get('[data-cy="chart-select-newInterval"]').select("preserveEnd");
    cy.get('[data-cy="chart-select-newInterval"]').select("preserveStartEnd");
    cy.get('[data-cy="chart-select-newInterval"]').select(
      "equidistantPreserveStart"
    );
  });

  it("should display/hide grid", () => {
    cy.get("#checkbox").check().should("be.checked");
    cy.get("#checkbox").uncheck().should("not.be.checked");
  });

  it("should update X and Y axis labels", () => {
    cy.get(
      ".recharts-yAxis > .recharts-cartesian-axis-ticks > :nth-child(3) > .recharts-text > tspan"
    ).click();
    cy.get(".border-2").clear();
    cy.get(".border-2").type("Y Label{enter}");
    cy.get(".recharts-xAxis > .recharts-label > tspan").click();
    cy.get(".border-2").clear();
    cy.get(".border-2").type("X Label{enter}");
    cy.get(
      ".recharts-yAxis > .recharts-cartesian-axis-ticks > :nth-child(3) > .recharts-text > tspan"
    ).click();
    cy.get(".border-2").clear();
    cy.get(".border-2").type("Y Label 2{enter}");
    cy.get(":nth-child(6) > .recharts-text > tspan").click();
    cy.get(".border-2").clear();
    cy.get(".border-2").type("X Label 2");
    cy.get(":nth-child(1) > .flex").click();
  });

  it("should change chart color", () => {
    cy.get("#color").click();
    cy.get("#color").click();
  });

  it("should change chart style", () => {
    cy.get("#chart-bar").select("Line");
    cy.get(":nth-child(2) > #chart-solid").select("Dashed");
    cy.get(":nth-child(2) > #chart-Dashed").select("Dotted");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("should delete chart container", function () {
    cy.get('[data-cy="delete-chart"]').click();
  });
});
