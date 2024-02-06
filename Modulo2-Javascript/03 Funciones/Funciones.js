// Programa que utiliza funciones que indique cuanto nos falta para el retiro de una persona
// Suponiendo que la edad es de 65 años

const birthYear = prompt('Introduzca su año de nacimiento')*1;

function edad(parametro1){
    return 2024 - parametro1;
}

function Jubilacion(parametro2){
    const anos=edad(parametro2);
    const retiro = 65-anos;
    if(retiro <= 0){
        return (`Tienes ${anos} y ya te retiraste`);
    } else{
        return (`Tienes ${anos} años de edad y te faltan ${retiro} años para jubilarte`);
    }
}

console.log(Jubilacion(birthYear));