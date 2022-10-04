// > maior que
// < menor que
// >= maior o igual que
// <= menor o igual que
// == operador de igualdade
// === operador de igualdade estricta

// LOGICOS
// && --> AND
// || --> OR

const myAge = 75

if (myAge < 18) {
    console.log("eres menor de edad")
} else if (myAge === 18) {
    console.log("tienes 18 años")
} else if (myAge > 18) {
    console.log("eres un adulto")
} else if (myAge > 70 && myAge < 100) {
    console.log("Cuidado con tu salud")
} else {
    console.log("no entiendo esta edad")
}



const nameAf = "Bruce"

if (nameAf === "Bruce") {
    console.log ("Eres Batman");
} else {
    console.log ("Pues no eres batman");
}

// operadores logicos

/*const meDejanSalirALaCalle = true
const tengoDinero = false

const puedoSalirDeCervezas = meDejanSalirALaCalle && tengoDinero
*/
const tengoCarnet = true
const tengoCoche = false

const puedoConducir = tengoCarnet && tengoCoche
console.log(puedoConducir)


const heAprobado = true

if(!heAprobado) {
    console.log("vas a septiembre")
}
else if (heAprobado) {
    console.log("enhorabuena")
}



//TERNARIOS - si son muy largos es mejor hacer un IF que un ternário

const age = 18

const puedoEntrarAlConcierto = age >= 18 ? "Puedes entrar al concierto" : "Espera a tener 18"
console.log(puedoEntrarAlConcierto)

if (age >= 18) {
    console.log("Puedes entrar al concierto")
    } else {
    console.log("espera a tener 18")
    }
    
//SWITCH Se usa se o objetivo da condicional é somente um elemento para comprar com igualdade estricta

const superHero = "Spider-man"

switch (superHero) {
    case "Spider-man" :
        console.log ("Su nombre real es Peter")
    break;
    case "Hulk" :
        console.log ("Eres el chico verde")
    break;
}

