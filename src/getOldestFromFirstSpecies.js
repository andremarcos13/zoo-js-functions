const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.
// O que será avaliado
// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário,
//  e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((element) => element.id === id);
  const animal = species.find((element) => element.id === employee.responsibleFor[0]);
  let animalAge = 0;
  animal.residents.forEach((element) => {
    if (element.age > animalAge) {
      animalAge = element.age;
    }
  });
  const oldestAnimalAge = animal.residents.find((element) => element.age === animalAge);
  console.log(oldestAnimalAge);
  return [oldestAnimalAge.name, oldestAnimalAge.sex, oldestAnimalAge.age];
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;
