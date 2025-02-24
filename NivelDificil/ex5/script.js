ex5Binario = document.getElementById('binario')

let numeroDecimal = parseInt(prompt("Digite um número decimal:"));

let texto = "<h2>Vamos converter de decimal para binário</h2>"

let binario = '';
let numero = numeroDecimal;

if (numero === 0) {
    binario = '0';
  } 
  else {
    while (numero > 0) {
      binario = (numero % 2) + binario;
      numero = Math.floor(numero / 2);
    }
    texto += `${numero}`
  }

 ex5Binario.innerHTML= `${texto} Em binário é: ${binario}`;
