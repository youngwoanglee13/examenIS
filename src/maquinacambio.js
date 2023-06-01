class MaquinaCambio {
   calcularCambio(monto, efectivo) {
    if (isNaN(monto) || isNaN(efectivo)) {
      return "Ingrese ambos datos";	
    }
    if (monto > efectivo) {
      return "El monto es mayor al efectivo";
    }
    return efectivo-monto;
  }

 calcularMonedas(efectivo) {
 
  return efectivo;
}
}
export default MaquinaCambio;


