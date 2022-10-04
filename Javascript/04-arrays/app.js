//Arrays
//é um conjunto de dados isolados. Uma lista. Nao tem relacao entre eles.

const array1 = [1, 2, 3, 4, 5]
const array2 = ["patata", true, {name: "cosa", id:23}]
//logitude = é a quantidade de elementos 5
//posición começa sempre com 0, 1, 2, 3, 4

//-----at
console.log(array1.at(2))

//-----normalmente ahora se utiliza la siguiente forma para acceder a los eleentos de un array
console.log(array1.[2])
//setorna a mesma coisa 3

//-----concat
const arrayConcat1 = [1, 2, 3, 4]
const arrayConcat2 = [5, 6, 7, 8]

const concat = arrayConcat1.concat(arrayConcat2)

console.log(concat)
// normalmente se usa SPREAD OPERATOR para concatenar arrays

const concat2 = [...arrayConcat1, ...arrayConcat2]
console.log(concat2)

//Ejemplo real seria um to do list
/* const list = []
const todo = [...list, ...newToDo] */

//-----entries
const arrayEntries = [1, 2, 3]
const iteratorEntries = arrayEntries.entries()
//console.log(interatorEntries);

console.log(interatorEntries.next().value)
console.log(interatorEntries.next().value)
console.log(interatorEntries.next().value)
console.log(interatorEntries.next().value)

//_____ fill - O primeiro e o elemento que vai ser adicionado, o segundo parametro é a posiciao onde começa e o terceiro a posicao onde termina (esta nao está incluida)
const arrayfill = [1, 2, 3, 4, 5];
console.log(arrayfill.fill("#",2,4))

// retorna [1, 2, #, #, 5]

// ----flat - aplana las dimensiones de un array y el parametro que acepta es la cantidad de niveles que tiene que aplanar

const.arrayFlat = [1,2,3,[4,5,[6,7]]];
// posicoes 0, 1, 2 e 3 (sendo o 3 os numeros 4 e 5 posicao 0 e 1)

console.log(arrayFlat.flat());
//Retorna un array normal sem ser um array dentro do outro [1, 2, 3, 4, 5]
console.log(arrayFlat.flat(2));
//retorna un array normal sem ser um array dentro de otro (2 niveis neste caso)
console.log(arrayFlat.flat[3][0])
//Retorna o numero 4

//-----includes _ o metodo devolve true o false se el array inclui ou nao o elemento passado por parametro
const arrayIncludes = ["Pedro","Alberto",2, {name:"Paco", age: 98}]
console.log(arrayIncludes.includes("Pedro"))
console.log(arrayIncludes.includes(2))
console.log(arrayIncludes.includes("Paco"))
//devolve true para as duas primeiras e falsa para a terceira (que é um objeto)


//-----indexof - devolve a posicao do primeiro elemeto que coincida com o parametro e se nao encontra devolve -1
const arrayIndex = ["A","B","C"]
console.log(arrayIndex.indexOf("B"))
// devolve 1 (posicao)
// lastIndexOf - o mesmo mas começa de traz para frente

//----join - converte um array em uma string
const arrayJoin = ["A","B","C"]
console.log(arrayIndex.join())
//devolve A,B,C
console.log(arrayIndex.join(" "))
//devolve A B C
console.log(arrayIndex.join("/"))
//devolve A/B/C


//-----length - esta propriedad te devolve a longitude de uma array o um string TIP: GO TO HELL
const arrayLength = [1, 2, 3, 4, 5, 6]
console.log(arrayLength.length)
// te retorna 6 que é a longitude 

//-----push y pop - respectivamente adiciona ao final ou tira do final um elemento de um array
const arrayPush = [1,2,3,4]
arrayPush.push(5)
// devolve 1,2,3,4,5

//----shift . elimina o primeiro elemento
arrayPush.shift()
console.log(arrayPush)
//devolve 2,3,4

//-----unshift Anade en la primera posicionl
arrayPush.unshift(1)
console.log(arrayPush)
//como é um metodo que moficia está fora.. se está dentro de console ele traz, faz uma "copi" com a alteracao
//Devolve 1,2,3,4

// -----slice - troceamos um array y los parametros que le indicamos es desde donde vamos torcear hasta donde vamos a trocear. La ultima posicion no se incluye

const arraySlice = ["Hola", "Adios", "Hello", "bye"]
console.log(arraySlice.slice(1,3))
// retorna Adios e Hello (nao inclui a ultima posicao)

// -----sort - ordena alfabeticamente un array
const arraySort = ["Hola", "Adios", "Hello", "bye"]
console.log(arraySort.sort())
//devolve Adios, Bye, Hello, Hola
//se coloca os numeros, ele ordena alfabeticamente tmb. 

// -----splice - Primer parametro indica desde donde vamos a eliminar. Segundo parametro indica cuantos elementos vamos a eleminar. Terceir parametro (opciona) que se va a introducir en los agujeros de lo que fue eliminado

const arraySplice = ["Daniel","Pedro","Andrea","Juan","Alex"]
arraySplica.splice(1,3,"alberto")
console.log(arraySplice)
//retorna Daniel, Alberto, Alex
// elina Pedro Andrea e Juan e coloca Alberto no lugar

//----tostring - convierte una array en string
const arrayString = ["Pepe","Paco"]
console.log(arrayString.toString())
// retorna Pepe,Paco (sem chaves nem nada ? entender)

