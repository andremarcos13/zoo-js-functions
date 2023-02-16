# README customizado em construção !
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
Bem-vindo ao repositório de Funções de Animais do Zoológico JS! Este repositório contém uma coleção de funções JavaScript relacionadas ao reino animal.

# Começando
Para usar essas funções em seus próprios projetos, você pode clonar este repositório ou baixar o código-fonte. Depois de obter o código-fonte, você pode importar as funções que precisa para o seu próprio código JavaScript.

# Funções
Aqui está algumas das funções incluídas neste repositório:

- getRandomAnimal() - Retorna um animal aleatório de uma lista de animais.
- getAnimalSound(animal) - Retorna o som que um animal faz.
- getAnimalCharacteristics(animal) - Retorna um objeto contendo várias características de um animal, como seu tamanho, habitat e dieta.

# Uso
Para usar essas funções, você pode importá-las em seu código JavaScript da seguinte maneira:

````getRandomAnimal() - Retorna um animal aleatório de uma lista de animais.
getAnimalSound(animal) - Retorna o som que um animal faz.
getAnimalCharacteristics(animal) - Retorna um objeto contendo várias características de um animal, como seu tamanho, habitat e dieta.

import { getRandomAnimal, getAnimalSound, getAnimalCharacteristics } from './zoo-functions.js';

const animal = getRandomAnimal();
console.log(`O animal aleatório é ${animal}.`);

const sound = getAnimalSound(animal);
console.log(`O ${animal} faz o som ${sound}.`);

const characteristics = getAnimalCharacteristics(animal);
console.log(`O ${animal} é um animal de tamanho ${characteristics.size} que vive em ${characteristics.habitat} e se alimenta de ${characteristics.diet}.`);
````

# Contribuindo
Se você deseja contribuir para este repositório, abra uma issue ou envie uma pull request. Todas as contribuições são bem-vindas!

