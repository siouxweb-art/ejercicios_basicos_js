//EJERCICIO 9

const numberS = [1, 2, 3, 5, 45, 37, 58];


function sumNumberS(numberList) {
   let sum= 0;
   for (let i=0; i <numberS.length; i++){
    sum += numberS[i];
   }
   return sum
}
let sumTotal = sumNumberS(numberS)
console.log(sumTotal)
