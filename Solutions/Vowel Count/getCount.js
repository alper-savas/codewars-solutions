function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let charAt = str.charAt(i);
    if (
      charAt === "a" ||
      charAt === "e" ||
      charAt === "i" ||
      charAt === "o" ||
      charAt === "u"
    ) {
      count++;
    }
  }
  return count;
}
