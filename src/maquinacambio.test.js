import MaquinaCambio from "./maquinacambio.js";

describe("Maquina cambio", () => {
  it("deberia sumar dos numeros", () => {
    const maquinaCambio = new MaquinaCambio();
    expect(maquinaCambio.calcularMonedas(5)).toEqual(5);
  });
});
