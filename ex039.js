// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.


function compactarVetor() {

    const tamanhoA = 100
    const A = []
    const B = []

    console.log("--- Vetor Original A (100 posições) ---")
    for (let i = 0; i < tamanhoA; i++) {
        A.push(Math.round(Math.random() * 100 - 50))
    }

    console.log(`Vetor A gerado com ${A.length} elementos.`)

    for (let i = 0; i < tamanhoA; i++) {

        if (A[i] > 0) {
            B.push(A[i])
        }
    }

    console.log("\n--- Vetor B Compactado (apenas valores positivos) ---")
    if (B.length > 0) {
        console.log(`Vetor B contém ${B.length} elementos:`)
        console.log(B.join(', '))
    } else {
        console.log("O vetor B está vazio, pois não foram encontrados valores positivos no vetor A.")
    }
}

compactarVetor()