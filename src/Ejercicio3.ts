function calcularComision(): void {
    const readline = require('readline-sync');
  
    // Mostrar mensaje de bienvenida
    console.log('Bienvenido al programa de cálculo de comisiones.');
  
    // Solicitar el costo del apartamento
    const costoApartamento = parseFloat(readline.question('Ingrese el costo del apartamento: '));
  
    // Solicitar el tipo de inmueble
    console.log('Ingrese el tipo de inmueble:');
    console.log('1. Usado');
    console.log('2. Nuevo');
    const tipoInmueble = parseInt(readline.question('Opción: '));
  
    // Validar la opción ingresada
    if (tipoInmueble !== 1 && tipoInmueble !== 2) {
      console.log('Opción inválida. Por favor ingrese 1 o 2.');
      return;
    }
  
    // Calcular la comisión de la inmobiliaria
    let comisionInmobiliaria: number;
    if (tipoInmueble === 1) {
      comisionInmobiliaria = costoApartamento * 0.1;
    } else {
      comisionInmobiliaria = costoApartamento * 0.2;
    }
  
    // Calcular los valores al cliente y a la inmobiliaria
    const valorPropietario = costoApartamento - comisionInmobiliaria;
    const valorInmobiliaria = comisionInmobiliaria;
  
    // Mostrar los resultados
    console.log(`Valor que recibe el propietario: $${valorPropietario}`);
    console.log(`Valor recibido por la inmobiliaria: $${valorInmobiliaria}`);
    
    // Mostrar mensaje de despedida
    console.log('Gracias por usar el programa de cálculo de comisiones.');
  }
  
  calcularComision();