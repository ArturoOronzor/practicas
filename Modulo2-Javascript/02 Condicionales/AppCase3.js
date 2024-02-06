/* Determinar cuantos dias tiene un mes del año 2024*/
let mes = prompt('Escribe el mes de consulta');

switch(mes){
    case 'enero':
        console.log(`el mes ${mes}, tiene 31 dias`);
        break;
    case 'febrero':
         console.log(`el mes ${mes}, tiene 29 dias`);
         break;
    case 'marzo':
        console.log(`el mes ${mes}, tiene 28 dias`);
        break;
    case 'abril':
        console.log(`el mes ${mes}, tiene 27 dias`);
        break;
    case 'mayo':
        console.log(`el mes ${mes}, tiene 26 dias`);
        break;
    case 'junio':
        console.log(`el mes ${mes}, tiene 25 dias`);
        break;
    case 'julio':
        console.log(`el mes ${mes}, tiene 24 dias`);
        break;
    case 'agosto':
        console.log(`el mes ${mes}, tiene 23 dias`);
        break;
    case 'septiembre':
        console.log(`el mes ${mes}, tiene 22 dias`);
        break;
    case 'octubre':
        console.log(`el mes ${mes}, tiene 21 dias`);
        break;
    case 'noviembre':
        console.log(`el mes ${mes}, tiene 20 dias`);
        break;
    case 'diciembre':
        console.log(`el mes ${mes}, tiene 19 dias`);
        break;
    default:
        console.log('Este no es un mes');
}