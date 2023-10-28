import * as readlineSync from 'readline-sync';

function calcularMulta(): number {
    // Preguntar al usuario si es una devolución o una pérdida
    const esDevolucion: string = readlineSync.question('¿Es una devolución o una pérdida? (d/p) ');

    if (esDevolucion === 'd') {
        // Preguntar al usuario la cantidad de días de retraso
        const diasRetraso: number = parseInt(readlineSync.question('¿Cuántos días de retraso hay? '));

        // Preguntar al usuario la cantidad de revistas prestadas
        const numRevistas: number = parseInt(readlineSync.question('¿Cuántas revistas se prestaron? '));

        // Preguntar al usuario la cantidad de libros prestados
        const numLibros: number = parseInt(readlineSync.question('¿Cuántos libros se prestaron? '));

        // Calcular el monto total de la multa sumando los costos por retraso en revistas y libros
        const multaRevistas: number = diasRetraso * 500;
        const multaLibros: number = diasRetraso * 600;
        const multaTotal: number = multaRevistas * numRevistas + multaLibros * numLibros;

        // Devolver el monto total de la multa
        return multaTotal;
    } else if (esDevolucion === 'p') {
        // Preguntar al usuario la cantidad de libros/revistas perdidos
        const numPerdidos: number = parseInt(readlineSync.question('¿Cuántos libros/revistas se perdieron? '));

        // Calcular el monto total de la multa multiplicando la cantidad de libros/revistas perdidos por el costo por ejemplar perdido
        const multaTotal: number = numPerdidos * 10000;

        // Devolver el monto total de la multa
        return multaTotal;
    } else {
        console.log('Entrada inválida.');
        // Devolver -1 para indicar un error
        return -1;
    }
}

// Llamamos a la función para calcular la multa
const montoMulta: number = calcularMulta();

// Imprimimos el resultado en el Output del Visual Studio Code
console.log(`El monto total de la multa es de $${montoMulta}.`);
