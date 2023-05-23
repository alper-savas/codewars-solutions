const beeramid = (bonus, price) => {
  if (bonus < 0) {
    return 0;
  }
  const limit = bonus / price;
  let i = 0;
  let sum = 0;
  while (sum <= limit) {
    sum += Math.pow(i + 1, 2);
    i++;
  }
  return i - 1;
};
