 
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var tdimc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso < 0 || peso > 500){
    console.log("Peso invalido");
    pesoEhValido = false;
}

if(altura < 0 || altura > 3.00){
    console.log("Altura Invalida");
    alturaEhValida = false;
}

if(alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
   tdimc.textContent = imc;
}
    
}




