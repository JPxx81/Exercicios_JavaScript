// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".


function verificarAcertosLoteria() {

    const NUM_DEZENAS = 13
    const NUM_APOSTADORES = 100

    const gabarito = []
    for (let i = 0; i < NUM_DEZENAS; i++) {
        gabarito.push(Math.floor(Math.random() * 20) + 1)
    }
    console.log(`\n--- GABARITO DO SORTEIO ---`)
    console.log(gabarito.join(' | '))
    console.log(`---------------------------\n`)

    for (let i = 0; i < NUM_APOSTADORES; i++) {
        const numeroCartao = i + 1
        const respostasApostador = []
        let acertos = 0

        for (let j = 0; j < NUM_DEZENAS; j++) {
            respostasApostador.push(Math.floor(Math.random() * 20) + 1)
        }

        for (let k = 0; k < NUM_DEZENAS; k++) {
            if (gabarito[k] === respostasApostador[k]) {
                acertos++
            }
        }

        console.log(`Apostador Nº ${numeroCartao}:`)
        console.log(`  Respostas: [${respostasApostador.join(', ')}]`)
        console.log(`  Número de acertos: ${acertos}`)

        if (acertos === NUM_DEZENAS) {
            console.log(`  >>>> Parabéns, tu foi o GANHADOR! <<<<`)
        }
        console.log('---')
    }

    console.log(`\n--- Processamento de ${NUM_APOSTADORES} apostadores concluído. ---`)
}

verificarAcertosLoteria()