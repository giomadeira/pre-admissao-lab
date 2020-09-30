//Mostrar na tela de boas vindas um prompt () que peça o nome do usuário;
 const nome = prompt('Qual é o seu nome ?')
document.write ('Olá, '+ nome + '!') 

//Perguntar se quer iniciar o teste. Sim ou não, se sim vai para prova senão encerrra;
let start='Você desejar iniciar agora? Coloque o número correspondente:';
let yes='1 para SIM \n';
let no='2 para NÃO';
const quebra='\n\n';
const jogar = prompt(start + quebra + yes + no)
if (jogar == 2){alert("Sua visita foi encerrada. Obrigada por acessar este quiz")
}else {let questaoUm = prompt('Quanto é 5+7? =');
let questaoDois  = prompt('Qual o nome da única presidenta mulher que país já teve?')
let questaoTres  = prompt('Em qual país estamos?')} 

//Mostrar na tela os resultados dos acertos e erros;
if (questaoUm != 12){'resposta incorreta'} else {'resposta correta'};
if (questaoDois != Dilma) {'resposta incorreta'} else {'resposta correta'};
if (questaoTres != Brasil) {'resposta incorreta'} else { 'resposta correta'};
