let anos = 0;
let a = 80000;
let b = 200000;
const taxa_a = 0.03;
const taxa_b = 0.015;
while (a < b) {
    a += a * taxa_a;
    b += b * taxa_b;
    anos++;
}
console.log(`O número de anos necessários para A ser maior que B é de ${anos} ano(s).`);