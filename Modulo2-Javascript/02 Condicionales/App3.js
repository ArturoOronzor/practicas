/* Reto 2
Tenemos dos equipos de futbol los Patriots y los Broncos
Ellos juegan 3 veces. el ganador sera aquel que tenga el promedio de puntos mas alto.

Escribe un programa que

1. Calcule el prmedio de puntos de cada equipo
2. Compare los promedios y determine quien es el ganador
imprimiendolo en la consola, considerando empates

Bonus 1. Incluye un requerimiento de al menos 20 puntos,
es decir que para que el ganador pueda ser premiado debe 
hacer al menos 20 puntos de promedio

Bonus 2. Si ambos equipos llegan a un empate pero su puntaje
promedio es menos a 30 puntos no ganaran el trofeo */

const P1bron = prompt('Puntos de Broncos partido 1')*1;
const P1pats = prompt('Puntos de Patriotas partido 1')*1;
const P2bron = prompt('Puntos de Broncos partido 2')*1;
const P2pats = prompt('Puntos de Patriotas partido 2')*1;
const P3bron = prompt('Puntos de Broncos partido 3')*1;
const P3pats = prompt('Puntos de Patriotas partido 3')*1;

const promBron = (P1bron + P2bron + P3bron)/3;
const promPats = (P1pats + P2pats + P3pats)/3;

//Estructura anidada
if(promBron > promPats){
    console.log(`Promedio Broncos ${promBron}`);
    console.log(`Promedio Patriotas ${promPats}`);
    console.log('Los ganadores son los Broncos');
    if(promBron >= 20){
        console.log('Su puntuacion merece premiacion');
    } else {
        console.log('Su puntuacion NO merece premiacion');
    }
}else{
    if(promBron < promPats){
        console.log(`Promedio Broncos ${promBron}`);
        console.log(`Promedio Patriotas ${promPats}`);
        console.log('Los ganadores son los Patriotas');
        if(promPats >= 20){
            console.log('Su puntuacion merece premiacion');
        } else {
        console.log('Su puntuacion NO merece premiacion');
        }
    } else {
        if(promBron === promPats){
            console.log(`Promedio Broncos ${promBron}`);
            console.log(`Promedio Patriotas ${promPats}`);
            console.log('Los puntos estan empatados');
            if(promPats >= 30){
                console.log('Los jugadores merecen premiacion');
            } else{
                console.log('Los jugadores no merecen premiacion');
            }
        }
    }
}