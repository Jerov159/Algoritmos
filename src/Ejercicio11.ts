function calcularPago(): void {
    const costoServicio: number = 500;
    let montoTotal: number = 0;

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('¿Tipo de pago (moneda/billete)? ', (tipoPago) => {
        tipoPago = tipoPago.toLowerCase();

        if (tipoPago === 'moneda') {
            rl.question('Ingrese el valor de la moneda (500/1000): ', (valorMoneda) => {
                valorMoneda = parseInt(valorMoneda);
                if (valorMoneda === 500 || valorMoneda === 1000) {
                    montoTotal += valorMoneda;
                    verificarPago();
                } else {
                    process.stdout.write('Valor de moneda no válido.\n');
                    rl.close();
                }
            });
        } else if (tipoPago === 'billete') {
            rl.question('Ingrese el valor del billete (2000/5000): ', (valorBillete) => {
                valorBillete = parseInt(valorBillete);
                if (valorBillete === 2000 || valorBillete === 5000) {
                    montoTotal += valorBillete;
                    verificarPago();
                } else {
                    process.stdout.write('Valor de billete no válido.\n');
                    rl.close();
                }
            });
        } else {
            process.stdout.write('Tipo de pago no válido.\n');
            rl.close();
        }

        function verificarPago(): void {
            if (montoTotal >= costoServicio) {
                if (montoTotal > costoServicio) {
                    const cambio: number = montoTotal - costoServicio;
                    process.stdout.write(`¡Gracias por su pago! Su cambio es de $${cambio}.\n`);
                } else {
                    process.stdout.write('¡Gracias por su pago! No es necesario devolver cambio.\n');
                }
                rl.close();
            } else {
                process.stdout.write(`Falta dinero para completar el pago. Monto actual: $${montoTotal}.\n`);
                rl.close();
            }
        }
    });
}

// Llamamos a la función para iniciar el programa
calcularPago();


