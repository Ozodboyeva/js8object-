function objectName(obj) {
  let keys = Object.keys(obj);
  let newObj = {};

  for (let key of keys) {
    if (typeof key !== "string") {
      return false;
    }

    if (obj[key] !== false) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

let obj = { a: false, b: 12, c: true, d: 0 };
console.log(objectName(obj));
