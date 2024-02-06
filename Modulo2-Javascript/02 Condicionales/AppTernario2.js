/* Cree un programa que calcule propinas y las sume al total con un operador ternario
en un rango de 100 a 800 sera una propina del 15%, fuera de ese rango la propina sera del 20%
Que todo se imprima en un consumo en un string
*/

let consumo = prompt("Introduzca el consumo")*1;
let propina = `El consumo fue de $${consumo} la propina es de $${consumo >= 100 && consumo <= 800 ? consumo*0.15:consumo*0.20} y el total a pagar es de $${consumo >= 100 && consumo <= 800 ? consumo*1.15 : consumo*1.2}`;
console.log(propina);