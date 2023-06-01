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
    let monedas = [5, 2, 1];
    let cambio = "";
    let i = 0;
    while (efectivo > 0) {
      if (efectivo >= monedas[i]) {
        cambio+= monedas[i] + " ";
        efectivo -= monedas[i];
      } else {
        i++;
      }
    }
    return cambio;
  }
}
export default MaquinaCambio;


