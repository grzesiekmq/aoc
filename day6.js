function day6(txt) {
  const arr = [];

  const a = txt.split("");
  let result = 0;
  for (let index = 0; index < a.length; index++) {
    const allDifferent = new Set(arr).size === arr.length;
    const exists = arr.some((el) => el === a[index]);

    if (!exists) {
      arr.push(a[index]);
    } else {
      if (arr.length < 4) {
        arr.length = 0;
        arr.push(a[index]);
      }
    }
    if (arr.length === 4 && allDifferent) {
      console.log("found marker");
      result = index + 1;
      break;
    }
  }

  
  return result;
}
