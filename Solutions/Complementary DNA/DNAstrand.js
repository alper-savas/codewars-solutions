function DNAStrand(dna) {
  const outputArray = [];
  dna.split("").forEach(function (x) {
    if (x === "A") {
      outputArray.push("T");
    } else if (x === "T") {
      outputArray.push("A");
    } else if (x === "G") {
      outputArray.push("C");
    } else {
      outputArray.push("G");
    }
  });
  return outputArray.join("");
}
