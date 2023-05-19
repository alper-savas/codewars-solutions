function digitalRoot(n) {
  while (true) {
    const digitArray = n.toString().split("");
    let sum = 0;
    digitArray.forEach((el) => {
      sum += +el;
    });
    n = sum;
    if (sum < 10) {
      return sum;
    }
  }
}
