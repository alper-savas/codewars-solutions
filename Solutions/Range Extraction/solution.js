function solution(list) {
  let str = "";
  let state = false;
  let curStr = "";
  const curList = [];
  let listCounter = 0;
  for (let i = 0; i < list.length; i++) {
    if (state === false) {
      curStr = list[i].toString();
    }
    if (state === false && list[i] + 1 === list[i + 1]) {
      curList.push(list[i + 1]);
      state = true;
      listCounter++;
    } else if (state === true && list[i] + 1 === list[i + 1]) {
      curList.pop();
      curList.push(list[i + 1]);
      listCounter++;
    } else if (curList.length > 0 && listCounter > 1) {
      curStr += "-" + curList[0];
      str += curStr + ",";
      state = false;
      curList.pop();
      listCounter = 0;
    } else if (curList.length > 0) {
      str += curStr + ",";
      str += curList[0] + ",";
      state = false;
      curList.pop();
      listCounter = 0;
    } else {
      str += curStr + ",";
      state = false;
      curList.pop();
      listCounter = 0;
    }
  }
  return str.slice(0, -1);
}
