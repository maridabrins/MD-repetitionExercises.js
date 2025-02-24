ex8Primos = document.getElementById('primos');

let texto = "<h2>Vamos apresentar os números primos de 1 á 20: </h2>"

for (let num = 1; num <= 20; num++) {
    let primo = num > 1;
    //loop começa com dois pois os números primos são divisiveis por 1
    for (let i = 2; i < num; i++) { // i < num pois números primos são divisiveis por ele mesmo
        if (num % i === 0) {
            primo = false;
            break; 
}
    }
    texto += primo ? `<ul>${num} </ul>` : " ";
}

ex8Primos.innerHTML = `
    ${texto}
`