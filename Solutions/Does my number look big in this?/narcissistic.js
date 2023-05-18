function narcissistic(value) {
  const valueArr = value.toString().split("");
  let digit = valueArr.length;
  let res = 0;
  valueArr.forEach((el) => {
    res += Math.pow(+el, digit);
  });
  if (res === value) {
    return true;
  }
  return false;
}
