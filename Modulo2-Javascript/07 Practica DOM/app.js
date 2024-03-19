let Numeral = document.getElementById('numeral');


function incremento(){
    let cuenta = Numeral.innerText*1;
    if(cuenta <50 ){
        cuenta = cuenta+1;
    }
    Numeral.innerText=cuenta;
}

function decremento(){
    let cuenta = Numeral.innerText*1;
    if(cuenta > 0){
        cuenta = cuenta-1;
    }
    Numeral.innerText=cuenta;
}