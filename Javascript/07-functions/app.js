//funciones

//declara uma funcao
//1 - nome
//2 - entre os parenteses colocamos os argumentos
//3 - entre as chaves os codigos a executar

function saludador(){
    console.log("Hola")
}

// executamos a funcao
saludador()
saludador()

//Argumentos

function sumNumbers(numberA, numberB) {
    console.log(numberA + numberB)
}

sumNumbers(2, 5);
sumNumbers(234, 578)

//e possivel indicar o valor de um numero ex 10. E se nao colocar nada na funciao (linha 29) considera o que está indicado se informa o valor, substitui e desconsidera o que foi inforado (linha30)
function sumNumbers(numberA, numberB = 10) {
    console.log(numberA + numberB)
}
sumNumbers(2); //é como se o 10 estivesse aqui
sumNumbers(2, 5); //o 5 elimina o 10 e ele passa a ser o valor da funcao
sumNumbers(234, 578)


function saludadorPremium (name){
    if (name === undefined){
        console.log("Oye, mete un numbre por lo menos")
    } else {
        console.log("Buenas tardes " + name)
    }
}

saludadorPremium("Paco");

function ageCalculator(actualYear, bornYear, name){
    const age = actualYear - bornYear
    console.log("Hello " + name + ", your age is: " + age )

}

ageCalculator(2022,1988,"Filipe")

// RETORNO  

function multi20(num){
    const resultado = num * 20
    return resultado;
}

multi20(1)

/*const resultado1 = multi20(20)
console.log(resultado1)

const resultado2 = multi20(3)
console.log(resultado2)

funciont actualAge (actualYear, bornYear){
    const age = actualYear - bornYear
    return age
}

Const isOver18 = 
actualAge (2022, 1998) >= 18 ? "Eres mayor de edad" : "Eres menor de edad"

console.log(isOver18)*/

function buenasTardes(name2){
    const frase = "Buenas tardes " + name2
    return frase
    console.log("Buenas tardes " + name2)
}
buenasTardes("Filipe")
