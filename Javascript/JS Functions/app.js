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

//*************************DUDA******************************

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function recebeArray(words) {
  var longest = "";
  for (var word of words) {
      if (word.length > longest.length) longest = word;
  }
  return longest;
}

console.log(recebeArray(avengers))

/*-------------------------------------------------------------
--------------- Interacción #3: Calcular la suma --------------
--------------------------------------------------------------*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

var soma = numbers.reduce(function(soma, i) {
  return soma + i;
});
console.log(soma);

//OR

var total = 0;
for ( var i = 0; i < numbers.length; i++ ){
   total += numbers[i];
}
console.log(total);

/*-------------------------------------------------------------
------------- Interacción #4: Calcular el promedio ------------
--------------------------------------------------------------*/

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

let sum2 = numbers2.reduce((abc, def) => abc + def, 0);
let avg = sum2 / numbers2.length;

console.log(avg)


/*-------------------------------------------------------------
------- Interacción #5: Calcular el promedio de strings -------
--------------------------------------------------------------*/

/*Crea una función que reciba por parámetro un array y cuando es un valor number 
lo sume y de lo contrario cuente la longitud del string y lo sume. 
Puedes usar este array para probar tu función:*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
const newArrayNum = []

function myFunction2() {
  mixedElements.map(function(currentValue, index){
    newArrayNum[index] = currentValue;

    if (currentValue / 1 === currentValue) {
      newArrayNum[index] = currentValue;
    }
    else {
      newArrayNum[index] = index
    }
    return newArrayNum
  });
}

console.log(newArrayNum)
myFunction2();

var totalValores = 0
for (var i = 0; i<newArrayNum.length; i++){
  soma += newArrayNum[i]
}
console.log(soma)

/*-------------------------------------------------------------
--------------- Interacción #6: Valores unicos ----------------
--------------------------------------------------------------*/

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

console.log([...new Set(duplicates)])

/*-------------------------------------------------------------
--------------- Interacción #7: Buscar nombres ----------------
--------------------------------------------------------------*/

const nameFinder = [
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

const finderName = (palabra , array) => { 
let contIndex = []
  let palabras = array.includes(palabra) 
if(palabras === true) {
  array.forEach((item, index) => {
    if(item === palabra){
      contIndex.push(index)
    }
  })
} else {console.log(`No se encuentra el elemento buscado`) 
return false}
console.log(`El elemento se encuentra el la posición siguiente ${contIndex}`)
return true
}
finderName("Logan",nameFinder)

let booleanTeste = finderName("Logan",nameFinder)
console.log(booleanTeste)

/*-------------------------------------------------------------
------------ Interacción #8: Contador repeticiones ------------
--------------------------------------------------------------*/

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

var counts = {}
counterWords.forEach(function(palab) { 
  counts[palab] = (counts[palab] || 0)+1; 
});
console.log(counts);
