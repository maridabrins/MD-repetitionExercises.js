ex9Media = document.getElementById("media");

let texto = "Vamos apresentar a média das ultimas notas";
let soma = 0;

for(let i = 1; i <= 3; i++){
    let notas = Number(prompt(`Digite ${i}ª nota: `));

    soma += notas;
}

let media = soma / 3;

ex9Media.innerHTML = `
    <h2>${texto}</h2>
    <p>Média =${media.toFixed(1)}</p>
`