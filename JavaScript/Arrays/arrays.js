//Syntax :
/*
    <type> <var_name> = [value1, value2, value3...valuen]
*/

// Example 1
// let fruits = [];
// console.log(fruits);
// console.log(typeof fruits);
// fruits[0] = "Apple";
// fruits[1] = "Banana";

// console.log(fruits);

//Example 2
// let fruit = ["Apple", "Banana"];
// console.log(fruit);
// let mixed = ["Banana", 44, "Onion", undefined, 44.3, null, true];
// console.log(mixed);
// console.log(typeof mixed);
// console.log(mixed[4]);


// let food = mixed[0] + mixed[1];
// console.log(typeof food);
// console.log(food);

//methods
//toString()
let fruits = ["Apple", "Banana"];
let newitems = fruits.toString();
console.log(`String : ${newitems}\n type : ${typeof newitems}`);

//join()
let fruit = ["Apple", "Banana"];
let newitem = fruit.join("-");
console.log(`String : ${newitem}\n type : ${typeof newitem}`);

