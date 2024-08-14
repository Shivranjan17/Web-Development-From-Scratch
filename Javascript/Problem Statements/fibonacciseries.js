function fibonacciGenerator(n) {
    // Initialize the output array
    var output = [];

    // Handle edge cases
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else if (n > 2) {
        // Start with the first two Fibonacci numbers
        output = [0, 1];
        
        // Use a for loop to generate the rest of the Fibonacci sequence
        for (let i = 2; i < n; i++) {
            // // Calculate the next Fibonacci number
            // const nextNumber = output[i - 1] + output[i - 2];
            // // Append it to the array
            // output.push(nextNumber);
            output.push(output[output.length-2] +output[output.length-1]);
        }
    }

    return output;
}

// Example usage:
console.log(fibonacciGenerator(5));  // Output: [0, 1, 1, 2, 3]
console.log(fibonacciGenerator(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
