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
// var base = parseInt(prompt("Ingrese la base"));
// var altura =  parseInt(prompt("Ingrese la altura"));

// var resultado = (base*altura)/2;
// console.log("EL area del triangulo es: ",resultado)

//FUNCIONES
function saludar(nombre, lugar){
    let saludo = "Hola soy yo " + nombre + " y soy de " + lugar;
    return saludo;
}

let miSaludo = saludar("Osmar","Arequipa")
console.log(miSaludo);

//ARREGLOS^
var alumnos = ["Paolo", "Renzo", "Lorena"];
console.log(alumnos[1]);
console.log(alumnos.length);

//CONDICIONALES
var edad = 18
if(edad<=18){
    console.log("Tienes DNI amarillo")
}else{
    console.log("Tienes DNI azul");
}

//OPERADORES LOGICOS OR(||), AND (&&), NOT (!)
var edad2 = 18
if(edad<18 && edad==18){
    console.log("Tienes DNI amarillo");
}else{
    console.log("Tienes DNI azul");
}

//SWITCH
var mes = 2;
switch(mes){
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("marzo");
        break;
}

//OPERADOR TERNARIO
mes == 2 ? console.log("Febrero") : console.log("No es Febrero");

//EVALUANDO TIPOS DE DATOS
var numero1 = 3;
var dato = "3";
//usar 3 iguales por que java es muy flexible
numero1===dato ? console.log("Son iguales") : console.log("Son diferentes");

//WHILE
var contador=0

while (contador<5){
    console.log("el contador es: " + contador);
    contador++;
}

//FOR
i=0;
for(i; i<=3;i++){
    console.log(i);
}

var alumnos = ["andre", "juan", "Luis"];
for(var j=0; j < alumnos.length; j++){
    console.log(alumnos[j]);
}

