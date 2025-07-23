// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados.


function calcularSomasLinhasEColunas() {

    const tamanho = 5
    const M = []
    const SL = new Array(tamanho).fill(0)
    const SC = new Array(tamanho).fill(0)

    console.log("--- Matriz M (5x5) ---")
    for (let i = 0; i < tamanho; i++) {
        const linha = []
        for (let j = 0; j < tamanho; j++) {
            const numeroAleatorio = Math.floor(Math.random() * 10) + 1
            linha.push(numeroAleatorio)
        }
        M.push(linha)
        console.log(linha.join('\t'))
    }
    console.log('\n')

    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            SL[i] += M[i][j]
            SC[j] += M[i][j]
        }
    }
    console.log("--- Vetor SL (Somas das Linhas) ---")
    console.log(SL)
    console.log('\n')
    console.log("--- Vetor SC (Somas das Colunas) ---")
    console.log(SC)
}

calcularSomasLinhasEColunas()