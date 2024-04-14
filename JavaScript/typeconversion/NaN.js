//NaN -> Not an Number

// It is special value that represents an unpresentable value resulting from
//an operation that should return a valid number but does not

console.log(Math.sqrt(-1)); //NaN
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("java" / 2);

let a = 0 / 0;
console.log(a);
console.log(typeof a);

// We can use isNaN(), to check if the value is Nan
console.log(isNaN("Dart"));
console.log(isNaN(33));

if (isNaN(parseInt("javaScript")))
{
    console.log("Conversion failed");
}

// Coercion is process of converting a value from one datatype to another type
// typically during comparison or operation

// Implicit Coercion
// below code 10 is implicitly coerced into string because of the concatenation operator
console.log(10 + "10"); //1010
console.log(10 * "10"); //100
console.log("25" - 10);//15
console.log("22" - "10" - 6);//6

//Explicit Coercion
// this type of conversion is intentional and we can ensure predictable result.
console.log(Number("100"));//100
console.log(String(100));//100

//True and False
let x;
let ab = null;
console.log(Boolean(x));
console.log(Boolean(ab));

console.log(Boolean(0));
console.log(Boolean(45));
console.log(Boolean(-45));
