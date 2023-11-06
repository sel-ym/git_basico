// VARIABLES
numero1 = 10

console.log(typeof numero1)

let numero2 = 102.3 //variable de tipo decimal
console.log(typeof numero2)

let texto1 = "Èsto es un texto"
console.log(typeof texto1)

let verdadero = true
console.log(typeof verdadero)


// document.getElementById("js1").innerText = numero1
console.log(numero1)

// variables numericas
let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4 

num1 = 10

let suma = num1 + num2
console.log(suma)

let mmultiplicar = num1 * num2
console.log(mmultiplicar)

// elemento al cuadrado
console.log(4 ** 3)
// modulo = resto de la division, residuo
console.log(20 % 3)

// string o cadenas de texto
texto1 = "Buenos"
let texto2  = "días"

texto_total = texto1 + " " + texto2
console.log(texto_total)

console.log("el texto tiene", texto_total.length)

console.log(texto_total.toUpperCase())
console.log(texto_total.toLowerCase())

let nombre = "vIcTor peREZ".toLocaleLowerCase()
console.log(nombre)
 
let saludo = "Buenos días"
// saludo = saludo - "días" (fallo)
console.log(saludo)

// operadores de asignación
let num5 = 5
// reasignación
num5 = num5 + 4
// reasignación sintaxis abreviada num5 += 4
num5 += 4

console.log("num5 vale", num5)

// prioridad/presedencia de valores de los signos
let total = 1 + 2 - 3 * 5 * 4 / 5
console.log(total)