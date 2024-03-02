import chalk from "chalk";

// Definir la función add
const add = (num1, num2) => {
    return num1 + num2;
};

// Exportar la función add
export { add };

// Definir la función showResult
const showResult = (num1, num2) => {
    // Calcular el resultado de la suma utilizando la función add
    const result = add(num1, num2);

    // Devolver el resultado de color verde si es mayor o igual a 5, de lo contrario, devolverlo de color rojo
    if (result >= 5) {
        return chalk.green(result);
    } else {
        return chalk.red(result);
    }
};

// Exportar la función showResult
export { showResult };