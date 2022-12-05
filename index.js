
let quantGc50 = 0
let quantGc10 = 0
let quantGc5 = 0
let quantGc1 = 0

let valorDesejado = prompt('Digite o valor desejado: ')

if(valorDesejado !== null){
    valorDesejado = parseInt(valorDesejado.replace('.', '').replace(',', '.'))

}

if(!valorDesejado){
    document.write("Valor inválido")
}

console.log(`O valor é ${valorDesejado.toFixed(2)}`)

while(valorDesejado >= 50) {
    console.log(`A quantidade de notas de 50 é ${quantGc50}`)
    valorDesejado = valorDesejado - 50
    quantGc50++
    console.log(`O valor desejado ficou ${valorDesejado}`)
}

while(valorDesejado >= 10) {
    console.log(`A quantidade de notas de 10 é ${quantGc10}`)
    valorDesejado = valorDesejado - 10
    quantGc10++
    console.log(`O valor desejado ficou ${valorDesejado}`)
}
while(valorDesejado >= 5) {
    console.log(`A quantidade de notas de 5 é ${quantGc5}`)
    valorDesejado = valorDesejado - 5
    quantGc5++
    console.log(`O valor desejado ficou ${valorDesejado}`)
}
while(valorDesejado >= 1) {
    console.log(`A quantidade de notas de 1 é ${quantGc1}`)
    valorDesejado = valorDesejado - 1
    quantGc1++
    console.log(`O valor desejado ficou ${valorDesejado}`)
}

document.write(`<h3>GC$50,00: ${quantGc50}</h3>`)
document.write(`<h3>GC$10,00: ${quantGc10}</h3>`)
document.write(`<h3>GC$5,00: ${quantGc5}</h3>`)
document.write(`<h3>GC$1,00: ${quantGc1}</h3>`)