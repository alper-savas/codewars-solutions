const isPP = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 1; j < n; j++) {
      if (Math.pow(i, j) === n) {
        return [i, j];
      }
      if (Math.pow(i, j) > n) {
        break;
      }
    }
  }
  return null;
};
