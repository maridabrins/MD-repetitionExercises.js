ex1Contar = document.getElementById("contar");

let texto = "<h2>Vamos contar até 10: </h2>";

for(let i = 1;  i <= 10; i++){
texto += `<li>${i}</li>`;
}

ex1Contar.innerHTML = texto;
