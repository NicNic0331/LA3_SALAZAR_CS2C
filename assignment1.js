// Prompt the user to input their score
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter your score: ', score => {
    // Convert the score to a number
    score = Number(score);
  
    // Use Conditional Ternary statements to assign grades
    let grade = score >= 97 ? "1.00" :
                score >= 94 ? "1.25" :
                score >= 91 ? "1.50" :
                score >= 88 ? "1.75" :
                score >= 85 ? "2.00" :
                score >= 82 ? "2.25" :
                score >= 79 ? "2.50" :
                score >= 76 ? "2.75" :
                score >= 75 ? "3.00" :
                score >= 72 ? "4.00" : "5.00";
  
    let description = score >= 97 ? "Excellent" :
                      score >= 94 ? "Excellent" :
                      score >= 91 ? "Above Average" :
                      score >= 88 ? "Above Average" :
                      score >= 85 ? "Average" :
                      score >= 82 ? "Average" :
                      score >= 79 ? "Below Average" :
                      score >= 76 ? "Below Average" :
                      score >= 75 ? "Below Average" :
                      score >= 72 ? "Poor" : "Poor";
  
    // Additional If..else if..else Statements to assign the final remarks of the grade
    let remarks;
    if (score >= 90) {
      remarks = "HIGH PASS, Candidate for Cum Laude";
    } else if (score >= 80) {
      remarks = "AVERAGE PASS";
    } else if (score >= 75) {
      remarks = "LOW PASS";
    } else {
      remarks = "FAILED, Needs Improvement";
    }
  
    // Log the corresponding grade to the console
    console.log(`Your equivalent Grade is "${grade}" ${description}`);
    console.log(`Final Remarks: ${remarks}`);
  
    readline.close();
  });