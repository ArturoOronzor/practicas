const N1=prompt('ESCRIBE PRIMER NUMERO')*1;
const N2=prompt('ESCRIBE SEGUNDO NUMERO')*1;
let Eval = N1 > N2;

console.log('el primer numero es '+N1);
console.log('el segundo numero es '+N2);
console.log(Eval);

if(Eval){
    console.log(`El numero ${N1}, es mayor`);
} else {
    console.log(`El numeral ${N2}, es mayor`);
}