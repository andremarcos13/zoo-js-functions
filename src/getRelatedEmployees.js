const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Implemente a função getRelatedEmployees
// Considerando a boa prática de dividir o código em partes menores,
// apresentamos a função getRelatedEmployees em que você deverá dividí-la em duas funções:

// 1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não.
// O retorno dessa função deve ser um booleano: true ou false;

function isManager(id) {
  // seu código aqui
  for (let index = 0; index < employees.length; index += 1) {
    const element = employees[index];
    if (element.managers.some((currentValue) => currentValue === id)) {
      return true;
    }
  }
  return undefined;
}
function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
