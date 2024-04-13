//Type conversion and coercion

// string to number
let amount = "44";
console.log(amount);
console.log(typeof amount);

//ParseInt -> String to number
amount = parseInt(amount);
console.log(amount);
console.log(typeof amount);

amount = Number(amount);
console.log(amount);
console.log(typeof amount);

let amount2 = "44.33";
console.log(amount2);
console.log(typeof amount2);

//ParseInt -> String to number with data loss
amount2 = parseFloat(amount2);
console.log(amount2);
console.log(typeof amount2);

//toString() -> convert number to string

amount2 = amount2.toString();
console.log(amount2);
console.log(typeof amount2);

//String -> convert number to string
amount2 = String(amount2);
console.log(amount2);
console.log(typeof amount2);

//int to bool
let amount3 = 100
amount3 = Boolean(amount3);
console.log(amount3);//true
console.log(typeof amount3);

amount3 = 0;
amount3 = Boolean(amount3);
console.log(amount3);//false
console.log(typeof amount3);


