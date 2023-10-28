function mostrarInformacionDeReferencia(marca: string, referencia: string): string {
    let informacion: string = '';

    if (marca === 'Chevrolet') {
        if (referencia === 'Captiva') {
            informacion = 'Chevrolet Captiva: Información detallada de la Captiva.';
        } else if (referencia === 'Tracker') {
            informacion = 'Chevrolet Tracker: Información detallada de la Tracker.';
        }
    } else if (marca === 'Mazda') {
        if (referencia === 'Modelo A') {
            informacion = 'Mazda Modelo A: Información detallada del Modelo A.';
        } else if (referencia === 'Modelo B') {
            informacion = 'Mazda Modelo B: Información detallada del Modelo B.';
        }
    } else if (marca === 'Renault') {
        if (referencia === 'Referencia X') {
            informacion = 'Renault Referencia X: Información detallada de la Referencia X.';
        } else if (referencia === 'Referencia Y') {
            informacion = 'Renault Referencia Y: Información detallada de la Referencia Y.';
        }
    } else {
        informacion = 'Marca de carro no válida.';
    }

    return informacion;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la marca de carro (Chevrolet, Mazda o Renault): ', (marca) => {
    marca = marca.trim();
    rl.question('Ingrese la referencia del carro: ', (referencia) => {
        referencia = referencia.trim();
        const informacionReferencia: string = mostrarInformacionDeReferencia(marca, referencia);
        console.log(informacionReferencia);
        rl.close();
    });
});
