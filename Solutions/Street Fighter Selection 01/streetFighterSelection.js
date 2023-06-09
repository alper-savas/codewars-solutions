function streetFighterSelection(fighters, position, moves) {
  const resArr = [];
  moves.forEach((mov) => {
    switch (mov) {
      case "left":
        position[1] = (position[1] + 5) % 6;
        break;
      case "right":
        position[1] = (position[1] + 1) % 6;
        break;
      case "up":
        position[0] = 0;
        break;
      case "down":
        position[0] = 1;
        break;
    }
    resArr.push(fighters[position[0]][position[1]]);
  });
  return resArr;
}
