ex7Inverso = document.getElementById('inverso');

let texto = "Vamos apresentar a frase invertida: ";

let palavra = prompt("Digite a frase que deseja inverter");
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

ex7Inverso.innerHTML = `
    <h2>${texto}</h2>
    <p>${palavraInvertida}</p>
`
