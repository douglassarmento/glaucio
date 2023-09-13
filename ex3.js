let nota1 = parseFloat(prompt('Primeira nota:'));
let nota2 = parseFloat(prompt('Segunda nota:'));
let nota3 = parseFloat(prompt('Terceira nota:'));

let mediaPonderada = (nota1 * 2 + nota2 * 3 + nota3 * 5) / (10);

console.log(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);