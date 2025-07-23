// 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

// 1. Estrutura de Dados:

// ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis.
// ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.

// 2. Funcionalidades:

// ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
// ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
// ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
// ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
// ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.

// 3. Regras de Negócio:

// ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
// ○ As reservas devem ser identificadas por um ID único e associadas a um único hotel.

// 4. Desafios Adicionais (Opcionais):

// ○ Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
// ○ Gerar relatórios de ocupação para um hotel.
// ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel.


const prompt = require('prompt-sync')()

const hoteis = []
const reservas = []

let proximoIdHotel = 1
let proximoIdReserva = 1

function gerarIdHotel() {
    return proximoIdHotel++
}

function gerarIdReserva() {
    return proximoIdReserva++
}

function adicionarHotel() {
    console.log("\n--- Adicionar Novo Hotel ---")
    const nome = prompt("Nome do hotel: ")
    const cidade = prompt("Cidade do hotel: ")
    const quartosTotais = parseInt(prompt("Número total de quartos: "))

    if (isNaN(quartosTotais) || quartosTotais <= 0) {
        console.log("Número de quartos inválido. Operação cancelada.")
        return
    }

    const novoHotel = {
        id: gerarIdHotel(),
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosTotais
    }

    hoteis.push(novoHotel)
    console.log(`Hotel "${novoHotel.nome}" adicionado com sucesso! ID: ${novoHotel.id}`)
}

function buscarHoteisPorCidade() {
    console.log("\n--- Buscar Hotéis por Cidade ---")
    const cidadeBusca = prompt("Digite a cidade para buscar hotéis: ")

    const hoteisEncontrados = hoteis.filter(hotel =>
        hotel.cidade.toLowerCase() === cidadeBusca.toLowerCase()
    )

    if (hoteisEncontrados.length === 0) {
        console.log(`Nenhum hotel encontrado na cidade de "${cidadeBusca}".`)
        return
    }

    console.log(`\nHotéis encontrados em "${cidadeBusca}":`)
    hoteisEncontrados.forEach(hotel => {
        console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}/${hotel.quartosTotais}`)
    });
}

function fazerReserva() {
    console.log("\n--- Fazer Nova Reserva ---")
    const idHotel = parseInt(prompt("Digite o ID do hotel para a reserva: "))
    const nomeCliente = prompt("Nome do cliente: ")

    const hotelSelecionado = hoteis.find(hotel => hotel.id === idHotel)

    if (!hotelSelecionado) {
        console.log("Hotel não encontrado. Verifique o ID e tente novamente.")
        return
    }

    if (hotelSelecionado.quartosDisponiveis <= 0) {
        console.log(`Desculpe, o hotel "${hotelSelecionado.nome}" não possui quartos disponíveis.`)
        return
    }

    const novaReserva = {
        idReserva: gerarIdReserva(),
        idHotel: idHotel,
        nomeCliente: nomeCliente
    }

    reservas.push(novaReserva);
    hotelSelecionado.quartosDisponiveis--

    console.log(`Reserva realizada com sucesso!`)
    console.log(`  ID da Reserva: ${novaReserva.idReserva}`)
    console.log(`  Hotel: ${hotelSelecionado.nome}`)
    console.log(`  Cliente: ${novaReserva.nomeCliente}`)
    console.log(`  Quartos disponíveis agora: ${hotelSelecionado.quartosDisponiveis}`)
}

function cancelarReserva() {
    console.log("\n--- Cancelar Reserva ---")
    const idReserva = parseInt(prompt("Digite o ID da reserva a ser cancelada: "))

    const indiceReserva = reservas.findIndex(reserva => reserva.idReserva === idReserva)

    if (indiceReserva === -1) {
        console.log("Reserva não encontrada. Verifique o ID e tente novamente.")
        return
    }

    const reservaParaCancelar = reservas[indiceReserva]
    const hotelCorrespondente = hoteis.find(hotel => hotel.id === reservaParaCancelar.idHotel)

    reservas.splice(indiceReserva, 1)

    if (hotelCorrespondente) {
        hotelCorrespondente.quartosDisponiveis++
        console.log(`Reserva ${idReserva} cancelada com sucesso!`)
        console.log(`Quartos disponíveis no hotel "${hotelCorrespondente.nome}" aumentados para ${hotelCorrespondente.quartosDisponiveis}.`)
    } else {
        console.log(`Reserva ${idReserva} cancelada com sucesso, mas o hotel correspondente não foi encontrado.`)
    }
}

function listarReservas() {
    console.log("\n--- Lista de Todas as Reservas ---")
    if (reservas.length === 0) {
        console.log("Nenhuma reserva registrada até o momento.")
        return
    }

    reservas.forEach(reserva => {
        const hotel = hoteis.find(h => h.id === reserva.idHotel)
        const nomeHotel = hotel ? hotel.nome : "Hotel Desconhecido"
        const cidadeHotel = hotel ? hotel.cidade : "N/A"

console.log(`
ID Reserva: ${reserva.idReserva}
Cliente:    ${reserva.nomeCliente}
Hotel:      ${nomeHotel} (ID: ${reserva.idHotel})
Cidade:     ${cidadeHotel}
-----------------------------------`)
    })
}

function menuPrincipal() {
    let opcao = ''
    do {
        console.log("\n==== Sistema de Reservas de Hotéis ====")
        console.log("1. Adicionar Hotel")
        console.log("2. Buscar Hotéis por Cidade")
        console.log("3. Fazer Reserva")
        console.log("4. Cancelar Reserva")
        console.log("5. Listar Todas as Reservas")
        console.log("0. Sair")

        opcao = prompt("Escolha uma opção: ")

        switch (opcao) {
            case '1':
                adicionarHotel()
                break
            case '2':
                buscarHoteisPorCidade()
                break
            case '3':
                fazerReserva()
                break
            case '4':
                cancelarReserva()
                break
            case '5':
                listarReservas()
                break
            case '0':
                console.log("Saindo do sistema. Até mais!")
                break
            default:
                console.log("Opção inválida. Tente novamente.")
                break
        }
    } while (opcao !== '0')
}

menuPrincipal()