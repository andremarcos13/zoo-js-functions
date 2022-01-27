const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Implemente a função getAnimalsOlderThan
// Esta função, a partir do nome de uma espécie e uma idade mínima,
// verifica se todos os animais daquela espécie possuem a idade mínima especificada.

// Observações técnicas

// Deve retornar um valor booleano.
// O que será avaliado

// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getAnimal = species.find((element) => element.name === animal);
  const getAge = getAnimal.residents.filter((element) => element.age >= age);

  return getAge.length === getAnimal.residents.length; // saiu gracas a ajuda dos colegas Heitor Tessaro && Vitor Belarmino
}
getAnimalsOlderThan('otters', 9);
// console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
