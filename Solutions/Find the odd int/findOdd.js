function findOdd(array) {
  const maxNumber = Math.max(...array);
  const minNumber = Math.min(...array);
  const difference = maxNumber - minNumber;
  const countArray = new Array(difference + 1).fill(0);
  let oddNumber;
  array.forEach((e) => {
    countArray[Number(e) - minNumber]++;
  });
  countArray.forEach((e) => {
    if (Number(e) % 2 !== 0) {
      oddNumber = countArray.indexOf(Number(e)) + minNumber;
    }
  });
  return oddNumber;
}
