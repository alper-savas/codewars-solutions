function cakes(recipe, available) {
  if (!available) return 0;
  let count = 0;
  while_loop: while (true) {
    for (let i = 0; i < Object.keys(recipe).length; i++) {
      if (
        !Object.keys(available).includes(Object.keys(recipe)[i]) ||
        available[Object.keys(recipe)[i]] < Object.values(recipe)[i]
      ) {
        break while_loop;
      }
      available[Object.keys(recipe)[i]] -= Object.values(recipe)[i];
    }
    count++;
  }
  return count;
}
