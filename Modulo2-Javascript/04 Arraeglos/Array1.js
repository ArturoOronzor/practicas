/*
Calculadora de propinas.
Cuando la cuenta fue de entre 100 y 800, la propina sera del 15%
Si la cuenta es diferente a ese rango la propina sera del 20%

1. Escribe una funcion que tome como argumento el valor de la cuente y regrese la correspondiente propina
2. Crea un arreglo con cuentas que tenga los siguientes montos:
    $75 $280 $1350
3. Crea un arreglo tips que contenga las propinas para cada una de las cuentas anteriores, usando la funcion creada
4. Bonus. Crea un arreglo total que contenga los totales a pagar (cuenta + propina).
5. Imprime en consola bills, tips y total.
*/
const montos=[75,280,1350];

function propina(argumento1){
    let prop=[];
    let total=[];
    let matrix=[];
    
    prop[0] = argumento1[0] >= 100 && argumento1[0] <= 800 ? argumento1[0]*0.15 : argumento1[0]*0.20;
    prop[1] = argumento1[1] >= 100 && argumento1[1] <= 800 ? argumento1[1]*0.15 : argumento1[1]*0.20;
    prop[2] = argumento1[2] >= 100 && argumento1[2] <= 800 ? argumento1[2]*0.15 : argumento1[2]*0.20;

    total[0] = argumento1[0]+prop[0];
    total[1] = argumento1[1]+prop[1];
    total[2] = argumento1[2]+prop[2];

    matrix[0] = argumento1[0];
    matrix[1] = prop[0];
    matrix[2] = total[0];
    matrix[3] = argumento1[1];
    matrix[4] = prop[1];
    matrix[5] = total[1];
    matrix[6] = argumento1[2];
    matrix[7] = prop[2];
    matrix[8] = total[2];

    return matrix;
}

console.log(propina(montos));

// Prueba Metodos de arreglo.

let frutas = ['manzana','pera','uva','aguacate'];
let vocales1 = ['a','e','i'];
let vocales2 = ['o', 'u'];
let vocales3 = [1,2];

console.log(frutas);
console.log(frutas.lenght);
console.log(frutas.indexOf('uva'));
console.log(frutas.indexOf('limon'));
console.log(frutas.includes('aguacate'));
console.log(frutas.includes('limon'));
frutas.push('papaya');
console.log(frutas);
frutas.unshift("mango");
console.log(frutas);
frutas.pop();
console.log(frutas);
frutas.shift();
console.log(frutas);

newFrutas=frutas.slice(0,3);
console.log(newFrutas);

frutas.splice(2,2,'sandia','naranja');
console.log(frutas);

let union = vocales1.concat(vocales2, vocales3);
console.log(union);