/* Variables y tipo de datos
Lee las instrucciones de cada comentario y escribí el código para realizar la tarea */


//Crea una variable numero y asígnale un valor de tipo number.
var a = 1;

//Crea una variable texto y asígnale un valor de tipo string.
let mivariable=
"Programando paraguay"

//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
let variable = true




//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.
let falso= false




//Crea una variable nulo y asígnale un valor de tipo null.
let vacio = null

//Crea una variable indefinido y asígnale un valor de tipo undefined.
let indefinido = undefined

//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.

//Imprime en la consola el valor de la variable número y el tipo de dato que almacena.
console.log(a, typeof a)

//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena.
console.log(mivariable,
    typeof mivariable)

//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.


//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.

//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.

console.log(vacio, typeof vacio)

//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
console.log(indefinido, typeof indefinido)

//Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena.




/*Decisiones en javascript (if,if else, switch)*/

//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
let numero = (prompt
    ("ingrese un numero"))
    
    if (numero > 10) {
        console.log ("Es Mayor")
    }
    else if (numero < 10) {
        console.log ("Es Menor")}
    
    else if (numero = 10){
        console.log ("Es igual")    
        }
    
    console.log(numero, typeof numero)



//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.

let num = 9
if (num % 2 == 0) {
    console.log ("es par")
} else {
    console.log("es impar")
}

//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.

let caracter = "n"
if (caracter === "a"||
caracter === "e" ||
caracter === "i" ||
caracter === "o"||
caracter === "u")
{
    console.log("Es una vocal")
}
else {
    console.log("Es una consonante")}
    

//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.

//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
let num2 = 18
if (numero >= 18) {
    console.log ("Es Mayor de edad")
}
else if (numero < 18) {
    console.log ("Es Menor de edad")}
    


//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7y muestre un mensaje en la consola indicando el día de la semana correspondiente.
let dias= 
["domingo",
"lunes",
"martes",
"miercoles",
"jueves",
"viernes",
"sabado"]

let imput = 2
console.log(dias[imput-1])






//Funciones

//Escribe una función que tome dos números como argumentos y devuelva su suma.
function sumar (numero1, numero2){
    return numero1+numero2

}

console.log("la suma es " + sumar (5,8))


//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function IsPar(numero) {
    if(numero % 2 == 0 ){
        return true
    } else {
        return false
    }
}
console.log(IsPar(9))
console.log(IsPar(8))

//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.

//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.





//Vectores

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.

//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.

//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.

//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.

//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.




//Bucles

//Escribe un bucle for que imprima en la consola los números del 1 al 10.

//Escribe un bucle while que imprima en la consola los números del 1 al 5.

//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.

//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.

//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.





//DOM y eventos

//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.

//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.