function pickPeaks(arr) {
  let peaks = [];
  let pos = [];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      if (arr[i] >= arr[i + 1]) {
        let j = i + 1;
        while (j < arr.length) {
          if (arr[i] > arr[j]) {
            peaks.push(arr[i]);
            pos.push(i);
            break;
          }
          if (arr[i] < arr[j]) {
            break;
          }
          j++;
        }
      }
    }
  }
  return { pos, peaks };
}
