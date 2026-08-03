// Variaveis!!
let primeironumero
let  operador
let  segundonumero  
let resultadodaoperacao
let resultadofinal
let contaterminou = false

function digitar(value) {
      

    let resultado = document.getElementById("resultado");
      if (value == "." && resultado.textContent.includes(".")) {
       return 

    }

    if (operador == undefined) {


  
        if (resultado.textContent == "0"  || contaterminou == true) {
            resultado.textContent = value;
        } 
        
        
        else {
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



    contaterminou = false
}


function operadores (sinal)  {
  operador = sinal

   primeironumero = document.getElementById("resultado")
primeironumero = primeironumero.textContent

}

function calcular () {
resultadofinal = document.getElementById("resultado")

primeironumero = Number(primeironumero)
segundonumero = Number(segundonumero)

switch (operador) {
    

    case ("+"):
      resultadodaoperacao = primeironumero + segundonumero 

     resultadofinal.textContent  = resultadodaoperacao
     break;

       case ("-"):
      resultadodaoperacao = primeironumero - segundonumero 

     resultadofinal.textContent  = resultadodaoperacao
     break;

       case ("*"):
      resultadodaoperacao = primeironumero * segundonumero 

     resultadofinal.textContent  = resultadodaoperacao
     break;

       case ("/"):
    if ( segundonumero == 0) {
        resultadofinal.textContent = "indefinido"
        return
    }


      resultadodaoperacao = primeironumero / segundonumero 

     resultadofinal.textContent  = resultadodaoperacao
     break;

}
primeironumero = undefined
segundonumero = undefined
operador = undefined
contaterminou = true
    
}


function limpar () {
   let  clean = document.getElementById("resultado");

   clean.textContent = 0
}




