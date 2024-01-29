/* En la consola del navegador crea un pequeño programa que le pida al usuario
que ingrese un numero, multiplica ese numero por 2 y muestra en salida
el resultado de esa operacion*/
var valor = prompt('Escribe un valor para multiplicarlo por 2')
document.write("El resultado de la multiplicacion por 2 es ")
document.write(valor*2)

/* En la consola del navegador escribe un programa que reciba 2 numero e
imprime en pantalla la resta de ambos */
var resta1 = prompt('Escribe el primer numero') * 1;
var resta2 = prompt('Escribe el segundo numero') * 1;
document.write("El resultado de la resta es ")
document.write(resta1-resta2)

/* Escribe un programa que calcule el area de un circulo con un rado = 5.3
imprime el area en la pantalla (Formula pi*r^2)*/

alert('A continuacion se detalla el area de un circulo con radio = 5.3')
var radio = 5.3;
var area = 3.1416*radio*radio;
document.write("El area del circulo es ")
document.write(area)


/*Escribe un programa que calcule el area de un rombo, sabiendo que p=5 D=8 y
d=6 (formula D*d/2)*/
alert('A continucacion se detalla el area de un rombo')
var D=8;
var d=6;
var arearombo=D*d/2;
document.write('el area del rombo es ')
document.write(arearombo)