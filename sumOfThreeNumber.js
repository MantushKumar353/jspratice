const readline = require('readline');  // Import the readline module

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your first number: ', (num1) => {
  rl.question('Enter your second number: ', (num2) => {
    rl.question('Enter your third number: ', (num3) => {
      // Convert input to integers
      let sum = parseInt(num1) + parseInt(num2) + parseInt(num3);
      console.log('The sum is: ' + sum);
      
      // Close the readline interface
      rl.close();
    });
  });
});
