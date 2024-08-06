const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];


  function nameFinder(nameList) {
  for (let i=0; i<names.length; i++)
{    const indice = names.indexOf(names);
    if (indice !== -1){
        return {existe: true};
    } else {
        return {existe: false};
    }
}
  }
/*
    // Si el índice es diferente de -1, el elemento existe
    if (indice !== -1) {
      return { existe: true, posicion: indice };
    } else {
      return { existe: false };
    }
  }
  */
  const buscar1 = nameFinder(names, 'Nicole');
  console.log(buscar1)
  
