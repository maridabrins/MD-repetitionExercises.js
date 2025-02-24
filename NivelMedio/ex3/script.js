ex3Fatorial = document.getElementById("fatorial");

let numero = parseInt(prompt("Digite um número que deseja saber o seu fatorial:"));
let fatorial = 1;
let calculo = "";
for(let i = numero; i>= 1; i--){
    fatorial *= i;

    if (i === numero) {
        calculo += `${i}`;
    } else {
        calculo += ` × ${i}`; 
    }
}
ex3Fatorial.innerHTML = `
    <h2>Fatorial de ${numero}!</h2>
    <p>${numero}! = ${calculo} = ${fatorial}</p>
`;