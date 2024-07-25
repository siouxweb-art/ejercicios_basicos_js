//EJERCICIO1
//1.1
const miSuperheroeFavorito = "Hulk";

//1.2
const miNumeroFavorito = 50;

//1.3
const altura = 5;
const longitud = 10;

//1.4
function calcularSuma (altura,longitud){
    return altura + longitud;
}
const suma = calcularSuma (5,10);

//1.5
//console.log(miSuperheroeFavorito, miNumeroFavorito, altura, longitud, suma) 


//EJERCICIO2
//2.1
const jedi = {nombre: "Luke Skywalker", edad: 19};

function getAge (edad,incremento){
return edad + incremento;
}
let Edad = getAge(19,6);
//console.log(Edad)

//2.2
const presentacion = {
    nombre : 'Leia',
    apellido : 'Organa',
    edad : '20',
}

//console.log ('Soy ' + presentacion.nombre + ' ' + presentacion.apellido + ', tengo ' + presentacion.edad + ' años y soy una princesa de Alderaan.')

//2.3
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

function sumatotal (sable1, sable2){
    return sable1 + sable2;
}
let total = sumatotal (sable1.precio,sable2.precio);

//console.log(total)

//2.4
let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable
let incremento = 15000; 
function newprecioBaseGlobal (precioBaseGlobal,incremento){
    return precioBaseGlobal + incremento;
}
let precioBaseGlobal2 = newprecioBaseGlobal (10000,15000)

//console.log(precioBaseGlobal2)

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

function preciofinal (precioBase,precioBaseGlobal2){
    return precioBase + precioBaseGlobal2;
}
let nave1precioFinal = preciofinal (nave1.precioBase,precioBaseGlobal2)
//console.log(nave1precioFinal)
let nave2precioFinal = preciofinal (nave2.precioBase,precioBaseGlobal2)
//console.log(nave2precioFinal)


//EJERCICIO 3
//3.1
const a = 10;
const b = 5;

function mult (a,b){
    return a * b;
}
let resultado = mult (a,b)
console.log(resultado)

//3.2
const c = 2;

function div (a,c){
    return a / c;
}
let resultDiv = div(a,c)
console.log(resultDiv)

