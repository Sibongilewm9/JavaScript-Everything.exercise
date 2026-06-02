// TODO: Create a function called sum. The function will take in a parameter and calculate all the numbers from 0 -> the parameter.
// You must check if the parameter is an integer first before any calculation is made.
// If the parameter is not a number, return a message stating, “The value passed is not a number”.
// You are NOT allowed to use methods(!Number.isInteger(n)) or regular expressions.
function sum(n) {
  // Check if it's a number and integer without Number.isInteger
  if (typeof n !== "number" || n !== Math.floor(n)) {
    return "The value passed is not a number";
  }

  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter.
// The function will print the factorial of the entered number, e.g. factorial(4) -> 4*3*2*1 //output 24
function factorial(num) {
  if (num < 0) return "Factorial not defined for negative numbers";
  if (num === 0) return 1;

  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}

// TODO: Create a functio n called funkyMath. If this function is called with 2 arguments the function will subtract the first from the second.
// If the function is called with 3 arguments it will add all 3 numbers together.
// If the function is called with 4 arguments it will add together argument 1 and 2, 3 and 4 separately. Then divide them accordingly
function funkyMath(a, b, c, d) {
  let argCount = arguments.length;

  if (argCount === 2) {
    return b - a; // subtract first from second
  } else if (argCount === 3) {
    return a + b + c;
  } else if (argCount === 4) {
    return (a + b) / (c + d);
  } else {
    return "Invalid number of arguments. Use 2, 3, or 4 arguments.";
  }
}

// TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array.
// Use the current array [1, 2, 33, 45, 6, 44]. Bonus: Make sure to arrange them from smallest to biggest.
let originalArray = [1, 2, 6, 33, 44, 45];
let oddNumbers = [];

for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] % 2 !== 0) {
    oddNumbers.push(originalArray[i]);
  }
}

// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
let me = {
  firstName: "Sibongile",
  lastName: "Mpeta",
  age: 20,
  favouriteColour: "Black",
  dreamCar: "G-Wagon",
};

// TODO: Create and add a new property and value of ‘favourite food’ to the object
me.favouriteFood = "Pizza";

// TODO: Now delete the age property from the object
delete me.age;

// ---------- TESTING ALL CODE ----------
console.log("=== SUM FUNCTION ===");
console.log("sum(5):", sum(5));
console.log("sum(3.5):", sum(3.5));
console.log("sum('hello'):", sum("hello"));

console.log("\n=== FACTORIAL FUNCTION ===");
console.log("factorial(4):", factorial(4));
console.log("factorial(5):", factorial(5));
console.log("factorial(0):", factorial(0));

console.log("\n=== FUNKYMATH FUNCTION ===");
console.log("funkyMath(5, 10):", funkyMath(5, 10));
console.log("funkyMath(1, 2, 3):", funkyMath(1, 2, 3));
console.log("funkyMath(8, 2, 3, 5):", funkyMath(8, 2, 3, 5));

console.log("\n=== ODD NUMBERS ===");
console.log("Original array:", originalArray);
console.log("Odd numbers sorted:", oddNumbers);

console.log("\n=== OBJECT 'me' ===");
console.log(me);
