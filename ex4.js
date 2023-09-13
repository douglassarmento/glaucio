let notas = [];

for (let i = 1; i <= 3; i++) {
    let nota = parseFloat(prompt(`Nota ${i}: `));
    notas.push(nota);
}

let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

if (media >= 7) {

    console.log('APROVADO.');

} else if (media < 7 && media > 5) {

    console.log('RECUPERAÇÃO.');
    let notasRecuperacao = [];

    for (let i = 1; i <= 2; i++) {

        let notaRecuperacao = parseFloat(prompt(`Nota Recuperação ${i}: `));
        notasRecuperacao.push(notaRecuperacao);
    }

    let mediaRecuperacao = notasRecuperacao.reduce((acc, nota) => acc + nota, 0) / notasRecuperacao.length;

    if (mediaRecuperacao > 5) {

        console.log(`Você passou. Média de recuperação: ${mediaRecuperacao}`);

    } else {

        console.log(`Você não passou. Média de recuperação: ${mediaRecuperacao}`);
    }

} else {
    
    console.log('REPROVADO.');
}