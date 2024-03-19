//Captura por ID
/*const mainTitle = document.getElementById('mainTitle');
console.log(mainTitle.innerHTML);*/

//Captura por nombre de la etiqueta
const parrafo = document.getElementsByTagName('p');
console.log(parrafo);

function saludo(nombre){
    console.log(`Hola ${nombre}`);
}

//Query Selector
// Por id
// const mainTitle = document.querySelector('#mainTitle');
// Por clase
//const txt = document.querySelector('.txt');
//Por tag (etiqueta)
//const parrafo = querySelector('p');
//
//
//Query selector All
// Devuelve una node list, query selector solo devuelve el primer elementos
// que encuentre
//const parrafo = document.querySelectorAll('#mainTitle') | ('.txt') | ('p')

const mainTitle = document.querySelector('#mainTitle');
function cambioContent(){
    mainTitle.innerText = "Titulo cambiado por boton 2";
    mainTitle.style.color = 'Red';
    parrafo[0].style.color='blue';

}