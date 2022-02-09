// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();


}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    return array

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    let arrayPares = array.filter(pares => (pares % 2) === 0);
    return arrayPares;


}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = array.filter(pares => (pares % 2) === 0);

    const paresElevados = arrayPares.map(par => par ** 2)
    return paresElevados

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let maiorNumero = array.reduce(function (a, b) {
        return Math.max(a, b);
    })
    return maiorNumero

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = Math.max(num1, num2)
    let maiorDivisivelPorMenor = num2 % num1 === 0
    let diferenca = maiorNumero - Math.min(num1, num2)

    const resultados = { 'maiorNumero': `${maiorNumero}`, 'maiorDivisivelPorMenor': `${maiorDivisivelPorMenor}`, 'diferenca': `${diferenca}` }
    return resultados
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA == ladoB && ladoA == ladoC) {
        return <p>'Equilátero'</p>
    } else {
        if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC)
            return <p>'Isosceles'</p>
    } else {
        return <p>'Escaleno'</p>


    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}