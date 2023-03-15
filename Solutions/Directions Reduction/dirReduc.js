function dirReduc(arr) {
  let i = 0;
  while (i < arr.length - 1) {
    switch (arr[i]) {
      case "NORTH":
        if (arr[i + 1] === "SOUTH") {
          arr.splice(i, 2);
          i = 0;
          break;
        }
        i++;
        break;
      case "SOUTH":
        if (arr[i + 1] === "NORTH") {
          arr.splice(i, 2);
          i = 0;
          break;
        }
        i++;
        break;
      case "WEST":
        if (arr[i + 1] === "EAST") {
          arr.splice(i, 2);
          i = 0;
          break;
        }
        i++;
        break;
      case "EAST":
        if (arr[i + 1] === "WEST") {
          arr.splice(i, 2);
          i = 0;
          break;
        }
        i++;
        break;
      default:
        i++;
    }
  }
  return arr;
}
