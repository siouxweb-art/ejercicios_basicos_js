const mixedElements = [6, 1, 'Marvel', 1, 'hambuerguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list){
    let sum = 0;
    for (let i=0; i <mixedElements.length; i++){
        if ( mixedElements[i].length >1 ) {
            let element = mixedElements[i].length;
        }
       sum += mixedElements[i] + element;
    }
    return sum;
}

 

console.log(element)