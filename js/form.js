
var botaoadicionar = document.querySelector("#adicionar-paciente");
    botaoadicionar.addEventListener("click",function(event){
    event.preventDefault();
     
    var form = document.querySelector("#form-adiciona");
     
    var paciente = infoPacinteFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);
    
    if(erros.length > 0 ){
        exibeMensagensDeErro(erros);
        return;
    }
    
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

    var mostrarMensagensErro = document.querySelector("#mensagens-erro");
    mostrarMensagensErro.innerHTML = "";

    });     

function exibeMensagensDeErro(erros){

    var ul = document.querySelector("#mensagens-erro");
     ul.innerHTML = "";
        
        erros.forEach(function (erro) {

        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        
    });
}

function infoPacinteFormulario (form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculeImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){

    var td = document.createElement("td");

    td.textContent = dado;
    td.classList.add(classe);

    return td;

    }   

function validaPaciente(paciente){
        
    var erros = [];
        
    if(paciente.nome.length == 0){

        erros.push ("Nome inválido!");
    }
    
    if(paciente.peso.length == 0){

        erros.push ("Peso não pode ser 0");
    }
    
    if(!validaPeso(paciente.peso)){

        erros.push ("Peso inválido!");
    }
    
    if(paciente.altura.length == 0){

        erros.push("Altura não pode ser 0");
    }
    
    if(!validaAltura(paciente.altura)){

        erros.push ("Altura inválida!");
    }

    if(paciente.gordura.length == 0){
        
        erros.push ("Gordura inválida");
    }

    return erros;
}
