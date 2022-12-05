//Contextualização do desafio:
//As Ilhas Growdev formam um reino independente nos mares do Pacífico.
//Como é um reino recente, a sociedade é muito influenciada pela
//informática. A moeda oficial é a GrowCoin; existem notas de GC$ 50,00,
//GC$ 10,00, GC$ 5,00 e GC$ 1,00. Vocês foram contratados para ajudar na
//programação dos caixas automáticos de um grande banco das Ilhas
//Growdevs.

//Tarefa:
//Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
//notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
//clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
//um certo número inteiro de GrowCoins.
//Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
//desejado pelo cliente, determine o número de cada uma das notas
//necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
//retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
//Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
//GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

//Exemplo de entrada:
//72
//Exemplo de saída:
//GC$ 50,00 -> 1
//GC$ 10,00 -> 2
//GC$ 5,00 -> 0
//GC$ 1,00 -> 2

/* let valorGc50 = 50;
let valorGc10 = 10;
let valorGc5 = 5;
let valorGc1 = 1; */

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