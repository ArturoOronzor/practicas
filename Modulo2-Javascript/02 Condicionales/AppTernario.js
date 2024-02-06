// Uso del IF-ELSE TERNARIO - operador ternario
const age = 18;
let drinkTernario =`Me gusta tomar ${age >= 18 ?'vino':'agua'}`;
console.log(drinkTernario);

// Programa de muestreo de un sensor de temperatura que muestra valores normales de 0° hasta 50°C,
// Si la lectura esta negativa, el sensor dira Falla en el sensor

let temp = prompt('Lectura de temperatura')*1;

/* Otra manera de hacerlo:
let muestreo = `La temperatura es ${temp >=0 ? temp : 'Error en sensor'} °C`;
console.log(muestreo);
*/

//Otra manera de hacerlo:
//Es una declaracion con IF sencillo

const arreglo = temp >= 0 ? console.log('La temperatura es de '+temp+' °C') : console.log('Error en el sensor');
