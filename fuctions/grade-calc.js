// take a student score, and total possible score
// 15/20 - you got a C (75%)
// A (90-100) B (80-89) C (70-79) D (60-69) F <= 59
// console.log to screen and get correct output

let studentGrader = function (studentScore, totalPossible) {
  let grade = Math.floor((studentScore / totalPossible) * 100);
  let letterGrade;

  if (grade >= 90) {
    letterGrade = 'A';
  } else if (grade >= 80) {
    letterGrade = 'B';
  } else if (grade >= 70) {
    letterGrade = 'C';
  } else if (grade >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }
  return `you got an ${letterGrade} and scored a ${grade}%`

}

let result = studentGrader(18, 20);
console.log(result)
