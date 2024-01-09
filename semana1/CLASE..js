// clase del viernes 5 de enero
//VARIABLES
// globales
var apellido = "Laquis";
var edad = 30;
var sueldo = 1.234;
console.log("mi nombre es "+ "Juan" + " "+ apellido);
console.log("mi edad es "+ edad);
console.log("mi sueldo es "+ sueldo +"bs");
//bloque
let presupuesto = 1000;
let gastos = 500;
//Constantes
const IVA = 13;
//NO SE PUEDE REASIGNAR UN VALOR DE CONST
//ESTRUCTURAS
//if
if (100 % 2 === 0) {
    console.log('100 es par');
} else {
    console.log('100 no es par');
}
//
if (100 % 3 === 0) {
    console.log('100 es par');
} else {
    console.log('100 es no par');
}
//for
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//while
let contador = 5;
while (contador < 10) {
    contador++;
    console.log(contador);
}
//OPERADORES
//aritmeticos
let suma = 5 + 5;
console.log(suma);
let resta = 5 - 5;
console.log(resta);
let multiplicacion = 5 * 5;
console.log(multiplicacion);
let division = 5 / 5;
console.log(division);
let modulo = 5 % 5;
console.log(modulo);
console.log(suma,resta,multiplicacion)
console.log(division,modulo)
//Comparación
let mayorQue = 5 > 10;
console.log(mayorQue);
let mayorIgualQue = 5 >= 5;
console.log(mayorIgualQue)
let menorQue = 5 < 2;
console.log(menorQue)
let menorIgualQue = 5 <= 4;
console.log(menorIgualQue)
let igualQue = 5 === 5;
console.log(igualQue)
let diferenteQue = 5 != 5;
console.log(diferenteQue)
// Lógicos
let and = true && true;
console.log(and)
let or = true || false;
console.log(or)
let not = !true;
console.log(not)
// OBJETOS,ARRAYS
let persona = {
    nombre: "Carlos",
    edad: 25,
    ocupacion: "Desarrollador"
};
console.log(persona)
console.log(persona.nombre);
persona.nombre = "juan";
persona.ciudad = "La Paz"
persona.CI = "13648631"
let colores = ["rojo", "verde", "azul"];
console.log(colores.length);
console.log(persona)
colores.push("amariilo","naranja","celeste")
colores.push(1.250);
colores.push(46);
colores.push(true);
colores.push(false);
console.log(colores);
colores.pop();
colores.sort();
console.log(colores);
var encontrado = colores.find(function (elemento)
{
    return elemento === "rojo";
    console.log(encontrado);
});

var elemento = colores.findIndex(function(elemento)
{
    return elemento === 1;
    console.log(elememto)
});

function saludar(nombre) {
    return "hola, " + nombre + "!";
    console.log(saludar);
}

const mensaje = saludar("juan");