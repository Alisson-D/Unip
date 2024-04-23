const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const resultado = document.querySelector("#resultado")

const clicar = () =>{
    if( altura.value > 0 && peso.value > 0 && altura.value != "" && peso.value !="")
    {resultado.innerHTML = (peso.value / (altura.value**2)).toFixed(2) /*toFixed vai fixar duas casa decimais*/ 
}
    else{
        alert("coloque um valor válido")
    }

}