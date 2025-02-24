exSoma = document.getElementById("soma");

let mensagem = "<h2>Vamos apresentar a soma dos números de 1 á 5: </h2>"

let soma = 0;

for(let i = 1; i <= 5; i++){
    soma += i;
    texto = `a soma total é = ${soma}`;
}
 
exSoma.innerHTML = `${mensagem} ${texto}`;