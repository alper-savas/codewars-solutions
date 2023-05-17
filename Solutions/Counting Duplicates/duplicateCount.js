function duplicateCount(text) {
  const lowerArray = [...text.toLowerCase()];
  const duplicates = [];
  let count = 0;
  lowerArray.forEach((el, i) => {
    const sliceArray = [...lowerArray.slice(0, i), ...lowerArray.slice(i + 1)];
    const isIncludes = sliceArray.includes(el);
    if (isIncludes && !duplicates.includes(el)) {
      duplicates.push(el);
      count++;
    }
  });
  return count;
}
