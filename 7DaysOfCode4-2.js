const numCerto = Math.floor(Math.random() * (10- 1) + 1); ;
console.log(numCerto)
contador = 2;
ganhou = 0;
while (contador >=0 ){
    chute = prompt ("Seja bem vindo ao jogo de adivinhação\nEscolha um número de 1 a 10!")
        if (chute == numCerto){
            ganhou = 1;
            break
        }else{
            contador = contador - 1;
            alert("Errado, tente novamente.")
        }
}

if(ganhou == 1)
{
    alert("Parabéns, você venceu o jogo")
}
else if (ganhou == 0)
{
    alert("Você perdeu o jogo")
}
