function order(words) {
  const wordArray = words.split(" ");
  let sortedArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    for (let j = 0; j < wordArray.length; j++) {
      if (wordArray[j].includes(i + 1)) {
        sortedArray.push(wordArray[j]);
        break;
      }
    }
  }
  return sortedArray.join(" ");
}
