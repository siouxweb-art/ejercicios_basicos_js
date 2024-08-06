function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'string'){
        sum += arr[i];
    }
   
    return sum;
}
}

const mixedElements = [6, 1, 'Marvel', 1, 'hambuerguesa', '10', 'Prometeo', 8, 'Hola mundo'];

/*function averageWord(list){
    if (typeof List === 'string'){
        for (let i=0; i<mixedElements.length; i++){
            let element = mixedElements[i].length;
            
        }
        let sum =0;
        sum += mixedElements[i]+element;
        
    }
    
}
let newMixed = averageWord(mixedElements);
console.log(newMixed)*/

console.log(sumArray(mixedElements))