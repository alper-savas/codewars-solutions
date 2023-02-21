var maxSequence = function (arr) {
  if (arr.length === 0) return 0;
  let maxNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    let sumArray = arr[i];
    if (sumArray > maxNumber) {
      maxNumber = sumArray;
    }
    for (let j = i + 1; j < arr.length; j++) {
      sumArray += arr[j];
      if (sumArray > maxNumber) {
        maxNumber = sumArray;
      }
    }
  }
  return maxNumber;
};
