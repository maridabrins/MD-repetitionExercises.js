ex2Pares = document.getElementById("pares");

let texto = "<h2>Vamos apresentar os números pares até 20: </h2>";


for(let i = 1; i <21; i++){
    if(i % 2 === 0){
        texto += `<li>${i}</li>`;
    }
}
ex2Pares.innerHTML = texto;