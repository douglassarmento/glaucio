const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let p = 0;
let i = 0;
function inputNumber() {
    rl.question('Digite um número: ', (input) => {
        const n = parseInt(input);

        if (!isNaN(n)) {
            if (n % 2 === 0) {
                console.log('Este número é par.');
                p++;
            } else {
                console.log('Este número é ímpar.');
                i++;
            }

            if (p + i < 10) {
                inputNumber();
            } else {
                console.log(`A quantidade de números pares é ${p} e a de números ímpares é ${i}.`);
                rl.close();
            }
        } else {
            console.log('Digite um número válido.');
            inputNumber();
        }
    });
}
inputNumber();