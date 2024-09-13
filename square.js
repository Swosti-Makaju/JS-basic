// Regular Function
// This is a normal function that calculates the square of a number
function square(a) {
      return a * a ; // Returns a square
    }
    
    const num = square(9); // Calls the function with 9 and stores the result in num
    
    // Arrow Function
    // Arrow functions provide a shorter syntax for writing functions
    // This arrow function does the same thing as the regular function above
    const square2 = (a) => a * a ;
    
    // The above arrow function is equivalent to:
    // const square2 = (a) => {
    //   return a * a ; // Explicit return
    // }
    
    const num2 = square2(3); // Calls the arrow function with 3 and stores the result in num2
    
    console.log(num); 
    console.log(num2); 
    