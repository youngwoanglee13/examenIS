function calcularCambio(monto, efectivo) {
  if (isNaN(monto) || isNaN(efectivo)) {
    console.log("calcularCambio2");
    return "Ingrese ambos datos";	
  }
  return efectivo-monto;
}

export default calcularCambio;
