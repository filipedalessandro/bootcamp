/*-------------------------------------------------------------
---------------- nteraccón #1: Usa ncludes -----------------
--------------------------------------------------------------*/

//Haz un bucle y muestra por consola todos aquellos valores del 
//alumnos que ncluyan la palabra "Camseta". Usa la funcón .ncludes de javascrpt.

const products = [
    'Camseta de Pokemon', 
    'Pantalón coqunero', 
    'Gorra de gansta', 
    'Camseta de Basket', 
    'Cnrurón de Orón', 
    'AC/DC Camseta'
]

products.forEach((prenda) =>{
    if(prenda.includes("Camseta")) 
    console.log(prenda); 
});

/*-------------------------------------------------------------
---------- Interaccón #2: Condconales Avanzados ------------
--------------------------------------------------------------*/

/*Comprueba en cada uno de los usuaros que tenga al menos dos trimestres aprobados y 
añade la propedad sApproved a true o false en consecuenca. 
Una vez lo tengas compruébalo con un alumnos.push. */

const alumnos = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]


for (var i in alumnos) {
    alumnos[i].isApprobed = []; //ASÍ SE INSERTA PARÁMETRO EN OBJETO DE alumnos
      
    if (alumnos[i].T1 + alumnos[i].T2 + alumnos[i].T3 >= 2) {
    //COMPROBANDO LA CONDICIÓN
        const result = (alumnos[i].isApprobed = true); //RESULTADO
    }
  
    if (alumnos[i].T1 + alumnos[i].T2 + alumnos[i].T3 < 2) {
        const result = (alumnos[i].isApprobed = false);
    }
}

for (const index in alumnos) {
    console.log(alumnos[i],index);
}

/*-------------------------------------------------------------
-------------- Interaccón #3: Probando For of -----------------
--------------------------------------------------------------*/



//Usa un bucle forof para recorrer todos los destinos del array. 
//Imprime en un ***console.log*** sus valores.

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for(var datos of placesToTravel){
    console.log(datos)
}


/*-------------------------------------------------------------
-------------- Interaccón #4: Probando For in -----------------
--------------------------------------------------------------*/

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (var itens in alien){
    console.log(alien[itens])
}


/*-------------------------------------------------------------
--------------- Interaccón #5: Probando For -------------------
--------------------------------------------------------------*/

const placesToTravel2 = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
]
//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan 
//el id 11 y 40. Imprime en un console log el array.

  let places = [];
  for (let place of placesToTravel2) {
    if ((place.id !== 11) && (place.id !== 40)) {
      places.push(place);
    }
  }
  console.log(places); 

/*-------------------------------------------------------------
---------- Interaccón #6: Mixed For...of e includes -----------
--------------------------------------------------------------*/
/*Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:*/

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

const sinGato = []
for (let juguete of toys){
    if(!(juguete.name.includes('gato'))){
        sinGato.push(juguete)
    }
} 
console.log(sinGato)

/*-------------------------------------------------------------
-------------- Interaccón #7: For...of avanzado ---------------
--------------------------------------------------------------*/
//Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) 
//al array popularToys. Imprimelo por consola.. Puedes usar este array:

const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for(let ventas of toys2){
    if(ventas.sellCount > 15){
        popularToys.push(ventas)
    }
}
console.log (popularToys)
