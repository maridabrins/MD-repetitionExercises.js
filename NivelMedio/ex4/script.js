ex4Fibonacci = document.getElementById("fibonacci");

let texto = "<h2>Vamos apresentar os 10 primeiros números da sequência de Fibonacci: </h2>";

let i = 1;
let a = 0, b = 1;
while(i <=11){
    texto += a + " ";
    let aux = a + b;
    a = b;
    b = aux;
    i++;
}

ex4Fibonacci.innerHTML = texto;