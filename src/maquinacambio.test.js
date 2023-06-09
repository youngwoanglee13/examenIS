import MaquinaCambio from "./maquinacambio.js";

describe("Maquina cambio", () => {
  it("deberia devolver cambio", () => {
    const maquinaCambio = new MaquinaCambio();
    expect(maquinaCambio.calcularMonedas(5)).toEqual("5 ");
  });
  it("deberia devolver cambio monedas enteras 1 2 5", () => {
    const maquinaCambio = new MaquinaCambio();
    expect(maquinaCambio.calcularMonedas(19)).toEqual("5 5 5 2 2 ");
  });
  it("deberia devolver cambio monedas enteras y centavos", () => {
    const maquinaCambio = new MaquinaCambio();
    expect(maquinaCambio.calcularMonedas(3.5)).toEqual("2 1 0.5 ");
  });
});
