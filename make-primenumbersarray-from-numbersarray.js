
function isPrime(num) {
    // Numbers less than or equal to 1 are not prime
    if (num <= 1) return false;
    
    // Base cases for prime numbers
    if (num <= 3) return true;

    // Eliminate multiples of 2 and 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check for prime using 6k ± 1 optimization
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    // If no divisor found, the number is prime
    return true;
}

// Function to filter prime numbers from user input
function filterPrimeNumbersFromInput() {
    // Prompt the user to enter numbers separated by commas
    const input = prompt('Enter numbers separated by commas:');

    // Split the input string into an array of numbers
    const numbers = input.split(',').map(num => parseInt(num));
    // Filter prime numbers from the input array
    const primeNumbers = numbers.filter(num => isPrime(num));

    // Display prime numbers to the user
    if (primeNumbers.length === 0) {
        alert('No prime numbers in the array.');
    } else {
        alert('Prime numbers in the  array are: ' + primeNumbers.join(', '));
    }
    return primeNumbers;
}

// Call the function to filter prime numbers from user input
 const primeNumbersArray = filterPrimeNumbersFromInput();
  console.log(primeNumbersArray);