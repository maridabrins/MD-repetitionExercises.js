ex4Triangulo = document.getElementById('triangulo-pascal')

let texto = "<h2>Triângulo Pascal: </h2>"
let linhas = 5;

for (let i = 0; i < linhas; i++) {
  let linha = '';

  for (let e = 0; e < linhas - i - 1; e++) {
    linha += ' ';
  }

  for (let j = 0; j <= i; j++) {
    let numero = 1;


    for (let k = 0; k < j; k++) {
      numero *= (i - k) / (k + 1);
    }

    linha += numero + ' ';
  }
    texto += linha + '<br>'
} 

ex4Triangulo.innerHTML = ` ${texto} `



