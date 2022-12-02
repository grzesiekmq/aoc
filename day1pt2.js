function day1(txt) {
  const arr = txt.split("\n");
  let sum = 0;

  const elvesCollected = arr.map(function (el) {
    if (el === "") {
      sum = 0;
    }
    sum += +el;
    return sum;
  });

  return elvesCollected
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, val) => (acc += val));
}
