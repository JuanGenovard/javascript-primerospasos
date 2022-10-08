// ejercicio de dados


// let cantidadDados = parseInt(prompt("Dime la cantidad de dados"));
// let cantidadCaras = parseInt(prompt("Dime la cantidad de caras"));

// let dados = [];

// for(let i = 0; i < cantidadDados; i++) {
//     dados.push(parseInt((Math.random() * cantidadCaras) + 1));
// }

// console.log(dados);


// let dado1 = parseInt((Math.random() * 6) + 1) ;
// let dado2 = parseInt((Math.random() * 6) + 1) ;

// console.log("el primer dado ",dado1);
// console.log("el segundo dado ",dado2);

// let dado1 = 3 ;
// let dado2 = 4 ;

// console.log("el primer dado ",dado1);
// console.log("el segundo dado ",dado2);


// ejercicio 2


// let array = [5, 10, 11, 45, 1, 64, 76, 2000, 99, 234];
// let max = Math.max(...array);
// let min = Math.min(...array);

// console.log("El máximo es ", max);
// console.log("El mínimo es ", min);


//tipo de componente, nombre, cantidad, precio
//el componente es una placa base gygabyte, hay 5 en almacen y cuesta 100€

// let componentes = [
//     {tipo: "Placa base", nombre: "gygabyte", cantidad: 5, precio: 100},
//     {tipo: "memoria", nombre: "asus", cantidad: 0, precio: 56},
//     {tipo: "disco duro", nombre: "hp", cantidad: 3, precio: 95},
//     {tipo: "monitor", nombre: "lenovo", cantidad: 9, precio: 47},
//     {tipo: "antena wifi", nombre: "xiaomi", cantidad: 8, precio: 36}
// ];

// for(let i = 0; i < componentes.length; i++) {
//     if(componentes[i].cantidad > 0){
//         console.log("el componente es una " + componentes[i].tipo + " " + componentes[i].nombre + ", hay " + componentes[i].cantidad + " en almacen y cuesta " + componentes[i].precio + "€")
//     }else {
//         console.log("No quedan existencias del componente " + componentes[i].nombre);
//     }
// }