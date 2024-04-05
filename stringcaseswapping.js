
// Function to swap the case of each character in a string
function swapCaseOfString(inputString) {
    return inputString
      .split("")// Split the input string into an array of characters
      // Map over each character in the array to either uppercase or lowercase
      .map((char) => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else if (char === char.toLowerCase()) {
          return char.toUpperCase();
        } else // If the character is neither uppercase nor lowercase keep it unchanged
        {
          return char;
        }
      })
      // Join the array of characters back into a string
      .join("");
  }
  
  // Prompt the user to input the text
  const userInput = prompt('Enter the text to be swapped case:"The Quick Brown Fox"');
  if (userInput !== null && userInput.trim() !== '') {
    // Call the swapCaseOfString function with the user input
    const output = swapCaseOfString(userInput);
    alert(output); // Alert the swapped case text
  } else //Display an alert if no string was provided before pressing OK
  {
    alert('No input provided. Try again.'); 
}


