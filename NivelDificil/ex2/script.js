ex2Jogos = document.getElementById("jogo")

let texto = "Vamos sortear um número aleatório, tente adivinhar"

let numeroAleatorio = ( Math.random()* 100) + 1

let tentativa = Number(prompt("1ª Tentativa! \nDigite um número:  "))
let tentativas = 1

let i = 0;

while (numeroAleatorio !== tentativa){
    if(numeroAleatorio < tentativa){
        texto += `Tentativa ${tentativas}: O número é maior que ${tentativa}\n`
        
    } else if (numeroAleatorio > tentativa){
        texto += `Tentativa ${tentativas}: O número é menor que ${tentativa}\n`
    } 
    tentativa = Number(prompt(`Tentativa ${tentativas + 1}! \nDigite outro número:`));
    tentativas++;
    }
    
 texto += `Parabéns, o número está correto! ${numeroAleatorio}`
    


 ex2Jogos.innerHTML = `${texto}` 


