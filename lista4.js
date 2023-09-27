const anoInicial = 1995;
const salarioInicial = 1000;
const anoAtual = parseInt(prompt('Digite o ano atual: '));
if (anoAtual < anoInicial) {
    console.log('O ano atual não pode ser anterior a 1995.');
} else {
    const numeroAnos = anoAtual - anoInicial;
    const percentualAtual = numeroAnos * 2;
    const salarioAtual = parseFloat(prompt('Digite seu salário atual: R$ '));
    const salarioAtualizado = salarioAtual + (salarioAtual * (percentualAtual / 100));
    console.log(`Seu salário atualizado é R$ ${salarioAtualizado.toFixed(2)}`);
}