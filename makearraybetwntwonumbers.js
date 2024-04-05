function generateArrayBetween(num1, num2) {

    const result = [];
  
    // Set the start number and the end number
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);
  
    // Loop from the start number to the end number and push each number into the result array
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  
    return result;
  }
  
  // Prompt the user to enter two numbers which are integers
  const num1 = parseInt(prompt('Enter the first number:'));
  const num2 = parseInt(prompt('Enter the second number:'));
  
  // Check the user input enters are integers
  if (!isNaN(num1) && !isNaN(num2)) {
    // Call the function and display the result as an alert
    const result = generateArrayBetween(num1, num2);
    alert(result); // Display the result as an alert
  } else {
    console.log('Invalid input. Please enter valid numbers.');
  }