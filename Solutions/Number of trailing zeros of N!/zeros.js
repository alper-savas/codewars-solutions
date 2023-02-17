function zeros(n) {
  let trailingZeros = 0;
  for (let i = 5; i <= n; i *= 5) {
    trailingZeros += Math.floor(n / i);
  }
  return trailingZeros;
}
