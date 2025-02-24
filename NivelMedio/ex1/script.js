exTabuada = document.getElementById("tabuada");

let texto = "";
let tabuada = parseInt(prompt("Digite um número que deseja saber a tabuada"))

for(let i = 1; i <=10; i++){
    let multiplicacao = tabuada * i;

    texto += `<p>${tabuada}x${i} = ${multiplicacao}</p>`;
}
exTabuada.innerHTML = `
    <h2>Tabuada do ${tabuada}</h2><br>
    <p>${texto}</p>
`