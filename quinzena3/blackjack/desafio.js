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
       let carta = comprarCarta();
       let carta2 = comprarCarta();
       let somaJogador = (carta.valor + carta2.valor)
       let cartasJogador = [carta, carta2]
      
       console.log("Usuário - cartas:", carta, carta2, "- pontuação", somaJogador)
    
       //selecionar carta do computador
       let cartaComputador = comprarCarta();
       let cartaComputador2 = comprarCarta();
       let somaComputador = (cartaComputador.valor + cartaComputador2.valor)
       let cartasComputador = [cartaComputador, cartaComputador2]
       console.log("Computador - cartas:", cartaComputador, cartaComputador2, "- pontuação", somaComputador)

       while (confirm(
         "Suas cartas são ", cartasJogador, "A carta revelada do computador é ", cartaComputador, "." +
         "\n"+  // \n faz pular a linha
         "Deseja comprar mais uma carta?"
      ){
         let cartasJogador = [carta, carta2]
         let cartaComputador = comprarCarta()

      }

      
       
       

       
       

       
       
       
       
       
       
       
       /*  if (soma === somaComputador) {
             console.log("Empate!")
    
          } else if (soma > somaComputador) {
             console.log("O usuário ganhou!")
          } else if (somaComputador > soma) {
             console.log("O computador ganhou!")
          } 
    } else {
             console.log("O jogo acabou!")
          }*/

         }
