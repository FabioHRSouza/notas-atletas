//Projeto de Certificação 1 - Pontuação dos Atletas
//não utilizei o laço "for" como sugerido no enunciado, uma vez que optei por utilizar os métodos "sort" e "slice" conforme o código descrito à baixo:
function calcularMedia(notas) {
    // Ordena as notas em ordem crescente
    notas.sort(function(a, b) {
        return a - b;
    });
    
    // Remove a maior e a menor nota, computando as demais
    let notasComputadas = notas.slice(1, 4);
    
    // Calcula a soma das notas computadas
    let soma = 0;
    notasComputadas.forEach(function(nota) {
        soma = soma + nota;
    });
    // Calcula a media, utilizando soma e dividindo pela quantidade de notas computadas
    let media = soma / notasComputadas.length;
    
    // No enunciado não foi mencionado que o resultado da média das notas deve ser arredondado, portanto deixei o resultado final conforme a saída do exemplo, mas para o arredondamento com 2 ou mais casas decimais poderiamos ter usado após o return o método "media.toFixed(2)"
    return media;
}

let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// Saída - Exibição de cada atleta, com todas as notas obtidas e a média válida
atletas.forEach(function(atleta) {
    let media = calcularMedia(atleta.notas);
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas}`);
    console.log(`Média Válida: ${media}`);
    console.log();//1 paragrafo de espaço conforme o modelo de saída 
});
