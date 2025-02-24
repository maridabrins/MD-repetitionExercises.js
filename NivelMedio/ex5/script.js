ex5Maior = document.getElementById("maior-numero");

let texto = "Vamos ver qual número digitado é o maior: ";

let maiorNumero = Number.MIN_SAFE_INTEGER; //menor número possível
for (let i = 1; i <=5; i++){
    let numeros = parseFloat(prompt("Digite 5 números"));

    if(numeros > maiorNumero){
        maiorNumero = numeros
    }
}

ex5Maior.innerHTML = `
    <p>O maior número digitado foi o ${maiorNumero}</p>
`;
