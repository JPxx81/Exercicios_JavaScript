// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.


function contarFrequenciaDeStrings(arrStrings) {
    const contagem = {}

    for (const string of arrStrings) {
        if (contagem[string]) {
            contagem[string]++
        } else {
            contagem[string] = 1
        }
    }

    return contagem
}

const frutas = ["maçã", "banana", "laranja", "maçã", "uva", "banana", "maçã", "pera"]
const cores = ["azul", "vermelho", "verde", "azul", "amarelo", "verde", "azul"]
const palavras = ["ola", "mundo", "ola", "javascript", "mundo", "programacao"]
const vazio = []

console.log("--- Array de Frutas ---")
console.log(frutas)
const contagemFrutas = contarFrequenciaDeStrings(frutas)
console.log("Contagem:", contagemFrutas)

console.log("\n--- Array de Cores ---")
console.log(cores)
const contagemCores = contarFrequenciaDeStrings(cores)
console.log("Contagem:", contagemCores)

console.log("\n--- Array de Palavras ---")
console.log(palavras)
const contagemPalavras = contarFrequenciaDeStrings(palavras)
console.log("Contagem:", contagemPalavras)

console.log("\n--- Array Vazio ---")
console.log(vazio)
const contagemVazio = contarFrequenciaDeStrings(vazio)
console.log("Contagem:", contagemVazio)