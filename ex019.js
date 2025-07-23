// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.


const prompt = require('prompt-sync')() // Entrada do Usuário

function lerHorario() {
    let horario = prompt("Digite o horário (HH:MM:SS): ")
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/

    while (!regex.test(horario)) {
        console.log("Horário inválido. Por favor, digite no formato HH:MM:SS.")
        horario = prompt("Digite o horário (HH:MM:SS): ")
    }

    return horario
}

function exibirHorario(horario) {
    const [horas, minutos, segundos] = horario.split(':')
    console.log(`Horário: ${horas}.${minutos}.${segundos}`)
}

function main() {
    const horarios = []
    for (let i = 0; i < 5; i++) {
        console.log(`\nHorário ${i + 1}:`)
        const horario = lerHorario()
        horarios.push(horario)
    }

    console.log("\nHorários digitados:")
    horarios.forEach((horario, index) => {
        console.log(`Horário ${index + 1}: ${horario}`)
        exibirHorario(horario)
    })
}

// Inicia o programa

main()