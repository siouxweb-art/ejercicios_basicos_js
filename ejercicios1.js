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


//....................................................................................................................................................................................................

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

//....................................................................................................................................................................................................

//EJERCICIO 3
//3.1
const a = 10;
const b = 5;

function mult (a,b){
    return a * b;
}
let resultado = mult (a,b)
//console.log(resultado)

//3.2
const k = 2;

function div (a,k){
    return a / k;
}
let resultDiv = div(a,k)
//console.log(resultDiv)

//3.3
const d = 15;
const e = 9;

function divis(d,e){
    return d/e;
}

let dividir = divis(d,e)

const numE = 1;
function resto(dividir,numE){
    return dividir-numE;
}

let restodiv = resto(dividir,numE)

//console.log(restodiv)

//3.4
var p = 10;
var j = 5;

var o = p + j;

//console.log(o)

//3.5

var c = 10;
var m = 5;

var i = c * m;

//console.log(i)

//....................................................................................................................................................................................................

//EJERCICIO 4
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
//4.1
//console.log(aldeanos[3])
//4.2
aldeanos.push("Cervasio");
//console.log(aldeanos)
//4.3
aldeanos[0] = "Bambina";
//console.log(aldeanos)
//4.4
aldeanos.reverse();
//console.log(aldeanos)
//4.5
aldeanos[1] = "Canela";
//console.log(aldeanos)
//4.6
//console.log(aldeanos[aldeanos.length - 1]) //aparece Bambina porque anteriormente se ha invertido el orden del array

//....................................................................................................................................................................................................

//EJERCICIO 5
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
   // console.log("number1 es estrictamente igual a 10")
}

if (number2 === 20) {
  //console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 === !number2) {
  //console.log("number1 es estrictamente distinto a number2");
}

if (number3 === !number1) {
  //console.log("number3 es distinto number1");
}

if (number3 === 2) {
  //console.log("number3 por 5 es igual a number1");
}

if (number3 === 2 && number1 === 10) {
  //console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 === 20 || number1 === 10) {
  //console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}


//....................................................................................................................................................................................................

//EJERCICIO 6
//6.1
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for (let i=0; i<=9; i++){
    //console.log(numbers[i])
}

//6.2
const numb = ["0","1","2","3","4","5","6","7","8","9"];
const numbpar = numb.filter(number => number%2 ===0);
for (let i=0; i<1; i++){
  //console.log(numbpar)
}

//6.3
const ovejas = "🐑";

for (let i=0; i<9; i++) {
 // console.log("Intentando dormir" + ovejas)
}
//console.log("¡Dormido!")

//....................................................................................................................................................................................................

//EJERCICIO 7
let numberOne = 7;
let numberTwo = 8;
function greaterNumber(numberOne, numberTwo){
  return numberOne, numberTwo;
}
let number = greaterNumber(numberOne, numberTwo);
if(numberOne>numberTwo){
 // console.log(numberOne);
}
else{
  //console.log(numberTwo);
}

//....................................................................................................................................................................................................

//EJERCICIO 8

/*Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, 
+en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/
//const avengers = ["Hulk", "Thor", "Iron Man", "Captain A.", "Spiderman", "Captain M."];
//const stringAvengers = avengers[i];
//hacer que me devuelva cada elemento del array
//for (let i=0; i<avengers.length; i++){
//console.log(avengers[i])}

//function propuesta
//console.log(stringAvengers);
//let stringLength = avengers[i];
//for (let i=0; i<avengers.length; i++){


//}

const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
for (let i=0; i<avengers.length; i++){
 let stringList = avengers[i];
 console.log(stringList.length)
}


//const stringList = avengers[i]
//function findLongestWord(stringList) {
  // Completar código
//}
