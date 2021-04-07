/*const a = Number(prompt("Insira o número a:"))
const b = Number(prompt("Insira o número b:"))

if (a === b) {
    console.log("Uhuu, sucesso!")
}*/

//EXERCICIO 1
//O código valida o número digitado pelo usuário e compara se o mesmo é par ou impar, sendo par, retorna a mensagem "Passou no teste." e sendo impar, "Não passou no teste."
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/


//EXERCÍCIO 2

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    //break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/

//a. O código acima apresenta o preço da fruta que o usuário escolher.
//b. O preço da fruta  Maçã  é  R$  2.25
//c. O preço da fruta  Pêra  é  R$  5.5



//EXERCICIO 3

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
  let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/
//a. A primeira linha solicita que o usuário digite um número e transforma o tipo dovalor digitado em inteiro.
//b. Esse número passou no teste. Se o número digitado for -10, não será impressa mensagem, pois não foi criada uma condição else.
//c. Sim. index.js:22 Uncaught ReferenceError: mensagem is not defined. Este erro foi causado, pois o console.log, está chamando uma variável que está dentro do bloco do if.



//EXERCÍCIO 4

/*const idade = Number (prompt("Qual sua idade?"))
console.log (idade)

if (idade>=18) {
    console.log("Você pode dirigir")
} else {
  console.log("Você não pode dirigir.")
}*/



//EXERCICIO 5

/*const turno = prompt("Em qual turno você estuda? M (matutino), V (vespertino) ou N (noturno)")

if (turno === "M"){
  console.log("Bom Dia!")
} 
else if (turno === "V"){
  console.log("Boa Tarde!")
} 
else if(turno === "N"){
  console.log("Boa Noite!")
}*/



//EXERCICIO 6

/*const turno = prompt("Em qual turno você estuda? M (matutino), V (vespertino) ou N (noturno)")

switch (turno) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default :
        console.log("Opção inválida!")
}*/



//EXERCICIO 7

/*const genero = prompt("Qual o gênero de filme que irão assistir? (fantasia, comédia, romance)")
const preco = Number(prompt("Qual o valor do ingresso?"))


if (preco < 15 && genero === "fantasia"){
  console.log("Bom filme!")
} else {
  console.log("Escolha outro filme :(")
}*/



//DESAFIO 1

/*const genero = prompt("Qual o gênero de filme que irão assistir? (fantasia, comédia, romance)")
const preco = Number(prompt("Qual o valor do ingresso?"))
const snack = prompt("Escolha o snack deseja comprar: pipoca, chocolate, doces, refrigerante")

if (preco < 15 && genero === "fantasia"){  
  console.log("Bom filme! ...com ", snack)
} else {
  console.log("Escolha outro filme :(")
}*/


//DESAFIO 2

const nome = prompt("Nome completo:")
const tipoJogo = prompt("Tipo de Jogo: IN (internacional), DO (doméstico)")
const etapaJogo = prompt("Etapa do Jogo: SF (semi-final), DT (decisão de terceiro lugar), FI(final)")
const categoria = prompt("Categoria: 1, 2, 3, 4")
const quantidade = Number(prompt("Quantidade de ingressos:"))
