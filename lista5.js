const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Digite o valor do raio: ', (input) => {
    const raio = parseFloat(input);
    function calcRaio(raio) {
        const area = 3.14 * (raio * raio);
        const perimetro = 2 * 3.14 * raio;
        return [area, perimetro];
    }
    const [area, perimetro] = calcRaio(raio);
    console.log(`Área: ${area.toFixed(2)}`);
    console.log(`Perímetro: ${perimetro.toFixed(2)}`);
    rl.close();
});