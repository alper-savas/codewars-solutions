function superStreetFighterSelection(fighters, position, moves) {
  const resArr = [];
  moves.forEach((mov) => {
    switch (mov) {
      case "left":
        position[1] =
          (position[1] + fighters[0].length - 1) % fighters[0].length;
        while (fighters[position[0]][position[1]] === "") {
          position[1] =
            (position[1] + fighters[0].length - 1) % fighters[0].length;
        }
        break;
      case "right":
        position[1] = (position[1] + 1) % fighters[0].length;
        while (fighters[position[0]][position[1]] === "") {
          position[1] = (position[1] + 1) % fighters[0].length;
        }
        break;
      case "up":
        if (position[0] !== 0) {
          if (fighters[position[0] - 1][position[1]] !== "") {
            position[0] -= 1;
          }
        }
        break;
      case "down":
        if (position[0] !== fighters.length - 1) {
          if (fighters[position[0] + 1][position[1]] !== "") {
            position[0] += 1;
          }
        }
        break;
    }
    resArr.push(fighters[position[0]][position[1]]);
  });
  return resArr;
}
