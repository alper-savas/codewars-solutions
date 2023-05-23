const high = (x) => {
  const strArr = x.split(" ");
  let highestStr = "";
  let highestScore = 0;
  strArr.forEach((el) => {
    if (score(el) > highestScore) {
      highestScore = score(el);
      highestStr = el;
    }
  });
  return highestStr;
};

const score = (x) => {
  const strArr = x.split("");
  let score = 0;
  strArr.forEach((el) => {
    score += el.charCodeAt(0) - 96;
  });
  return score;
};
