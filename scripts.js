//seleção dos elementos
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operador");
const botaoLimpar = document.querySelector(".limpar");

// variaveis globais
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

//funções

function atualizaDisplay(){
    display.value = operacaoAtual;
}


function insereNumero(evento){
    if(calculando){
    operacaoAtual = evento.target.textContent;
    calculando = false;

    }else{
        operacaoAtual+= evento.target.textContent;
    }
    atualizaDisplay();
}

function inserePonto() {  // indexof - encontrar algum indice de ponto.
    if(operacaoAtual.indexOf(".") === -1){
        operacaoAtual+= ".";
        atualizaDisplay();
    }
}

function insereOperador(evento){
    if(operacaoAtual !== ""){
        if(!calculando){
            if(operador !== null){

            }
            valorAnterior = operacaoAtual;
        }
        operador = evento.target.textContent;
        calculando = true;
    }
}
function calcula(){
    let resultado = null;
    const operandoAnterior = parseFloat(valorAnterior);
    const operandoAtual = parseFloat(operacaoAtual);

switch(operador){
    case"+":
    resultado = operandoAnterior + operandoAtual;
    break;
    case"-":
    resultado = operandoAnterior - operandoAtual;
    break;

    case"*":
    resultado = operandoAnterior * operandoAtual;
    break;

    case"/":
    resultado = operandoAnterior / operandoAtual;
    break;
}
operacaoAtual = String(resultado);
valorAnterior = operacaoAtual;
calculando = true;
atualizaDisplay();
}


function limparCalculadora(){
    operacaoAtual = "";
    operador = null;
    valorAnterior = "";
    calculando = false
    atualizaDisplay();
}
//evento

botaoPonto.addEventListener("click", inserePonto);
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));
botoesOperadores.forEach((botao) => botao.addEventListener("click", insereOperador));

botaoIgual.addEventListener("click", calcula);
botaoLimpar.addEventListener("click", limparCalculadora);


