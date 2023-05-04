function domainName(url) {
  if (url[0] !== "h") {
    url = "https://" + url;
  }
  let slash = 0;
  let domain = "";
  for (let i = 0; i < url.length; i++) {
    if (slash === 2) {
      if (url[i] !== ".") {
        domain += url[i];
      } else {
        if (domain === "www") {
          domain = "";
        } else {
          break;
        }
      }
    }
    if (url[i] === "/") {
      slash++;
    }
  }
  return domain;
}
