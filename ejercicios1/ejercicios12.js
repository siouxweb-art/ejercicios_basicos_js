const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
    function removeDuplicates(list) {
        return list.filter((item, index) => list.indexOf(item) === index);
      }
      let unique = removeDuplicates(duplicates);
      
console.log(unique)