function firstNonRepeatingLetter(s) {
  const lowerString = s.toLowerCase();
  let index;
  for (let i = 0; i < lowerString.length; i++) {
    if (
      !(lowerString.slice(0, i) + lowerString.slice(i + 1)).includes(
        lowerString.charAt(i)
      )
    ) {
      index = i;
      break;
    }
  }
  if (typeof index !== "number") {
    return "";
  }
  return s.charAt(index);
}
