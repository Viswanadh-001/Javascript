let scoreObtained = [45, 50, 39, 78, 65, 20];

function studentIsPassed(score) {
  return score < 40;
}

if(scoreObtained.some(studentIsPassed) == true) {
  console.log("At least one of the students failed.");
}

else
  console.log("All students are passed.");