import calcularCambio from "./maquinacambio";
const montoInput = document.querySelector("#idmonto");
const efectivoInput = document.querySelector("#idefectivo");
const form = document.querySelector("#cambio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const monto = Number.parseInt(montoInput.value);
  const efectivo = Number.parseInt(efectivoInput.value);

  div.innerHTML = "<p>" + calcularCambio(monto, efectivo) + "</p>";
});
