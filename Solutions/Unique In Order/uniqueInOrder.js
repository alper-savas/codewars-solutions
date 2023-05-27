const uniqueInOrder = (iterable) => {
  let iterableArr;
  if (iterable.length <= 0) {
    return [];
  }
  if (!Array.isArray(iterable)) {
    iterableArr = iterable.split("");
  } else {
    iterableArr = iterable;
  }
  const res = [iterableArr[0]];
  for (let i = 1; i < iterableArr.length; i++) {
    if (iterableArr[i] !== iterableArr[i - 1]) {
      res.push(iterableArr[i]);
    }
  }
  return res;
};
