function findOutlier(integers) {
  let even = 0;
  let odd = 0;
  let arrayType;
  integers.forEach((e) => {
    if (e % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  });
  if (even > odd) {
    arrayType = "even";
  } else {
    arrayType = "odd";
  }

  integers.forEach((e) => {
    if (arrayType === "even" && e % 2 !== 0) {
      res = e;
    }
    if (arrayType === "odd" && e % 2 === 0) {
      res = e;
    }
  });

  return res;
}
