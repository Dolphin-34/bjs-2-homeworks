function getArrayParams(...arr) {
  let min = arr[0]; 
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];

    sum += arr[i]
  }

  const roundAvg = sum / arr.length;
  const avg = Number(roundAvg.toFixed(2))
  return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {  
    sum += arr[i];
  }

  return sum
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  let difference = max - min;
  return difference
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i< arr.length; i++) {
    if (arr[i] % 2 === 0) sumEvenElement += arr[i];
    if (arr[i] % 2 !== 0) sumOddElement += arr[i];
  }

  let difference = sumEvenElement - sumOddElement;
  return difference
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
      countEvenElement++
    }
  }

  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (const arr of arrOfArr) {
    const newArr = func(...arr);
  }

  if (newArr > maxWorkerResult) maxWorkerResult = newArr;
  
  return maxWorkerResult
}
