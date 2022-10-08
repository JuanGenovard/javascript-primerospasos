


// let  dia = "jueves";

// var mes = "octubre";
//     function Fecha(){

//         let dia = "miercoles";
//         let mer = "noviembre";

//         console.log(dia);
//     };

//     Fecha();

//     console.log(dia);


// FUNCTION VS ARROW-FUNCTION
// function

// function Multiplicar (numero1,numero2){
//     return numero1 * numero2;
// };


// // --------------------------------------------------------

// let fruta = ["manzana","pera","fresa","platano","albaricoque"];

// let frutasPluares = fruta.map(postre => postres + "s");
// console.log(frutasPlurales);

// // ........................................................

// let precioFinalImpuestos = (precio, impuestos = 1.21) => precio + (precio * impuesto);

// console.log(precioFinalImpuestos(1200));


// ejercicio RANDOM

// let getPrecioFinal = (numero, prefijo = "RX") => prefijo + numero;

// let random = Math. floor(Math. random() * 999);

// let resultado = getPrecioFinal(random);

// console.log("El robot se llama: ", resultado);


// ----------------------------------------------------------------


// --------------David-------------------


// let dia = "Jueves";

// var mes = "Octubre";

// function Fecha(){

//     let dia = "Miercoles";
//     var mes = "Noviembre";

//     return console.log(mes);
//     // console.log(mes);
// };

// Fecha();

// console.log(mes);
// // console.log(mes);

// const cocaCola = "azucar";

// //Esto generaría un error, dado que cocaCola ha sido declarado previamente como CONSTANTE, por lo tanto
// //no es posible actualizar o cambiar su valor.
// cocaCola = "agua";


// console.log(cocaCola);

//FUNCTIONS VS ARROW-FUNCTIONS

//Function
// function Multiplicar (numero1,numero2){
//     return numero1 * numero2;
// };

// //Arrow-function
// const Multiplicar = (numero1, numero2) => {
//     return numero1 * numero2;
// };

// const Dividir = (numero1, numero2) =>  numero1 / numero2;

// let resultado = Dividir(10,3);

// console.log(resultado);


// function Exponente (numero) {
//     return numero ** 2;
// }

// const Exponente = numero => numero ** 2;


//MAL
// const Pokemon = nombre => { 
//     monster : nombre
// };


//BIEN
// const Pokemon = (nombre,elemento) => ({
//     tipo : elemento,
//     monster : nombre
// });

// let boton = Pokemon("Charmander");

// console.log(boton);

//USO PRÁCTICO DE ARROW FUNCTIONS...

// let fruta = ["manzana","pera","fresa","platano","albaricoque"];

// let frutasPlurales = fruta.map(postre => postre + "s");

// console.log(frutasPlurales);

// let numeros = [25,38,42,57,112];

// let numerosMapeados = numeros.map(cifra => cifra * 3);

// console.log(numerosMapeados);


// const PrecioFinalImpuesto = (precio, impuesto = 0.21) => precio + (precio * impuesto);

// console.log(PrecioFinalImpuesto(1200));


// const RobotRandom = (numero,letras="RX") => letras + numero;

// let random = Math.floor(Math.random() * 999);

// let resultado = RobotRandom(random);

// console.log("Tu bot se llama ....", resultado);



// const Esparcir = (name, ps, atk, def, speed) => {
//     console.log("Nombre: ", name);
//     console.log("Vida: ", ps);
//     console.log("Ataque: ", atk);
//     console.log("Defensa: ", def);
//     console.log("Velocidad: ", speed);
// }

// let Pokemon = ["Pikachu", 35, 55, 40, 90];
// let Conquistador = ["Raditz", 40, 66, 30, 99];

//Mal
// esparcir(Pokemon[0],Pokemon[1],Pokemon[2],Pokemon[3],Pokemon[4]);

//Bien
// Esparcir(...Pokemon);
// Esparcir(...Conquistador);

//La propiedad spread reparte las distintas posiciones del array en los 
//argumentos de la funcion, siempre por oden.

//REST

// let arrayGlobal = [];

// const Agrupar = (...argumentos) => {
//     arrayGlobal.push(...argumentos);
// };

// Agrupar(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
// Agrupar(1,2);
// Agrupar(1,1,1,1,1,1,1,1,1,1,1,1,1);

// console.log(arrayGlobal);

// const Agrupar = (...argumentos) => {
//     let aleatorio = parseInt(Math.random() * 10);
    
//     let nuevoArgumentos = argumentos.map(numeros => numeros + aleatorio);

//     console.log(nuevoArgumentos);
// };

// Agrupar(5, 6, 7, 11); 





// function g(arg1, arg2, ...argRest) {
//     console.log(arg1, arg2, argRest);
// }
// g(1, 2, 3, 4, 5); // 1 2 [3,4,5]

// const Pokemon = (nombre,tipo) => ({
//     nombre: nombre,
//     tipo: tipo
// });

// const Pokemon = (nombre,tipo) => ({nombre,tipo});

// console.log(Pokemon("Pikachu","Electrico"));

// let favorito = prompt("Dime tu compañero favorito");

// console.log(`Hola ${favorito}`);


// let comida = ["spaghetti","sushi","paella","arroç al forn","pizza"];

// let [uno,dos,tres,cuatro,cinco] = comida;

// console.log(tres);


// let musica = { 
//     grupo1: "Pink Floyd", 
//     grupo2: "Joan Macarra", 
//     grupo3: "Bad Bunny" 
// };

// //Creo la desestructuración del objeto
// let { grupo1: rock, grupo2: punk, grupo3: trap_latino } = musica;

// console.log(rock,punk,trap_latino);


