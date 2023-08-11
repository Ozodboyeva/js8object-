function ObjectFromArray(arr) {
  let obj = {};

  for (let num of arr) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }

  return obj;
}

let arr = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
console.log(ObjectFromArray(arr));
