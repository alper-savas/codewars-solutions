function alphabetPosition(text) {
  text = text.toLowerCase();
  let charAt = "";
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
      const value = text.charCodeAt(i) - 96;
      charAt += value + " ";
    }
  }
  return charAt.trim();
}
