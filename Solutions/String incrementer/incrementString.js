function incrementString(string) {
  let num = "";
  for (let i = string.length - 1; i >= 0; i--) {
    if (!isNumber([...string][i])) break;
    num += [...string][i];
  }
  const targetNum = num.split("").reverse().join("");
  return (
    string.slice(0, string.length - targetNum.length) +
    String(+targetNum + 1).padStart(targetNum.length, 0)
  );
}

function isNumber(c) {
  return c >= "0" && c <= "9";
}
