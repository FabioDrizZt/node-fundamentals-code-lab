function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 11); // Genera un número aleatorio entre 0 y 10
            resolve(randomNumber); // Resuelve la promesa con el número aleatorio generado
        }, 3000); // Simula un proceso largo que demora 3 segundos
    });
}


// Ejemplo de uso:
getRandomNumber()
    .then(number => {
        console.log('Número aleatorio:', number);
    })
    .catch(error => {
        console.error('Ocurrió un error:', error);
    });

module.exports = getRandomNumber;