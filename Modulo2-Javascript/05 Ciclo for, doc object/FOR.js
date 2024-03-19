// Ejemplo de contador && Acumulador en Ciclo FOR

var contador = 0;
for( var index = 1; index <= 50; index ++){             // Este es el acumulador
    if(index % 5 == 0){
        contador = contador + 1;                        // Este es el contador
        console.log(`${index} es multiplo de 5`);
    }
}

console.log(`De 0 a 50 existen ${contador} multiplos de 5`);


// Otro ejemplo
let frutas = ['papaya', 'limon', 'sandia', 'manzana', 'uva','mango','picaya'];

/*for(var i=0 ; i<=5 ; i++){
    console.log(frutas[i])
}*/

console.log(frutas.length);

// otro ejemplo
//imprimir los elementos que tengan mas de 5 caracteres

for(let i=0;i<=frutas.length;i++){
    if(frutas[i].length>5){
        console.log(frutas[i]);
        console.log(frutas[i].length);
    }
}