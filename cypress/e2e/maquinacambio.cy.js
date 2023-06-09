describe("Maquina cambio", () => {
  it("Muestra el cambio al ingresar monto y efectivo", () => {
    cy.visit("/");
    cy.get("#idmonto").type(10);
    cy.get("#idefectivo").type(15);
    cy.get("#cambiobotton").click();
    cy.get("#resultado-div").should("contain", "5");
  });
  it("Si los campos estan vacios se devuelve un mensaje de introducir campos", () => {
    cy.visit("/");
    cy.get("#cambiobotton").click();
    cy.get("#resultado-div").should("contain", "Ingrese ambos datos");
  });
  it("Si monto es mayor a efectivo muestra un mensaje", () => {
    cy.visit("/");
    cy.get("#idmonto").type(20);
    cy.get("#idefectivo").type(10);
    cy.get("#cambiobotton").click();
    cy.get("#resultado-div").should("contain", "El monto es mayor al efectivo");
  });
  
});
