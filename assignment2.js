// Prompt the user to input the Max Limit of the Loops
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the Limit of the Double Loop: ', limit => {
    // Convert the limit to a number
    limit = Number(limit);
  
    // Initialize counters to zero
    let counter1 = 0;
    let counter2 = 0;
  
    // Use double Loop Statement to print out the map of iterations
    for (counter1 = 0; counter1 < limit; counter1++) {
      for (counter2 = 0; counter2 < limit; counter2++) {
        // Create a variable that will add the current values of the counters at each iteration
        let addedValue = counter1 + counter2;
  
        // Log the corresponding Loop Points and added Value per iteration to the console
        console.log(`[${counter1}] [${counter2}] Added value is ${addedValue}`);
      }
    }
  
    readline.close();
  });