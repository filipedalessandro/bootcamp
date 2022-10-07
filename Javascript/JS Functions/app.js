/*-------------------------------------------------------------
--------------- Interacción #1: Buscar el maximo --------------
--------------------------------------------------------------*/

//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo){
  if (numberOne > numberTwo) {
    return numberOne
  } else {return numberTwo
  }
}

let elNumeroMasGrande = sum(2, 4)

console.log (elNumeroMasGrande)

/*-------------------------------------------------------------
----------- Interacción #2: Buscar palabra mas larga ----------
--------------------------------------------------------------*/
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWordLength(avengers) {
  avengers = avengers.split(' ').reduce((prev, next) => prev.length > next.length ? prev : next)
  return avengers.length
}
console.log (findLongestWordLength)