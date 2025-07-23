// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário.


function corrigirProva() {

    const NUM_QUESTOES = 20
    const NUM_ALUNOS = 50
    const MIN_ACERTOS_APROVACAO = 12

    function gerarRespostaAleatoria() {
        const opcoes = ['A', 'B', 'C', 'D', 'E']
        const indiceAleatorio = Math.floor(Math.random() * opcoes.length)
        return opcoes[indiceAleatorio];
    }

    const gabarito = []
    for (let i = 0; i < NUM_QUESTOES; i++) {
        gabarito.push(gerarRespostaAleatoria())
    }
    console.log(`\n--- GABARITO DA PROVA ---`)
    console.log(gabarito.join(' | '))
    console.log(`---------------------------\n`)

    for (let i = 0; i < NUM_ALUNOS; i++) {
        const numeroAluno = i + 1
        const respostasAluno = []
        let acertos = 0

        for (let j = 0; j < NUM_QUESTOES; j++) {
            respostasAluno.push(gerarRespostaAleatoria())
        }
        for (let k = 0; k < NUM_QUESTOES; k++) {
            if (gabarito[k] === respostasAluno[k]) {
                acertos++
            }
        }

        console.log(`Aluno Nº ${numeroAluno}:`)
        console.log(`  Respostas: [${respostasAluno.join(', ')}]`)
        console.log(`  Número de acertos: ${acertos}`)

        if (acertos >= MIN_ACERTOS_APROVACAO) {
            console.log(`  Situação: APROVADO`)
        } else {
            console.log(`  Situação: REPROVADO`)
        }
        console.log('---')
    }

    console.log(`\n--- Processamento de ${NUM_ALUNOS} alunos concluído. ---`)
}

corrigirProva()