function day2(txt) {
  const arr = txt.split("\n").map((el) => el.trim());

  function lookup(val) {
    const mapping = {
      "A X": 4,
      "A Y": 8,
      "A Z": 3,
      "B X": 1,
      "B Y": 5,
      "B Z": 9,
      "C X": 7,
      "C Y": 2,
      "C Z": 6
    };
    return mapping[val];
  }
  let sum = 0;

  arr.forEach((el) => {
    sum += lookup(el);
  });
  return sum;
}
