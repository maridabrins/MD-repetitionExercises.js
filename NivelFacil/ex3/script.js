ex3Regressiva = document.getElementById("regressiva");

let texto = "<h2>Vamos apresentar os números em ordem decrescente: </h2>"
let i =10;
while(i >= 1){
    texto += `<li>${i}</li>`;
    i--;
}

ex3Regressiva.innerHTML = texto;