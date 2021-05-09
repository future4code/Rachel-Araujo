//Exercício 1

function inverteArray(array) {

   let arrayInvertido = [];
   for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i])
   }
   return arrayInvertido

}



//inverteArray([0, 8, 23, 16, 10, 15, 41, 12, 13])

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   let nArray = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         nArray.push(array[i] * array[i])
      }
   }
   return nArray
}

//Exercício 3

function retornaNumerosPares(array) {
   let arrayVazio = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         arrayVazio.push(array[i])
      }
   }
   return arrayVazio
}



//Exercício 4

function retornaMaiorNumero(array) {
   let maior = 0
   for (let i = 0; i < array.length; i++)
      if (array[i] > maior) {
         maior = array[i]
      }
   return maior
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {

   return [false, false, true, true, true]
}

//Exercício 7

function retornaNNumerosPares(n) {
   const novoArray = [];
   for (let i = 0; novoArray.length < n; i++) {
      if (i % 2 === 0) {
         novoArray.push(i)
      }
   }
   return novoArray
}

// Exercício 8

function checaTriangulo(a, b, c) {

   if (a !== b && b !== c) {
      return 'Escaleno'
   } else if (a === b && b === c) {
      return 'Equilátero'
   } else {
      return 'Isósceles'
   }
}


// Exercício 9

function comparaDoisNumeros(num1, num2) {

   let maiorNumero;
   let maiorDivisivelporMenor;
   let menorNumero;


   if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
   } else {
      maiorNumero = num2;
      menorNumero = num1;
   }
   maiorDivisivelporMenor = maiorNumero % menorNumero === 0;

   const diferenca = maiorNumero - menorNumero;

   return {
      maiorNumero: maiorNumero,
      maiorDivisivelporMenor: maiorDivisivelporMenor,
      diferenca: diferenca
   }

}


// Exercício 10

function segundoMaiorEMenor(array) {

   //Não consegui compreender a lógica para resolução da questao
}

//Exercício 11

function ordenaArray(array) {

   //Não consegui compreender a lógica para resolução da questao

}

// Exercício 12

function filmeFavorito() {
   let filme = {
      nome: 'O Diabo Veste Prada',
      ano: Number(2006),
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme
}

// Exercício 13

function imprimeChamada() {
 
   let filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}


// Exercício 14

function criaRetangulo(lado1, lado2) {
   const retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: (lado1 * lado2)
   }
   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   return {
      ...pessoa,
      nome: 'ANÔNIMO'
   }
}



// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {

   const novoArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 18
   })
   return novoArray
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const arrayMenores = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 18
   })
   return arrayMenores
}


// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

//Exercício 19, letra A

function ordenaPorNome() {

}

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {

}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
}
