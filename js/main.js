let destino = prompt("Ingrese el destino al que desea viajar: 1 Puerto Madryn. 2 Comodor. 3 Bariloche. 4 Ushuaia. 5 Las Grutas. 6 Bahia Blanca");
let cuotas = prompt("Seleccione la cantidad de cuotas, 1, 3 o 6");

const pasaje_madryn = 8000;
const pasaje_comodoro = 8500;
const pasaje_bariloche = 9000;
const pasaje_ushuaia = 10000;
const pasaje_las_grutas = 8000;
const pasaje_bahia_blanca = 7000;
let destino_elegido;

if(destino == 1){
    destino_elegido = pasaje_madryn;

} else if (destino == 2){
    destino_elegido = pasaje_comodoro;

} else if (destino == 3){
    destino_elegido = pasaje_bariloche;

} else if (destino == 4){
    destino_elegido = pasaje_ushuaia;

} else if (destino == 5){
    destino_elegido = pasaje_ushuaia;

} else if (destino == 6){
    destino_elegido = pasaje_ushuaia;

}else {
    console.log("debe elegir un destino valido: 1 Puerto Madryn. 2 Comodor. 3 Bariloche. 4 Ushuaia");
}

function calcular_precio_final(destino_elegido, cuotas){

    if(cuotas == 1){
        console.log("El precio final es: " + destino_elegido)
    } else if(cuotas == 3){
        precio_final = destino_elegido + 2000;
        console.log("El precio final es: " + precio_final );
    } else if(cuotas == 6){
        precio_final = destino_elegido + 4000;
        console.log("El precio final es: " + precio_final );
    } else {
        console.log("Ingrese un numero de cuotas valido, 1, 3 o 6.");
    }

};

calcular_precio_final(destino_elegido, cuotas);