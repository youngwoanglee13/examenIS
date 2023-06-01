function calcularCambio(monto, efectivo) {
  if (isNaN(monto) || isNaN(efectivo)) {
    return "Ingrese ambos datos";	
  }
  if (monto > efectivo) {
    return "El monto es mayor al efectivo";
  }
  return efectivo-monto;
}

export default calcularCambio;
