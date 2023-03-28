function perimeter(n) {
  let first = 0;
  let second = 1;
  let sum = 1;
  let fibSum = 1;
  for (let i = 0; i < n; i++) {
    sum = first + second;
    first = second;
    second = sum;
    fibSum += second;
  }
  return fibSum * 4;
}
