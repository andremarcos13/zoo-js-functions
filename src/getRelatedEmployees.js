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
  return false;
}
// getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:
// se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
// se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função
// construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const employeeWithManagers = employees.filter((element) => {
      const { managers } = element;
      return managers.some((currentValue) => currentValue === managerId);
    });

    const getClerk = employeeWithManagers.map((element) => {
      const { firstName, lastName } = element;
      return `${firstName} ${lastName}`;
    });
    return getClerk;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
