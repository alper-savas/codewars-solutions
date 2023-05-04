function orderWeight(strng) {
  const arr = strng.split(" ");
  let weightArray = [];
  arr.forEach((weight) => {
    const arrWeight = [...weight];
    let sum = 0;
    arrWeight.forEach((num) => {
      sum += +num;
    });
    weightArray.push([weight, sum]);
  });
  weightArray.sort(function (a, b) {
    if (a[1] === b[1]) {
      const firstStr = a[0].toString();
      const secondStr = b[0].toString();
      return firstStr.localeCompare(secondStr);
    }
    return a[1] - b[1];
  });
  let result = "";
  weightArray.forEach((weight) => {
    result += weight[0] + " ";
  });

  return result.trimEnd();
}
