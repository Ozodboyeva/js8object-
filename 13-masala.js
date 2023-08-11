const grades = [
  { name: "Physics", grade: 4, credit: 6 },
  { name: "Mathematics", grade: 5, credit: 6 },
  { name: "History", grade: 4, credit: 4 },
  { name: "Programming", grade: 5, credit: 8 },
  { name: "Cybersecurity", grade: 4, credit: 8 },
];

let totalCredits = 0;
let weightedSum = 0;

for (let i = 0; i < grades.length; i++) {
  const subject = grades[i];

  totalCredits += subject.credit;
  weightedSum += subject.grade * subject.credit;
}

const gpa = weightedSum / totalCredits;
console.log(gpa);
