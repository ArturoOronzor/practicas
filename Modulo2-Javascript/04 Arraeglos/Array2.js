// funcion que calcula edades

function calculateAge(birthYear){
    return 2023-birthYear;
}

const birthYear = [1993, 1538, 1954, 2005];
let edad = calculateAge(birthYear[0]);
let edades = [calculateAge(birthYear[0]), calculateAge(birthYear[1]), calculateAge(birthYear[2]), calculateAge(birthYear[3])];
console.log(edad);
console.log(edades);
