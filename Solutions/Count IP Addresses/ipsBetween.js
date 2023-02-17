function ipsBetween(start, end) {
  const firstNumber = start.split(".");
  const secondNumber = end.split(".");
  let res = 0;
  for (let i = 0; i < 4; i++) {
    res +=
      Math.pow(256, 3 - i) * (Number(secondNumber[i]) - Number(firstNumber[i]));
  }
  return res;
}
