function moveZeros(arr) {
  arr.forEach((el) => {
    if (el === 0) {
      arr.splice(arr.indexOf(el), 1);
      arr.push(0);
    }
  });
  return arr;
}
