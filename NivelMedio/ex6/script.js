ex6Vogais = document.getElementById('vogais');

let texto = "Vamos fazer uma contagem de vogais";

function contarVogais(frase){
    let vogais = "aAeEiIoOuU"
    let contador = 0;

    for(let i = 0; i < frase.length; i++){
        if(vogais.includes(frase[i])){
            contador ++;
        }
    }
    return contador;
}
let frase = prompt("Escreva sua frase: ");
const totalVogais = contarVogais(frase);

ex6Vogais.innerHTML = `
<h3>${texto}</h3> <br>
<p>Soma de vogais = ${totalVogais}</p>
`
