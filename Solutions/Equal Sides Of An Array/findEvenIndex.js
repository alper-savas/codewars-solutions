function findEvenIndex(arr) {
  let finalIndex = -1;
  arr.forEach((el, index) => {
    const left = arr.slice(0, index);
    const right = arr.slice(index + 1);
    const sumLeft = left.reduce((acc, val) => acc + val, 0);
    const sumRight = right.reduce((acc, val) => acc + val, 0);
    if (sumLeft === sumRight && finalIndex === -1) {
      finalIndex = index;
    }
  });
  return finalIndex;
}
