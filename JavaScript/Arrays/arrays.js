//Syntax :
/*
    <type> <var_name> = [value1, value2, value3...valuen]
*/

// Example 1
// let fruits = []; // Empty
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
// let fruits = ["Apple", "Banana"];
// let newitems = fruits.toString();
// console.log(`String : ${newitems}\n type : ${typeof newitems}`);

//join()
// let fruit = ["Apple", "Banana"];
// let newitem = fruit.join("-");
// console.log(`String : ${newitem}\n type : ${typeof newitem}`);

//pop() method
// this method removes the last element from an array
// let fruits = ["Apple", "Banana","Orange"];
// console.log(fruits);
// let removed = fruits.pop();
// console.log(fruits);
// console.log(removed);

//length property
// let fruits = ["Apple", "Banana", "Orange"];
// let arr_length = fruits.length;
// console.log(`The length of fruits ${arr_length}`);

// // for loop
// for (let i = 0; i <= arr_length; i++){
//     console.log(`Extracted element : ${fruits[i]}\n`)
// }

//push() method adds one or more elements to the end of the given array,
// this method changes the original array
// let fruits = ["Apple", "Banana", "Orange"];
// let arr_length = fruits.length;

// console.log(`Original array ${fruits}... \n Length of original array:${arr_length}`);

// fruits.push("Grapes");
// fruits.push("BlueBerries");

// console.log(`Modified array : ${fruits}.. \n Length of the modified array : ${fruits.length}`);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Element present inside array ${fruits[i]}`)
// }

//Concat() method
// The method combines two or more arrays and returns a new string
// let fruits1 = ["Apple", "Banana", "Orange"];

// let fruits2 = ["Grapes", "BlueBerries"];

// let fruits = fruits1.concat(fruits2);

// console.log(`fruits : ${fruits}`);

// console.log(`fruits2 : ${fruits2.concat(fruits1)}`);

// let fruits1 = ["Apple", "Banana", "Orange"];
// let fruits = fruits1.concat("Grapes", "BlueBerries");
// console.log(`fruits : ${fruits}`);

//splice method
//The splice() method returns an array by adding or removing its elements in place.

//Synatx
//arr.splice(start,deleteItem,add1,add2..addN);
// let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// let removedItem = numbers.splice(4, 1, 25);
// console.log(`Item removed : ${removedItem}`);
// console.log(`New Items added : ${numbers}`);

// let fruits = ["Apple", "Banana", "Orange", "Grapes", "BlueBerries"];
// let removedItem = fruits.splice(2, 2, "25");
// console.log(`Item removed : ${removedItem}`);
// console.log(`New Items added : ${fruits}`);

// let fruits = ["Apple", "Banana", "Orange", "Grapes", "BlueBerries"];
// let removedItem = fruits.splice(1, 0, "Mango");
// console.log(`Item removed : ${removedItem}`);
// console.log(`New Items added : ${fruits}`);

// let fruits = ["Apple", "Banana", "Orange", "Grapes", "BlueBerries"];
// let removedItem = fruits.splice(2,3);
// console.log(`Item removed : ${removedItem}`);
// console.log(`New Items added : ${fruits}`);

//If start position is > than the length of array, then it doesnot delete anything
// let fruits = ["Apple", "Banana", "Orange", "Grapes", "BlueBerries"];
// let removedItem = fruits.splice(5,2,"Lemon");
// console.log(`Item removed : ${removedItem}`);
// console.log(`New Items added : ${fruits}`);

// If start < 0, the index is counted from backwards and item all added in the last
// position after removing
// let fruits = ["Apple", "Banana", "Orange", "Grapes", "BlueBerries"];
// let removedItem = fruits.splice(-1,1,"12","23");
// console.log(`Item removed : ${removedItem}`);
// console.log(`New Items added : ${fruits}`);

//If deleteCount is ommited, or is greater than the number of items left in the array
//it delete all elements from start to the end of the array
// let fruits = ["Apple", "Banana", "Orange", "Grapes", "BlueBerries"];
// let removedItem = fruits.splice(1);//delete after first elements
// console.log(`Item removed : ${removedItem}`);
// console.log(`New Items added : ${fruits}`);

//deleteCount is negative or 0, then no elements will be removed
// let fruits = ["Apple", "Banana", "Orange", "Grapes", "BlueBerries"];
// let removedItem = fruits.splice(1, -2, "B12", "B14");
// console.log(`Item removed : ${removedItem}`);
// console.log(`New Items added : ${fruits}`);

//console.log(1 + 2 === 3.0);
//Slice() method
//slice() method returns a copy of portion of an array into new array object.
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let newArray = numbers.slice(3, 6);
// newArray = numbers.slice(2);
// newArray = numbers.slice(0, -1);
// newArray = numbers.slice(-3);

// console.log(`New Array is ${newArray}`);

//shift() method
//The shift() method removes the first element from an array and returns that element
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let first = numbers.shift();
// console.log(`First element : ${first}`);
// console.log(numbers);

//Nested array
// let numbers = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [-5, -4, -3]
// ];
// console.log(`Index number 1 : ${numbers[0]}`);
// console.log(`Index number 2 : ${numbers[1]}`);
// console.log(`Index number 3 : ${numbers[2]}`);
// console.log(`Extra second Index : ${numbers[0][1]}`);
// console.log(`Extra second Index : ${numbers[2][0]}`);

//Unshift() method
//The unshift() method adds one or more elements to the begining of the array and
//returns the new length of array
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let c = numbers.unshift("Javascript");
// console.log(numbers);
// console.log(`The length of the array : ${c}`);

// let c1 = numbers.unshift(12, 22, "C", "C++");
// console.log(numbers);
// console.log(`The length of the array : ${c1}`);

// Array.Of() method
// Array.Of() method creates a new array instance from the given arguments
// let numbers = Array.of(5);
// console.log(numbers);
// console.log(`The length of the array : ${numbers.length}`);
// numbers = Array.of(3, 4, 5, 6);
// console.log(numbers);
// console.log(`The length of the array : ${numbers.length}`);

//isArray() method
//isArray() method checks if the given argument is an array or not
// let value1 = "Array";
// console.log(Array.isArray(value1));

// let array2 = [2, 3, 4, 5, 6, 7];
// console.log(Array.isArray(array2));

// let array3 = Array.of(12, 13, 14, 15, 16);
// console.log(Array.isArray(array3));






