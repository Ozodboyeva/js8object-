function ObjectName(obj) {
  let keys = Object.keys(obj);

  for (let key of keys) {
    if (typeof key == "string") {
      return false;
    }
  }

  return true;
}

let obj = { abc: 1, 123: 2, d: 5 };
console.log(ObjectName(obj));
