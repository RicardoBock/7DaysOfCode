const nome = prompt("Qual o seu nome?");
const idade = prompt ("Qual a sua idade?");
const linguagem = prompt("Qual linguagem de programação você esta estudando?")
const msg=`"Olá! ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"`;

alert(msg);

const gosta = prompt(`"Você esta gostando de estudar ${linguagem}? Responda com o número 1 para SIM e com o número 2 para não"`);
if (gosta==1)
{
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
else if (gosta==2)
{
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
else
{
    alert("Opção indisponível!")
}