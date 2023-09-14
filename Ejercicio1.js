// Map para representar las cuentas vinculadas al documento de identidad
const cuentas = new Map();

// Agregar cuentas al Map (documento como clave y objeto de cuenta como valor)
cuentas.set("123456789", { pin: "1234", saldo: 1000000 });
cuentas.set("987654321", { pin: "4321", saldo: 500000 });

function validarPIN(documento, pin) {
  // Función para validar el PIN del cliente
  const cuenta = cuentas.get(documento);

  if (cuenta && cuenta.pin === pin) {
    return true;
  }
  return false;
}

function consultarSaldo(documento) {
  // Función para consultar el saldo de una cuenta
  const cuenta = cuentas.get(documento);

  if (cuenta) {
    return cuenta.saldo;
  }
  return "Cuenta no encontrada";
}

function realizarRetiro(documento, monto) {
  // Función para realizar un retiro de efectivo
  const cuenta = cuentas.get(documento);

  if (cuenta && monto % 50000 === 0) {
    if (cuenta.saldo >= monto) {
      cuenta.saldo -= monto;
      return `Retiro exitoso, puede tomar $${monto / 100} de la bandeja principal`;
    } else {
      return "Saldo insuficiente";
    }
  } else {
    return "Monto no válido";
  }
}

function realizarDeposito(documento, monto, tipo) {
  // Función para realizar un depósito (efectivo o cheque)
  const cuenta = cuentas.get(documento);

  if (cuenta) {
    if (tipo === "efectivo") {
      cuenta.saldo += monto;
    } else if (tipo === "cheque") {
      // Puedes implementar la lógica para el depósito de cheques aquí
      // procesarCheque(documento, monto);
    } else {
      return "Tipo de depósito no válido";
    }
    return `Depósito exitoso de $${monto / 100} (${tipo})`;
  } else {
    return "Cuenta no encontrada";
  }
}

function realizarTransferencia(origen, destino, monto) {
  // Función para realizar una transferencia entre cuentas
  const cuentaOrigen = cuentas.get(origen);
  const cuentaDestino = cuentas.get(destino);

  if (cuentaOrigen && cuentaDestino) {
    if (cuentaOrigen.saldo >= monto) {
      cuentaOrigen.saldo -= monto;
      cuentaDestino.saldo += monto;
      return `Transferencia exitosa de $${monto / 100} de ${origen} a ${destino}`;
    } else {
      return "Saldo insuficiente";
    }
  } else {
    return "Cuentas no encontradas";
  }
}

// Ejemplo de uso:
const documento = "123456789";
const pin = "1234";

if (validarPIN(documento, pin)) {
  console.log(consultarSaldo(documento));
  console.log(realizarRetiro(documento, 200000));
  console.log(realizarDeposito(documento, 300000, "efectivo"));
  console.log(realizarTransferencia(documento, "987654321", 100000));
} else {
  console.log("PIN incorrecto. Intentos agotados.");
}
