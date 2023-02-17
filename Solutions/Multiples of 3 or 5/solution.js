function solution(number) {
  let sum = 0;
  const multiples = [];
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  multiples.forEach((item) => (sum += item));
  return number < 0 ? 0 : sum;
}
