ex3Crescente = document.getElementById('crescente')

let texto = "<h2>Vamos apresentar os números dígitados em ordem crescente</h2>"

let numero = [] // o short é uma função de array então deve ser declarado em chaves

for (let i = 1; i <= 5; i++){
    num = Number(prompt(`Digite o ${i}º número`))
    numero.push(num); //metodo array que adiciona uma novo elemento
}
//indicando que o 10 vem antes do 2
numero.sort((a,b)=> a-b); //metodo array que coloca os números em ordem crescente


numero.forEach((num) => {
    texto += `<li>${num}</li>`;
});

ex3Crescente.innerHTML = `${texto} `;