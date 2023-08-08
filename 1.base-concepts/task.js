"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const calculation = b**2 - 4*a*c

  if (calculation < 0) {
    arr;
  } else if (calculation == 0) {
    const root = -b/(2*a);
    arr = [root];
  } else {
    const rootOne = (-b + Math.sqrt(d) )/(2*a);
    const rootTwo = (-b - Math.sqrt(d) )/(2*a);
    arr = [rootOne, rootTwo];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number" ||
    percent < 0 ||
    percent > 100 ||
    contribution < 0 ||
    amount <= 0 ||
    countMonths <= 0 ||
    !Number.isInteger(countMonths) // Проверка на дроби
  ) {
    return alert("Ошибка входных данных. Убедитесь, что все аргументы являются числами и введены корректные значения");
  } // Проверка валидности
  
    const monthPercent = percent / 100 / 12; // Месячный процент

    const refundAmount = amount - contribution; // Тело кредита, сумма для возврата банку.

    const monthPayment = refundAmount * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1))) // Ежемесячный платёж

    const totalPayment = monthPayment * countMonths; // Сумма, которую заплатит клиент.
    
    const roundedTotalPayment = Math.round(totalPayment); // Округление суммы до двух значений после запятой.

    return roundedTotalPayment;
}
