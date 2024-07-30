//EJERCICIO 8


const avengers = ["Hulk", "Thor", "Iron Man", "Captain A.", "Spiderman", "Captain M."];
const mostLongestWord = [];



for (let i = 0; i<avengers.length; i++) {
  var currentString = avengers[i];
  if (currentString.length > 9) {
    mostLongestWord.push(currentString)
  }
}



console.log(mostLongestWord[0]); // [23, 12, 45, 78, 11, 10.1, 84]