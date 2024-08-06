
const mixedElements = [6, 1, 'Marvel', 1, 'hambuerguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
    
    let suma = 0;
  
    list.forEach(elemento => {
      if (typeof elemento === 'number') {
        suma += elemento;
      } else if (typeof elemento === 'string') {
        suma += elemento.length;
      }
    });
  
    return suma;
  }

  let totalMixedElements = averageWord(mixedElements);
  console.log(totalMixedElements)