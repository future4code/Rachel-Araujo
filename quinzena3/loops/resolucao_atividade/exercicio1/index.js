let condicao = true
let somaAtual = 0
let cancela = false

// laço
while(condicao && !cancela) {
    let valor = Number(prompt("Insira um número:"))
    let querContinuar = prompt("Quer continuar?")

    if (valor === 0) {
        condicao = false
    }

    if (querContinuar === "sim") {
        cancela = true
    }

    somaAtual += valor
}

console.log(somaAtual)

// // Versão compacta
// let somaAtual = 0

// let valor = Number(prompt("Insira um número:"))

// // laço
// while(valor !== 0) {
//     somaAtual += valor
//     valor = Number(prompt("Insira um número:"))
// }

// console.log(somaAtual)