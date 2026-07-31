// Variaveis!!
  let primeironumero
let  operador
let  segundonumero  



function digitar(value) {

    let resultado = document.getElementById("resultado");

    if (operador == undefined) {

        if (resultado.textContent == "0") {
            resultado.textContent = value;
        } else {
            resultado.textContent += value;
        }

    } else {
        
       if (segundonumero == undefined) {
        resultado.textContent = value
        segundonumero = value

        }
        else {
            resultado.textContent += value
            segundonumero += value
        }
    }
}


function operadores (sinal)  {
  operador = sinal

   primeironumero = document.getElementById("resultado")
primeironumero = primeironumero.textContent

}

function calcular () {


}


function limpar () {
   let  clean = document.getElementById("resultado");

   clean.textContent = 0
}




