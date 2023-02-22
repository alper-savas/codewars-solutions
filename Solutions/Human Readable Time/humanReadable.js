function humanReadable(seconds) {
  const hour = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minute = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const second = String(Math.floor((seconds % 3600) % 60)).padStart(2, "0");
  return hour + ":" + minute + ":" + second;
}
