// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim:

// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)

// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês. Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.


const prompt = require('prompt-sync')()  // Entrada do Usuário

function calcularPontosAtividade() {

    const horasAtividade = Number(prompt("Quantas horas de atividade física você fez no mês? "))

// Validação da entrada de horas

    if (isNaN(horasAtividade) || horasAtividade < 0) {
        console.log("Por favor, digite um número válido de horas de atividade (não negativo).")
        return; // Encerra a função se a entrada for inválida
    }

    let pontosPorHora = 0
    let pontosTotais = 0
    const valorPorPonto = 0.05 // R$ 0,05 por ponto

    if (horasAtividade <= 10) {
        pontosPorHora = 2
        pontosTotais = horasAtividade * pontosPorHora;
    } else if (horasAtividade <= 20) { // Entre 10h e 20h
        
// Calcula os pontos das primeiras 10h e o restante a 5 pontos/hora

        pontosTotais = (10 * 2) + ((horasAtividade - 10) * 5)
    } else { // Acima de 20h

// Calcula os pontos das primeiras 10h (2 pontos), depois as próximas 10h (5 pontos) e o restante a 10 pontos/hora

pontosTotais = (10 * 2) + (10 * 5) + ((horasAtividade - 20) * 10)
}

    const dinheiroGanho = pontosTotais * valorPorPonto;

    console.log(`\n--- Resumo da Atividade Física ---`)
    console.log(`Horas de atividade no mês: ${horasAtividade} horas`)
    console.log(`Total de pontos ganhos: ${pontosTotais} pontos`)
    console.log(`Dinheiro ganho: R$ ${dinheiroGanho.toFixed(2)}`) // Formata para 2 casas decimais
}

// Chama a função para executar o programa

calcularPontosAtividade()