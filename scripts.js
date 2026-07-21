function  digitar (value) { 

    let resultado = document.getElementById("resultado");
    

    if (resultado.textContent == "0") {
        resultado.textContent = value
    } else  {
        
resultado.textContent += value
    }


}

function limpar () {
   let  clean = document.getElementById("resultado");

   clean.textContent = 0
}

