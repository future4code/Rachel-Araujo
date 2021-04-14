// Exercicio 1
function imprimirOlaMundo() {
    console.log('Olá, Mundo!')
  }
  
  // imprimirOlaMundo()
  
  // Exercicio 2
  function imprimirOlaNome(nome) {
    console.log('Olá ' + nome)
  }
  
  // imprimirOlaNome('Darvas')
  // imprimirOlaNome('Bruno')
  // imprimirOlaNome('Amanda')
  // imprimirOlaNome('Chijo')
  // imprimirOlaNome('Lais')
  // imprimirOlaNome('Caio')
  
  // Exercício 3
    const soma = (num1, num2) => {
    console.log('ANTES DO RETURN')
    return num1 + num2
  }
  
  const valorSomado = soma(1,2)
  console.log(valorSomado)
  
  // Exercício 4
  
  // Declaração
  // function imprimeValoresDoArray(array) {
  //   for(let i = 0; i < array.length; i++) {
  //     console.log(array[i])
  //   }
    
  //   return array.length
  // }
  
  // Expressão
  const imprimeValoresDoArray = function(array) {
    for(let i = 0; i < array.length; i++) {
      console.log(array[i])
    }
    
    return array.length
  }
  
  const tamanho = imprimeValoresDoArray(['a', 'b', 'c', 'd'])
  console.log(tamanho)
  