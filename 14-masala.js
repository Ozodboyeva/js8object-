const rightAnswers = {
  1: "B",
  2: "A",
  3: "C",
  4: "D",
  5: "B",
  6: "C",
  7: "A",
  8: "D",
  9: "A",
  10: "B",
};
const myAnswers = {
  1: "C",
  2: "A",
  3: "D",
  4: "D",
  5: "B",
  6: "C",
  7: "B",
  8: "C",
  9: "A",
  10: "C",
};

let correctCount = 0;
let incorrectCount = 0;

for (let i = 1; i <= Object.keys(rightAnswers).length; i++) {
  if (rightAnswers[i] === myAnswers[i]) {
    correctCount++;
  } else {
    incorrectCount++;
  }
}

console.log("correct answers:", correctCount);
console.log("incorrect answers:", incorrectCount);
