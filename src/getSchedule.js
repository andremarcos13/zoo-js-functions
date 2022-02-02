const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// // A função é responsável por disponibilizar as informações de horário dos
// animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.
// // Observações técnicas
// // Analise os testes unitários para entender os retornos que são esperados para esta função;
// // Quebre o problema em funções menores para que fique mais simples de administrar a responsabilidade de cada uma delas.
// O que será avaliado
// Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
// Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
// Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
// Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.
const weekDays = Object.keys(hours);
const emptyObject = {};
function getAvailability(daysOfWeek) {
  const animalAvailability = species.filter((element) => element.availability
    .some((currentValue) => currentValue === daysOfWeek));
  const animalList = animalAvailability.map((element) => element.name);
  return animalList;
}
function getWeekDays() {
  weekDays.forEach((element) => {
    if (element === 'Monday') {
      emptyObject[element] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      emptyObject[element] = {
        officeHour: `Open from ${hours[element].open}am until ${hours[element].close}pm`,
        exhibition: getAvailability(element),
      };
    }
  });
  return emptyObject;
}

function checkUndefined(isAnimal, isDate, isAny) {
  if (isAny === undefined) {
    return true;
  }
  if (isAnimal === undefined && isDate === undefined) {
    return true;
  }
  return false;
}

function paramType(parameter) {
  const checkAnimal = species.find((element) => element.name === parameter);
  const checkDate = species.find((callback) => callback.availability
    .some((currentValue) => currentValue === parameter));
  if (checkUndefined(checkAnimal, checkDate, parameter)) {
    return 'invalid';
  }
  if (checkAnimal !== undefined) {
    return 'animal';
  }
  if (checkDate !== undefined) {
    return 'date';
  }
}
function getDateOfTheWeek(date) {
  const objectValue = {};
  if (date === 'Monday') {
    objectValue[date] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    objectValue[date] = {
      officeHour: `Open from ${hours[date].open}am until ${hours[date].close}pm`,
      exhibition: getAvailability(date),
    };
  }
  return objectValue;
}
function getAnimalDayOfTheWeek(animal) {
  const getAnimal = species.find((element) => element.name === animal);
  return getAnimal.availability;
}
function getSchedule(scheduleTarget) {
  const searchParam = paramType(scheduleTarget);
  if (scheduleTarget === 'Monday') {
    return getDateOfTheWeek(scheduleTarget);
  }
  if (searchParam === 'invalid') {
    return getWeekDays();
  }
  if (searchParam === 'animal') {
    return getAnimalDayOfTheWeek(scheduleTarget);
  }
  if (searchParam === 'date') {
    return getDateOfTheWeek(scheduleTarget);
  }
}
module.exports = getSchedule;
