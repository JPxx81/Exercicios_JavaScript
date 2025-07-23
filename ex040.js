// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)


function verificarGanhadoresLoto() {

    const NUM_DEZENAS = 5
    const NUM_APOSTAS = 50

    function gerarDezenasAleatorias(quantidade, limite) {
        const dezenas = []
        while (dezenas.length < quantidade) {
            const numero = Math.floor(Math.random() * limite) + 1
            if (!dezenas.includes(numero)) {
                dezenas.push(numero)
            }
        }
        return dezenas.sort((a, b) => a - b)
    }

    const resultadoOficial = gerarDezenasAleatorias(NUM_DEZENAS, 60)
    
    console.log(`\n--- Resultado Oficial da Loto ---`)
    console.log(`[${resultadoOficial.join(', ')}]`)
    console.log(`----------------------------------\n`)

    let totalGanhadores = 0

    for (let i = 0; i < NUM_APOSTAS; i++) {
        const apostasFeitas = gerarDezenasAleatorias(NUM_DEZENAS, 60)
        let acertos = 0

        for (let j = 0; j < NUM_DEZENAS; j++) {
            const numeroApostado = apostasFeitas[j]

            if (resultadoOficial.includes(numeroApostado)) {
                acertos++
            }
        }
        
        if (acertos === NUM_DEZENAS) {
            totalGanhadores++
            console.log(`Aposta Nº ${i + 1}: [${apostasFeitas.join(', ')}]`)
            console.log(`  >>>> Ganhador! <<<<`)
        }
    }

    console.log(`\n--- Verificação Concluída ---`)
    console.log(`Total de apostas verificadas: ${NUM_APOSTAS}`)
    console.log(`Total de Ganhadores (Quinas): ${totalGanhadores}`)
}

verificarGanhadoresLoto()