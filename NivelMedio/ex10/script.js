ex10Piramide = document.getElementById('piramide');

let texto = "<h2>Aqui vai uma piramide de asterisco: </h2>"

let linha = 5;
// Lógica 1ª linha = 1
//2ª linha = 3
//3ª linha = 5
//4ª linha = 7
//5ª linha = 9
for(let i = 1; i <= linha ; i++){
    //quanto maior o i menos espaço tera
    let espaco = "&nbsp;".repeat((linha - i) * 2); //&nbsp; espaço não quebravel no HTML
    let asterisco = "*".repeat(i * 2 - 1); // ex 1x2 - 1 = 1

    texto += `<p>${espaco}${asterisco}</p>`
}

ex10Piramide.innerHTML = `
    ${texto}
`