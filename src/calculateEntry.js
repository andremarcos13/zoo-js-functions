const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// Você deve isolar a parte da lógica na função countEntrants que se encontra no
// mesmo arquivo da função calculateEntry. Ela deverá receber o array de visitantes e retornar
// um objeto com a contagem de acordo com os seguintes critérios de classificação:
// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
// O retorno da função deverá ser um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }.
function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;
  return { child, adult, senior };
}
// Após terminar a implementação da função countEntrants você deverá utilizá-la para implementar
// a função calculateEntry. Esta deverá receber um array de visitantes e a partir da
// quantidade de visitantes e faixa etária de cada um, deverá retornar o valor total a ser cobrado.

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalPrice = Object.values(countEntrants(entrants));
  let ticketsValue = 0;
  const child = prices.child * totalPrice[0];
  const adult = prices.adult * totalPrice[1];
  const senior = prices.senior * totalPrice[2];
  ticketsValue = child + adult + senior;
  return ticketsValue;
}

module.exports = { calculateEntry, countEntrants };
