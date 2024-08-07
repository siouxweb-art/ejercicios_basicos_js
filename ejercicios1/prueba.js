const calcularFactorial = (n)=>{
    if (n === 0){
        return 1;
    }
    else{
        return n* calcularFactorial(n-1);
    }
}


const numero = 5;
const factorial = calcularFactorial(numero);
console.log('Elfactorial de ${numero} es ${factorial}');
