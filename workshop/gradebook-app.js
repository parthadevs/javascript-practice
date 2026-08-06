function getAverage(array){
  let sum = 0;
  for(let score of array){
    sum+=score
  }

  return sum / array.length
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function getGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";

  return "F";
}


function studentMsg(scores, studentScore) {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);

  return `Class average: ${average}. Your grade: ${grade}. You ${
    hasPassingGrade(studentScore) ? "passed" : "failed"
  } the course.`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))