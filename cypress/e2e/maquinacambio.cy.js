describe("Maquina cambio", () => {
  it("Muestra el cambio al ingresar monto y efectivo", () => {
    cy.visit("/");
    cy.get("#idmonto").type(10);
    cy.get("#idefectivo").type(15);
    cy.get("#cambiobotton").click();
    cy.get("#resultado-div").should("contain", "5");
  });
});
