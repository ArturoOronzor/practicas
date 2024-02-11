 let mejorAmigo = prompt('Escribe el nombre de tu mejor amigo');
 
 const Arturo = {
    nombre: 'Arturo',
    apellido: 'Luna',
    edad: 2024-1991,
    ocupacion: 'BMS-dev',
    amigos: [mejorAmigo, 'Oliver','Diana','Omar', 'Morty', 'Sara']
 };

 console.log(Arturo.amigos[4], ' hola');
 console.log(Arturo['amigos'][0]);
 console.log(Arturo['edad']);


 let interes = prompt('esribe que quieres saber de Arturo');

if(Arturo[interes] != 'undefined'){
    console.log(`${interes} : ${Arturo[interes]}`);
} else{
    console.log('No existe esa informacion');
}

// Agregando items a un objeto

Arturo.instagram = `@${Arturo['amigos'][2]}${Arturo['apellido']}`;

console.log(Arturo);

// reto.

console.log(`${Arturo['nombre']} tiene estos amigos: ${Arturo['amigos']}, pero su mejor amigo es ${Arturo['amigos'][0]}`);
