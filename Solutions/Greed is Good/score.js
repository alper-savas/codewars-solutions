function score(dice) {
  const indexArray = [0, 0, 0, 0, 0, 0];
  let score = 0;
  dice.forEach((d) => {
    indexArray[d - 1]++;
  });
  for (let i = 0; i < indexArray.length; i++) {
    if (indexArray[i] >= 3) {
      if (i === 0) {
        score += 1000;
        indexArray[i] -= 3;
        i--;
      } else {
        score += (i + 1) * 100;
        indexArray[i] -= 3;
        i--;
      }
    }
    if (indexArray[i] >= 1) {
      if (i === 0) {
        score += indexArray[i] * 100;
      }
      if (i === 4) {
        score += indexArray[i] * 50;
      }
    }
  }
  return score;
}
