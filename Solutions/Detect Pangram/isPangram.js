function isPangram(string) {
  let includes = true;
  const alp = [];
  const splitArr = string.split("");
  const strArr = splitArr.map((el) => el.toLowerCase());
  for (let i = 97; i < 123; i++) {
    alp.push(String.fromCharCode(i));
  }
  alp.forEach((el) => {
    if (!strArr.includes(el.toLowerCase())) {
      includes = false;
    }
  });
  return includes;
}
