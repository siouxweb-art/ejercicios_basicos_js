const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];

  function repeatCounter(List){

    const contarWords = [];

    //hay que iterar cada palabra
    words.forEach(palabra => {
        if(contarWords[palabra]){
            contarWords[palabra]++;
        }else{
            contarWords[palabra] = 1;
        }
    });
    return contarWords;
}
  

let minus = repeatCounter(words);
console.log(minus)
