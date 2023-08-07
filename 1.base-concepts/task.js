"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const calculation = Math.pow(b**2-4*a*c)

  if (calculation < 0) {
    arr = [];
  } else if (calculation == 0) {
    const root = -b/(2*a)
    arr = [root];
  } else if (calculation > 0) {
    const rootOne = (-b + Math.sqrt(d) )/(2*a);
    const rootTwo = (-b - Math.sqrt(d) )/(2*a);
    arr = [rootOne, rootTwo];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const monthPercent = percent / 100 / 12; // Месячный процент

    const refundAmount = amount - contribution; // Тело кредита, сумма для возврата банку.

    const monthPayment = refundAmount * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1))) // Ежемесячный платёж

    const totalPayment = monthPayment * countMonths; // Сумма, которую заплатит клиент.
    
    const roundedTotalPayment = Math.round(totalPayment); // Округление суммы до двух значений после запятой.

    return roundedTotalPayment;
}
