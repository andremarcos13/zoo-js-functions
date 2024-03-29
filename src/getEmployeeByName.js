const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Implemente a função getEmployeeByName
// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

// O que será avaliado

// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const getName = employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  return getName;
}
module.exports = getEmployeeByName;
