//ARREGLO
var arreglo = ["larry", "jaimi","lorena"];
arreglo.push("hugo");
console.log(arreglo);
arreglo.push("backus")
console.log(arreglo);
arreglo.pop();
console.log(arreglo);
//agregar al  arreglo

var lista=["SmartPhone","Audifono","Mouse","Teclado","WebCam"];
lista.splice(2,0,"Celular","Lampara"); //posicion2,eliminar 0,añadir celular y lampara
console.log(lista);

//forEACH
var numero = [20.18,19,14,25,30];
numero.forEach(function(numero,index,arreglo){//funcion callback
    console.log(numero+","+index);
})

//MAP
var lugares = ["Arequipa", "lima", "trujillo"];
var lugares_mayuscula=lugares.map(function(ciudad,indice){
    return ciudad.toUpperCase();
});
console.log(lugares_mayuscula);

//FILTER
var notas = [20,19,17,14,09,11,20,14,10]
var aprobado=notas.filter(function(item){
    if(item > 10){
        return item;
    }
});
console.log(aprobado);

//
