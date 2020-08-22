var parrafo=document.getElementById("parrafo");
console.log(parrafo);

parrafo.style.color="red";
parrafo.style.padding="20px";

var elementsPeru=document.getElementsByClassName("peru");
console.log(elementsPeru);

var cajitas=document.getElementsByTagName("p");
console.log(cajitas);

var query=document.querySelector("#parrafo");
console.log(query);

var queries=document.querySelectorAll(".peru");
console.log(queries);

miContenerdor=document.getElementById("container");

miContenerdor.style.border="1px solid blue";
miContenerdor.style.opacity=0.6;



miContenerdor.classList.add("brillo");
miContenerdor.classList.remove("brillo")


//ejecuta una funcion cada cantidad de tiempo de forma repetitiva

setInterval(function(){
    miContenerdor.classList.toggle("brillo");
},500);

//

console.log("cambiaremo al titulo");
var h1=document.querySelector(".title");
console.log(h1.innerHTML);
h1.innerHTML="Pizza con piña";

h1.innerHTML="<code>pizza con piña y bits</code>";

var nuevoParrafo=document.createElement("p");
var imagen=document.createElement("img");
nuevoParrafo.innerHTML="Hola soy nuevo :P"

var divpapa=document.getElementById("container")
var mititulo=document.getElementById("title")
console.log(mititulo);

//image
var imagen=document.createElement("img");
imagen.setAttribute("scr","https://www.google.com/url?sa=i&url=https%3A%2F%2Fperubicentenario.pe%2Factualidad%2Fchina-el-puente-colgante-de-doble-piso-mas-largo-del-mundo-se-abrio-al-trafico-tambien-tiene-ciclovia%2F&psig=AOvVaw3IrfNcYbgMQvnO96neEGb-&ust=1598147958553000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCyup3bresCFQAAAAAdAAAAABAI");
divpapa.appendChild(imagen);


//EVENTOS
var miBoton=document.getElementById("boton");
miBoton.addEventListener("click",function(){
    alert("haz dado clic")
})

var hipervinculo=document.getElementById("link");
hipervinculo.addEventListener("click",function(evento){
    evento.preventDefault();
})

//

var inputTarea=document.getElementById("inputTarea");
var btnTarea=document.getElementById("btntarea");
var lista=document.getElementById("lista");


//añadir a luna lista
btnTarea.addEventListener("click",function(){
    var textotarea=inputTarea.value;

    if (textotarea.trim() === ""){
        alert("No juegues conmigo")
    }else{
        console.log(textotarea);
        var li=document.createElement("li");
        lista.innerHTML=textotarea;
    
        lista.appendChild(li);
        inputTarea.value="";
       
    }

})