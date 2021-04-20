/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   console.log("Iniciar nova rodada!")

   //selecionar carta do usuário
   const carta = comprarCarta();
   const carta2 = comprarCarta();
   const soma = (carta.valor + carta2.valor)

   console.log("Usuário - cartas:", carta.texto, carta2.texto, "- pontuação", soma)

   //selecionar carta do computador
   const cartaComputador = comprarCarta();
   const cartaComputador2 = comprarCarta();
   const somaComputador = (cartaComputador.valor + cartaComputador2.valor)

   console.log("Computador - cartas:", cartaComputador.texto, cartaComputador2.texto, "- pontuação", somaComputador)

      if (soma === somaComputador) {
         console.log("Empate!")

      } else if (soma > somaComputador) {
         console.log("O usuário ganhou!")
      } else if (somaComputador > soma) {
         console.log("O computador ganhou!")
      } 
} else {
         console.log("O jogo acabou!")
      }
   

