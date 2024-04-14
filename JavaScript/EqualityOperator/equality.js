//== (Equality Operator) -> Checks only value
//=== (Strict Equality Operator) -> Checks value & type

//Equality Operator(==)
console.log("Equality Operator(==)"); 
console.log(1 == 1); //true
console.log(1 == "1"); //true
console.log(0 == ""); //true
console.log(undefined == null); //true
console.log(false == 0); //true

//Strict Equality Operator(===)
console.log("Strict Equality Operator(===)");
console.log(1 === 1); //true
console.log(1 === "1"); //false
console.log(0 === "");//false
console.log(undefined === null);//false
console.log(false === 0);//false

//Non Equality Operator(!=)
console.log("Non Equality Operator(!=)"); 
console.log(1 != 1); //false
console.log(1 != "1"); //false
console.log(0 != ""); //false
console.log(undefined != null); //false
console.log(false != 0); //false

//Strict Non Equality Operator(===)
console.log("Strict Non Equality Operator(!==)");
console.log(1 !== 1); //false
console.log(1 !== "1"); //true
console.log(0 !== "");//true
console.log(undefined !== null);//true
console.log(false !== 0);//true