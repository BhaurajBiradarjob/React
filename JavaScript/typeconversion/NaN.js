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
