function getMultipleValues(n) {
  const res = {};
  for (let key in obj) {
    res[key] = obj[key] * n;
  }
  return res;
}

const n = 3;
const obj = { a: 2, b: 3, c: 4, d: 6 };
const res = getMultipleValues(n);
console.log(res);
