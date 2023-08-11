let strings = ["Abdulaziz", "Safarmurad", "Orol", "Jahongir"];
let stringLengths = {};

for (let i = 0; i < strings.length; i++) {
  stringLengths[strings[i]] = strings[i].length;
}

console.log(stringLengths);
