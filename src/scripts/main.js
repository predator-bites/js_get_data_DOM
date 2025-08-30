'use strict';

const allPopulationsQuery = document.querySelectorAll('.population');
const averageElem = document.querySelector('.average-population');
const totalElem = document.querySelector('.total-population');
const populations = [];

allPopulationsQuery.forEach((elem) => {
  populations.push(elem.innerText);
});

let totalPopulation = populations.reduce((sum, elem) => {
  const changedElem = Number(elem.replaceAll(',', ''));

  if (Number.isFinite(changedElem)) {
    return sum + changedElem;
  }

  return sum;
}, 0);

let averagePopulation = Math.floor(
  totalPopulation / allPopulationsQuery.length,
);

averagePopulation = new Intl.NumberFormat().format(averagePopulation);
totalPopulation = new Intl.NumberFormat().format(totalPopulation);

averageElem.innerText = averagePopulation;
totalElem.innerText = totalPopulation;
