ex2Impares = document.getElementById("impares");

let texto = "<h2>Vamos somar os números impares de 1 á 100</h2>"
let soma = 0;

for(let i = 1; i <=100; i+= 2){ //aumentar de 2 em 2 para garantir que os n sejam impares
        soma += i;
}


ex2Impares.innerHTML = `
    ${texto}
    <p>A soma é = ${soma}</p>
`