const snail = function (array) {
  let x = array[0].length;
  let y = x - 1;
  let counter = 0;
  let dir = "pos";
  let resArray = [];
  let turn = 0;

  while (x > 0 || y > 0) {
    if (dir === "pos") {
      if (x > y) {
        for (let i = turn; i < array[0].length - turn; i++) {
          resArray.push(array[turn][i]);
        }
        x--;
        counter++;
      } else {
        for (let i = turn + 1; i < array[0].length - turn; i++) {
          resArray.push(array[i][array[0].length - turn - 1]);
        }
        y--;
        counter++;
      }
    } else {
      if (x > y) {
        for (let i = array[0].length - turn - 2; i >= turn; i--) {
          resArray.push(array[array[0].length - turn - 1][i]);
        }
        x--;
        counter++;
      } else {
        for (let i = array[0].length - turn - 2; i > turn; i--) {
          resArray.push(array[i][turn]);
        }
        y--;
        counter++;
      }
    }
    if (counter % 4 === 0) {
      turn++;
    }
    if (counter % 4 >= 2) {
      dir = "neg";
    } else {
      dir = "pos";
    }
  }
  return resArray;
};
