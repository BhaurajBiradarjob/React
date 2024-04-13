// Null_Coalescing operator
// The null coalescing operator can be written as "??" double question mark
let x;
let result = (x ?? "Not defined x");

console.log(result);

x = 34;
let result1 = (x ?? "Not defined x");
console.log(result1);
