const students = [
  { name: "Maftuna", isPassed: true },
  { name: "Ruhshona", isPassed: false },
  { name: "Shohruzbek", isPassed: true },
  { name: "Shahzoda", isPassed: true },
  { name: "E'zoza", isPassed: false },
];

const totalStudents = students.length;
const passedStudents = students.filter((student) => student.isPassed).length;
const passPercentage = (passedStudents / totalStudents) * 100;

const isPassedThreshold = passPercentage >= 70;

console.log(isPassedThreshold);
