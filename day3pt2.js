function day3(txt) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const upperAlpha = alpha.toUpperCase();

  const prioritiesLowerValues = alpha.split("").map((_, i) => i + 1);
  const prioritiesUpperValues = upperAlpha.split("").map((_, i) => i + 27);

  const prioritiesLowerInit = new Array(prioritiesLowerValues.length).fill(0);
  const prioritiesUpperInit = new Array(prioritiesLowerValues.length).fill(0);

  function makeObj(priorities, values, alphaType) {
    const o = priorities.reduce(
      (obj, __, i) => ({ ...obj, [alphaType[i]]: values[i] }),
      {}
    );
    return o;
  }
  const prioritiesLower = makeObj(
    prioritiesLowerInit,
    prioritiesLowerValues,
    alpha
  );
  const prioritiesUpper = makeObj(
    prioritiesUpperInit,
    prioritiesUpperValues,
    upperAlpha
  );
  function lookup(obj, val) {
    return obj[val];
  }
  // console.log(prioritiesLower);
  // console.log(prioritiesUpper);

  const txtTransformed = txt
    .split("\n")
    .map((el) => new Set(el.trim()))
    .map((el, i) => [...el]);

  //.slice(0,3)
  // (3,6)

  console.log("txtTransformed", txtTransformed);
  const arrofArrs = [];

  for (let i = 0; i < txtTransformed.length; ) {
    const element = txtTransformed.slice(i, (i += 3));

    arrofArrs.push(element);
  }

  const t2 = arrofArrs.map((el) =>
    el.reduce((a, v) => a.filter((el) => v.includes(el)))
  );

  const arr = t2
    .map((el, i) => lookup(prioritiesLower, el))
    .filter((el) => el !== undefined)
    .map((el) => +el);
  const arrSecond = t2
    .map((el, i) => lookup(prioritiesUpper, el))
    .filter((el) => el !== undefined)
    .map((el) => +el);

  return arr.concat(arrSecond).reduce((a, v) => a + v);
}
