//função sem retorno - Modificadora . la uso para modificar o transformar un valor generico

let result //variavel vazia

function calculator(){
    let number1 = 25
    let number2 = 50
    result = number1 + number2

}

calculator()
console.log(result)


/*let result = 0
console.log(result)
function suma75 (){

}*/

let result76 = 0
const suma76 = () => {
    result += 76
}
result76 += 76

//função com retorno - Pode até modificar, mas seu uso é de retornar um valor

let result2 = 0

function soma50(){
    return result2 + 50;
}

let result2Arrow = 0
const suma51 = () {
    return result2Arrow + 51
}
let valueReturnArrow = suma51 ()
console.log(result2Arrow, valueReturnArrow)


let valorDeRetorno = soma50()
console.log(result2, valorDeRetorno)



// outro tema

function calculator (numA, numB, numC){
    return numA + numB + numC
}

let returnCalculator = calculator (2, 4, 6) // criamos o returCalculator pra ficar salva a resposta em algum lugar

console.log(returnCalculator)

var sumaTradicional = function(a, b){
    return a + b;
}
// é equivalente a:
var sumaConFlecha = (a,b) => a + b;
    