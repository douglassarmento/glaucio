const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let maior = 0;
let menor = 0;
let valores = 0;
rl.question('Digite quantas vezes quer repetir: ', (nInput) => {
    const n = parseInt(nInput);
    function inputNumber(i) {
        if (i < n) {
            rl.question('Digite um número: ', (input) => {
                const p = parseFloat(input);
                if (!isNaN(p)) {
                    valores += p;
                    if (p > maior) {
                        maior = p;
                        if (menor === 0) {
                            menor = p;
                        }
                    } else if (p < menor || menor === 0) {
                        menor = p;
                    }
                    inputNumber(i + 1);
                } else {
                    console.log('Digite um número válido.');
                    inputNumber(i);
                }
            });
        } else {
            console.log(`O maior número é ${maior}. O menor número é ${menor}. A soma dos valores é ${valores}.`);
            rl.close();
        }
    }
    inputNumber(0);
});