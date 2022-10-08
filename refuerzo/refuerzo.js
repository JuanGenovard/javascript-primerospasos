
// 1. Declara 2 variables numéricas (con el valor que desees), indica cual es mayor de
// los dos. Si son iguales indicalo también. Puedes ir cambiando los valores
// para comprobar que funciona.


// let num1 = 3;
// let num2 = 5;

// if(num1 > num2){
//     console.log(num1, "es mayor que num2")
//     }else if(num1 < num2){
//         console.log(num1, "es menor que num2")
//     }else {
//         console.log(num1,num2, "son iguales");
// }


// 2. Declara un String que contenga tu nombre, después muestra un mensaje de
// bienvenida por consola. Por ejemplo: si introduzco “Fernando”, me aparezca
// “Bienvenido Fernando”.

// let nombre = ("Juan")
// console.log("bienvenido", nombre)


/**3. Modifica la aplicación anterior, para que nos pida el nombre que queremos
introducir (recuerda usar prompt). */

// let nombre = prompt("pideme un nombre")
// console.log("bioenvenido", nombre)


/**4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
por teclado (recuerda pasar de String a double con parseDouble). Usa la
constante PI. */

// let radio = parseInt(prompt("dame un numero"));
// let area = Math.PI * (radio*radio);
// console.log(area);

/**5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
también debemos indicarlo. */

// let numero = parseInt(prompt ("dame un numero"))
// let resto = 0

// if(numero % 2 == resto){
//     console.log("es divisor de 2")
// }else console.log("no es diviso de 2");

/**6. Lee un número por teclado que pida el precio de un producto (puede tener
decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
del 21% */

// let numero = parseFloat(prompt("dame un precio"));
// let resultado = numero * 0.21;
// let preciofinal = numero + resultado;
// console.log(preciofinal);

/**7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while. */

// let numero = 0;
// while(numero < 100){
// numero++;
// console.log(numero);
// }

/**8. Haz el mismo ejercicio anterior con un bucle for. */

// let i = 0;
// for(i = 0; i < 101; i++){
// console.log(i);
// }

// 9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
// el bucle que desees.


// let i = 0;
// for(i = 0; i < 101; i++){
//     if(i % 2 == 0 && i % 3 == 0){
//     console.log(i)}
// }

/**10. Realiza una aplicación que nos pida un número de ventas a introducir, después
nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
que no. */


// let ventas = prompt("dame un numer de ventas");
// let suma = 0;
// let total = 0;

// while(ventas != 0){
//     suma = prompt("precio de cada venta");
//     total = total + parseFloat(suma);
//     ventas--;


// }
// console.log(total);

/**11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
laboral o no. Usa un switch para ello. */

// let dia = prompt("dime un dia de la semana");

// switch (dia) {
//     case "lunes":
//     case "martes":
//     case "miercoles":
//     case "jueves":
//     case "viernes":
//         console.log(laborable);
//         break;
// }

// var dia = prompt("Introduzca un día de la semana");

// switch (dia) {
//     case "lunes":
//     case "martes":
//     case "miercoles":
//     case "jueves":
//     case "viernes":      
//         console.log("laboral");
//         break;
    
//     case "sabado":
//     case "domingo":
//         console.log("no laboral");
//         break;

//     default:
//         console.log("Introduzca un día válido");
//         break;
// }



/**10. Realiza una aplicación que nos pida un número de ventas a introducir, después
nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
que no. */

// let ventas = prompt("dame un numero de ventas");
// let dinero = 0;
// let total = 0;

// while(ventas != 0){
//     dinero = prompt("cuanto dinero vale cada venta?");
//     total = total + parseFloat(dinero);
//     ventas--;


// }
// console.log(total);

// let ventas = prompt("dame un numer de ventas");
// let suma = 0;
// let total = 0;

// while(ventas != 0){
//     suma = prompt("precio de cada venta");
//     total = total + parseFloat(suma);
//     ventas--;


// }
// console.log(total);


/**12. Escribe una aplicación con un String que contenga una contraseña cualquiera.
Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
“Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
aunque le queden intentos). */


// let contrasena = "Bartolo";
// let pedir = "";
// let i = 0;


// while ((pedir !== contrasena) && (i < 3)) {
//     i++;
//     pedir = prompt("introduce contraseña");
// };

// if (pedir == contrasena) {
//     console.log("enhorabuena");
    
// }else{
//     console.log("es incorrecta");

// };




// Javascript Vanilla II   //////////////////////////////////////////////////////


// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido
// pedirá los valores necesarios para calcular el área. Para ello has de crear un método
// por cada figura para calcular cada área, este devolverá un número real. Muestra el
// resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

// let figura = prompt("dime un figura");
// let area = 0;
//       switch (figura) {
//         case "circulo":
//             let radio = parseInt(prompt("dame el radio"));
//             area = Math.PI * (radio * radio);
//                 console.log(area);
    
//         case "triangulo":
//             let base = parseInt(prompt("dame la base"));
//             let altura = parseInt(prompt("dame la altura"));
//             area = (base * altura) / 2;
//             console.log(area)

//         case "cuadrado":
//             let lado = parseInt(prompt("dame un lado"));
//             area = lado * lado;
//             console.log(area)    

            
//             break;
      
//         default:
//             console.log("figura incorrecta");
//             break;
//       }

// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios
// pasados por el usuario (prompt). Crea un método donde pasamos como parámetros
// entre que números queremos que los genere, podemos pedirlas al usuario antes de
// generar los números. Este método devolverá un número entero aleatorio. Muestra
// estos números por consola.


let numeros = parseInt(prompt("cuantos numeros va a tener el numero"));

let numero = parseInt(Math.random()) * 9;
console.log(numero);






    





