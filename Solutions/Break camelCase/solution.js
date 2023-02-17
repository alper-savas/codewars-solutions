function solution(string) {
  let targetArray = [];
  let j = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      targetArray += string.slice(j, i) + " ";
      j = i;
    }
  }
  return (targetArray += string.slice(j));
}
