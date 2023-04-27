const nome = prompt ("Olá, qual o seu nome?");
const area = prompt(`Olá ${nome}! \nQual área você gostaria de atuar no futuro? :\n1-Back-End\n2-Front-End`)

 
    if (area == 1||area == "back-end"){
    const linguagem = prompt(`Muito legal você escolher esta área ${nome}\nE qual liguagem você tem interesse em aprender\n1-C#\n2-Java`);
        if (linguagem == 1||linguagem == "C#")
        {
            alert(`Muito bem ${nome}, boa sorte em sua jornada como desenvolvedor C# na área de Back-End!`);   
        }
        else if(linguagem == 2||linguagem == "java")
        {
            alert(`Muito bem ${nome}, boa sorte em sua jornada como desenvolvedor Java na área de Back-End`);
        }
    
    } else if (area == 2||area == "front-end"){
        const linguagem = prompt(`Muito legal você escolher esta área ${nome}\nE qual liguagem você tem interesse em aprender\n1-React\n2-Vue`);
            if (linguagem == 1||linguagem == "react")
            {
            alert(`Muito bem ${nome}, boa sorte em sua jornada como desenvolvedor React na área de Front-End!`);
            }
             if (linguagem == 2||linguagem=="vue")
     {
            alert(`Muito bem ${nome}, boa sorte em sua jornada como desenvolvedor Vue na área de Front-End!`);
        }
    }else{
        alert("opção indisponível");
    }

const escolha = prompt ("Agorá que você escolheu sua área e a linguagem a ser aprendida , você deseja se especializar nesta área ou se desenvolver para virar fullstack?\n1-Especializar\n2-Fullstack");
        if(escolha == 1 || escolha=="especializar"){
            alert("Muito bem! continue seus estudos que você terá muito sucesso!")
        }else if (escolha == 2 || escolha == "fullstack"){
            alert("Muito bem! Continue seus estudos se aprofundando em diversas linguagens!")
        }
        else{
            alert("Opção indisponível")
        }
        
let msg = prompt("Você gostaria de aprender ou conhecer alguma nova linguagem? Digite 'ok' caso positivo.")
        while(msg =="ok"){
            let novaLinguagem = prompt("Qual?")
            alert(`A ${novaLinguagem} é muito legal`)
            msg = prompt("Tem mais alguma tecnologia do seu interesse? digite 'ok' caso positivo.")
        }
alert("Muito obrigado por preencher o nosso formulário")

