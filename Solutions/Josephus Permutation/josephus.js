function josephus(items, k) {
  const sortedArray = [];
  let index = (k - 1) % items.length;
  while (items.length > 0) {
    sortedArray.push(items[index % items.length]);
    items.splice(index % items.length, 1);
    index += k - 1;
    index %= items.length;
  }
  return sortedArray;
}
