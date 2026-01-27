// This is a global variable because it is outside any skibidi block or skibidi function
var globalNumber = 10;
console.log("Global Number:", globalNumber);

// This is a string variable
let greetingMessage = "Hello from Michael! :) ";
console.log("Greeting Message:", greetingMessage);

// This variable only exists inside this block
{
  let blockNumber = 5; // block-scoped variable
  console.log("Block Number:", blockNumber);
}

let a = 8;
let b = 4;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// OBJECT VARIABLE USING CONST
const skibidiprofile = {
  Skibidi: "Skibidi FortNite",
  status: "Skibidi ohio fortnite final boss",
  level: 67
};

console.log("Object:", skibidiprofile);
