const isValidWalk = (walk) => {
  if (walk.length !== 10) {
    return false;
  }
  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;
  walk.forEach((el) => {
    if (el === "n") {
      n++;
    } else if (el === "s") {
      s++;
    } else if (el === "w") {
      w++;
    } else {
      e++;
    }
  });
  if (n !== s || w !== e) {
    return false;
  }
  return true;
};
