'use strict';

const allPopulationsQuery = document.querySelectorAll('.population');
const averageElem = document.querySelector('.average-population');
const totalElem = document.querySelector('.total-population');
const populations = [];

function addCommas(arr, separateAmount = 3) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const position = arr.length - i - 1;

    newArr.push(arr[i]);

    if (position % 3 === 0 && position !== 0) {
      newArr.push(',');
    }
  }

  return newArr.join('');
}

allPopulationsQuery.forEach((elem) => {
  populations.push(elem.innerText);
});

let totalPopulation = populations.reduce(
  (sum, elem) => sum + Number(elem.replaceAll(',', '')),
  0,
);
let averagePopulation = Math.floor(
  totalPopulation / allPopulationsQuery.length,
);

totalPopulation = totalPopulation.toString().split('');
averagePopulation = averagePopulation.toString().split('');

averageElem.innerText = addCommas(averagePopulation);
totalElem.innerText = addCommas(totalPopulation);
