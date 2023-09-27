const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Digite o valor do capital investido: R$ ', (cInput) => {
    rl.question('Digite o valor da taxa de juros (em percentual): ', (iInput) => {
        rl.question('Digite o valor do tempo do investimento (em meses): ', (tInput) => {
            const c = parseFloat(cInput);
            const i = parseFloat(iInput) / 100;
            const t = parseFloat(tInput);

            function calcMontante(c, i, t) {
                const m = c * Math.pow(1 + i, t);
                return m;
            }

            const montante = calcMontante(c, i, t);
            console.log(`O montante é: R$ ${montante.toFixed(2)}`);

            rl.close();
        });
    });
});