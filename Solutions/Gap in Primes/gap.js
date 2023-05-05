const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

function gap(g, m, n) {
  const list = [null, null];
  for (m; m < n; m++) {
    if (isPrime(m)) {
      list.push(m);
      list.shift();
      if (list[0] && list[1] && list[1] - list[0] === g) {
        return list;
      }
    }
  }
  return null;
}
