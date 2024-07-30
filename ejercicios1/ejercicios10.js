//EJERCICIOS 10

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let sum= 0;
  for (let i=0; i<numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
  

}
let prom = average(numbers)/numbers.length;

console.log(prom)


