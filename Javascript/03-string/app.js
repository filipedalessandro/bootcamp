const sentence = "Batman es el super heroe más sobre valorado de la historia"

const index = 4;

console.log(sentence.charAt(index));

// volta o M do "Batman" pq comeca no 0, 1, 2, 3, 4 

const str1 = "Hello";
const str2 = "world";

const str3 = str1.concat("-", str2)

const str4 = str1 + "-" + str2

const str5 = `${str1}-${str2}`;

console.log(sentence.endsWith("historia"))
//retorna true
//startswith

console.log(sentence.includes("super"))
//retorna true

const newSentence = sentence.replace("Batman", "Robin");
console.log (newSentence);
console.log (sentence);

const simioSentence = "Simio no mata a Simio"
console.log(simioSentence.replaceAll("Simio", "monkey"))
// substitui todos os SIMIO

const chorus = "Because Im happy"
console.log(chorus.repeat(27));
// repete 27 vezes because im happy

console.log(chorus.toLowerCase());
console.log(chorus.toUpperCase());


console.log(sentence.indexOf("super"))
//devolve onde comeca essa palavra

console.log(sentence.slice(0, 7))
//retorna batman



const valorado = "valorado"

console.log(sentence.indexOf("valorado"), sentence.indexOf("valorado") + 8)

console.log(sentence.indexOf("valorado"), sentence.indexOf("valorado") + valorado.length)

console.log(sentence.split(' '));
//volta cada palavra que existe

const password = " password ";
console.log(passwoed.trim()); 
// recorta os espaços
