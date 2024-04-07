# notas-atletas
Projeto de Certificação 1 - Pontuação dos Atletas ( Trilha 1 - Lógica de Programação )

O Projeto consiste em desenvolver uma aplicação em **javaScript** para uma competição de Ginástica. A aplicação foi desenvolvida com o intuito de receber o nome e as notas de um atleta, calcular a média e apresentar ao usuário.


### Regras da Aplicação

A. Cada jurado é responsável por avaliar um critério em específico, sendo eles o tempo de duração da apresentação, originalidade da coreografia, postura do atleta, dificuldade das acrobacias e sincronismo.
1. Cada jurado pode fornecer uma nota de um (1) a dez (10);
2. A média é calculada com base nas três notas do meio, desconsiderando a maior e menor nota.

B. Criar uma função capaz de receber uma matriz de objetos contendo o nome do atleta e as cinco notas atribuídas. A função irá calcular a média das notas sem considerar a maior e menor nota do atleta.

C. Por fim, será apresentado ao usuário o nome de cada atleta, seguido das notas e da média calculada.

### Metódos utilizados

A lógica para calcular a média das notas dos atletas foi implementada com os métodos sort() e slice() para classificar as notas e remover a menor e a maior nota, respectivamente.

Posteriormente, a média foi calculada com base nas três notas restantes.

### Desenvolvedor

Fábio Souza
