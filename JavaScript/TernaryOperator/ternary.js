// A ternary operator evaluates a condition and executes a block of code based
//on the condition
// Ternary operator is also known as Conditional Operator
//Syntax :
//Condition?expr1:expr2;

let age = 15;
let result = age >= 18 ? "Eligible to vote" : "No Vote";
console.log(result);

let marks = prompt("Please enter marks");
let result1 = marks > 60 ? "Passed" : "failed";
console.log(result1);

let a = 10;
let result2 = a >= 10 ? (a = 10 ? "10" : "Not 10") : "More than 10";
console.log(result2);