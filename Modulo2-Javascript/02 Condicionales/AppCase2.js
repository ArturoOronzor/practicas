// Crear una calculadora de suma y resta
// pedir a l usuario que escoja sumar o restar (+ o -)
// Pedir al usuario dos numeros
// Dependiendo del operador que se haya elegido imprimir en la consola el resultado

let operacion = prompt('Escoje + o -');
switch(operacion){
    case '+':{
        const numero1 = prompt('Dame el primer numero')*1;
        const numero2 = prompt('Dame el segundo numero')*1;
        const suma = numero1+numero2;
        console.log('la suma es ' + suma);
        break;
    }
    case '-':{
        const numero1 = prompt('Dame el primer numero')*1;
        const numero2 = prompt('Dame el segundo numero')*1;
        const resta = numero1-numero2;
        console.log('la resta es ' + resta);
        break;
    }
    default:
        console.log('Ese no es una opcion');
}