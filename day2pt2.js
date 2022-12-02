function day2(txt) {
  const arr = txt.split("\n").map((el) => el.trim());
  function lookup(val) {
    const rps = {
      X: 0,
      Y: 3,
      Z: 6
    };
    const mapping = {
      "A X": 3 + rps.X,
      "A Y": 1 + rps.Y, //good
      "A Z": 2 + rps.Z,
      "B X": 1 + rps.X, //good
      "B Y": 2 + rps.Y,
      "B Z": 3 + rps.Z,
      "C X": 2 + rps.X,
      "C Y": 3 + rps.Y,
      "C Z": 1 + rps.Z // good
    };

    return mapping[val];
  }
  let sum = 0;
  arr.forEach((el) => {
 
    sum += lookup(el);
  });
  return sum;
}
