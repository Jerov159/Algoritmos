function simuladorVotacion(): string {
    let votosAnaMariaSuarez: number = 0;
    let votosDiegoAcero: number = 0;

    // Simulamos los votos de 10 votantes
    let votos: number[] = [1, 1, 2, 1, 2, 1, 2, 2, 1, 2];

    for (let i = 0; i < votos.length; i++) {
        let opcionVoto: number = votos[i];

        if (opcionVoto === 1) {
            votosAnaMariaSuarez++;
        } else if (opcionVoto === 2) {
            votosDiegoAcero++;
        } else {
            return "Voto no válido.";
        }
    }

    if (votosAnaMariaSuarez > votosDiegoAcero) {
        return "El ganador es Ana Maria Suarez. El perdedor es Diego Acero.";
    } else if (votosDiegoAcero > votosAnaMariaSuarez) {
        return "El ganador es Diego Acero. El perdedor es Ana Maria Suarez.";
    } else {
        return "La votación terminó en empate.";
    }
}

// Llamamos a la función para iniciar el programa y obtenemos el resultado
let resultado: string = simuladorVotacion();

// Mostramos los resultados en la consola
console.log(resultado);

