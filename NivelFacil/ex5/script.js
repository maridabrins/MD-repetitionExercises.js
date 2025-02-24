ex5Multiplos = document.getElementById("multiplos");

let texto = "<h2>Vamos apresentar os múltiplos de 3 á 15: </h2>"

let numero = 3;

for(let i = 1; i <= 5; i++){
    let multiplicacao = i * 3;

    texto += `
    <p>${numero}x${i} = ${multiplicacao}</p>
    `
}
ex5Multiplos.innerHTML = texto;