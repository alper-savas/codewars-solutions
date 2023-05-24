const hexStringToRGB = (hexString) => {
  const hexArray = hexString.split("").slice(1);
  const r = helper(hexArray[0]) * 16 + helper(hexArray[1]);
  const g = helper(hexArray[2]) * 16 + helper(hexArray[3]);
  const b = helper(hexArray[4]) * 16 + helper(hexArray[5]);
  return { r: r, g: g, b: b };
};

const helper = (str) => {
  const strLower = str.toLowerCase();
  if (strLower === "a") {
    return 10;
  } else if (strLower === "b") {
    return 11;
  } else if (strLower === "c") {
    return 12;
  } else if (strLower === "d") {
    return 13;
  } else if (strLower === "e") {
    return 14;
  } else if (strLower === "f") {
    return 15;
  } else {
    return +strLower;
  }
};
