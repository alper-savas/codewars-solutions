function longestConsec(strarr, k) {
  if (k < strarr.length + 1 && k > 0) {
    let index = 0;
    let length = 0;
    let concatArray = [];
    for (let i = 0; i < strarr.length - k + 1; i++) {
      let concatWord = strarr[i];
      let acc = i + 1;
      for (let j = 0; j < k - 1; j++) {
        concatWord += strarr[acc];
        acc++;
      }
      concatArray.push(concatWord);
    }
    concatArray.forEach((e) => {
      if (e.length > length) {
        length = e.length;
        index = concatArray.indexOf(e);
      }
    });
    if (concatArray[index]) {
      return concatArray[index];
    } else {
      return "";
    }
  } else {
    return "";
  }
}
