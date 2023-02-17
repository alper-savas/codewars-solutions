function pigIt(str) {
  const targetArr = [];
  str.split(" ").forEach((e) => {
    if (isLetter(e)) {
      targetArr.push(e.slice(1) + e[0] + "ay");
    } else {
      targetArr.push(e);
    }
  });
  return targetArr.join(" ");
}

function isLetter(str) {
  return /^[A-Za-z]*$/.test(str);
}
