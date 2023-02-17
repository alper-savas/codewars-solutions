function maskify(cc) {
  if (cc.length >= 4) {
    let suffix = cc.slice(cc.length - 4, cc.length);
    let prefix = "";
    for (let i = 0; i < cc.length - 4; i++) {
      prefix += "#";
    }
    return prefix.concat(suffix);
  } else {
    return cc;
  }
}
