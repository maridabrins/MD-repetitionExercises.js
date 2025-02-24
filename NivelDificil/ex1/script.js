const ex1Armstrong = document.getElementById('armstrong') 

let texto = "<h2>Vamos apresentar os números de Armstrong de 100 á 1000: </h2>"

for(let i = 100; i <= 1000; i++){
    const num = i;
//pegando o número e conventendo para uma string
const transfString = num.toString().split('') //split separa em arrays ex: ["1", "0", "0"]

let soma = transfString.reduce((acc,digito) => acc + Math.pow(Number(digito),3),0);

if(soma === num){
    texto += `<p>${num}</p>`
}
    
}

ex1Armstrong.innerHTML = ` ${texto}`;