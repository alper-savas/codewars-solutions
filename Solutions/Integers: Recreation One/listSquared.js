function listSquared(m, n) {
  const resultingAray = [];
  for (m; m < n; m++) {
    if (isSquaredDivisor(m)) {
      resultingAray.push([m, divisorsSquaredSum(m)]);
    }
  }
  return resultingAray;
}

const divisors = (number) => {
  const dividerArray = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      dividerArray.push(i);
    }
  }
  return dividerArray;
};

const isSquaredDivisor = (number) => {
  return Math.sqrt(divisorsSquaredSum(number)) % 1 === 0;
};

const divisorsSquaredSum = (number) => {
  let divisor = divisors(number);
  const divisorsSquared = divisor.map((d) => Math.pow(d, 2));
  const divisorsSquaredSum = divisorsSquared.reduce((pSum, a) => pSum + a, 0);
  return divisorsSquaredSum;
};
