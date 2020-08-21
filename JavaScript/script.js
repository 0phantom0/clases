// el resultado se mostrara solo en cosola del explorador de internet
console.log("hola mundo en JS")

//VARIABLES
var edad = 30;
console.log(edad)
console.log(typeof edad)

//OPERADORES ARITMETICOS
var a = 2;
var b =4 ;

console.log("suma", a + b);
console.log("resta", a - b);
console.log("multiplicar", a * b)
console.log("dividir", a/b);
console.log("residuo", a%b);
console.log("potencia", a**2)
console.log("Raiz", Math.sqrt(a));
console.log("raiz", a**(1/2))

//EJERCICIO DE TRIANGULO
var base = parseInt(prompt("Ingrese la base"));
var altura =  parseInt(prompt("Ingrese la altura"));

var resultado = (base*altura)/2;
console.log("EL area del triangulo es: ",resultado)