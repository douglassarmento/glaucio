function calcularMedia(quantidade) {
    let numero = 0;

    for (let x = 0; x < quantidade; x++) {
        let numeros = parseInt(prompt('Digite um número: '))
        numero += numeros;
    }

    return numero / quantidade;
}

let quantidade = prompt('Digite a quantidade de números: ');
quantidade = parseInt(quantidade);

if (isNaN(quantidade) || quantidade <= 0) {
    console.log('Quantidade inválida.');
} else {
    const media = calcularMedia(quantidade);
    console.log('A média dos números é ', media);
}