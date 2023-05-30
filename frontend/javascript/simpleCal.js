// Addition
function add(num1, num2) {
    return num1 + num2;
  }
  
  // Subtraction
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // Multiplication
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Division
  function divide(num1, num2) {
    // Check if dividing by zero
    if (num2 === 0) {
      return "Error: Cannot divide by zero";
    }
    
    return num1 / num2;
  }
  
  // Example usage
  console.log(add(5, 3)); // Output: 8
  console.log(subtract(10, 4)); // Output: 6
  console.log(multiply(2, 6)); // Output: 12
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(7, 0)); // Output: Error: Cannot divide by zero
  