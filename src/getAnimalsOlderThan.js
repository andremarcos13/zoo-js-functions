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
  // if (species.find((element) => element.name === animal) && species.filter((element) => element.residents.age >= age)) {
  //   return true;
  // }
  const socorroJesus = species.find((element) => element.name === animal);
  // const socorroDeus = species.filter((element) => element.residents.age >= age);
  // return socorroDeus;
  return socorroJesus;
}
module.exports = getAnimalsOlderThan;
