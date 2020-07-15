// Estrutura básica de uma função

function soma (n1, n2){
    return n1 + n2;
}

//console.log(soma(10, 5));

var validar = 0;

function validarIdade (idade){
    validar;
    if(idade >= 18){
        validar = true;
    }else {
        validar = false;
    }
    return validar;
}

//var idade = prompt("Qual sua idade?");
//console.log(validarIdade(idade));

// Manupulando elementos da pagina com DOM

function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!!<b>"
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!!");
}

function trocar(elemento){
    //document.getElementById("umElementoHtml").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Carregado com sucesso!!");
}

function functioChange(elemento){
    console.log(elemento.value);
}