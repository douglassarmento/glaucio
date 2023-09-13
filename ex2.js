let altura = 0;
let alturahomem = 0;
let numerohomem = 0;
let mulheres = 0;
let maior = 0;
let menor = 0;

for (let x = 0; x < 15; x++) {
    console.log();
    let n = prompt('Nome:');
    let a = parseFloat(prompt('Altura:'));
    let s = parseInt(prompt('Sexo: [1] MASCULINO - [2] FEMININO:'));
    console.log();

    if (a > maior) {
        maior = a;
        if (menor === 0) {
            menor = a;
        } else {
            menor = menor;
        }
    } else if (a > menor) {
        if (menor === 0) {
            menor = a;
        } else {
            menor = menor;
        }
    } else {
        menor = a;
    }
    altura += a;

    if (s === 1) {
        alturahomem += a;
        numerohomem += 1;
    } else if (s === 2) {
        mulheres += 1;
    } else {
        console.log('Opção inválida.');
        console.log();
    }
}

console.log(`A maior altura é de ${maior} m. A menor altura é de ${menor} m.`);
console.log(`A média de altura dos homens é ${(alturahomem / numerohomem).toFixed(2)} m.`);
console.log(`O número de mulheres é ${mulheres}.`);