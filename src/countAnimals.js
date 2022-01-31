const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// // Esta função é responsável por contabilizar a quantidade de animais de cada espécie.
// // Observações técnicas
// // Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma
// chave desse objeto, e o total de animais dessa espécie é o seu valor;
// // Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
// // Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade
// de girafas do sexo feminino.me de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.

function countAnimals(animal) {
  // seu código aqui
  // const { specie, sex } = animal;
  const totalAnimals = {};
  if (animal === undefined) {
    species.forEach((element) => {
      totalAnimals[element.name] = element.residents.length;
    });
    return totalAnimals;
  }
  const animalQuantity = species.find((element) => element.name === animal.specie);
  if (animal.specie !== undefined && animal.sex === undefined) {
    return animalQuantity.residents.length;
  }
  const animalGenderQuantity = animalQuantity.residents.filter((element) =>
    element.sex === animal.sex).length;
  return animalGenderQuantity;
}
module.exports = countAnimals;
