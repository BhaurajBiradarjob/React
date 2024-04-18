// function showMessage() {
//     console.log("This is a message");
// }

// showMessage();

// let username = "Rahul";
// function showMessage() {
//     username = "Seema";
//     let message = `hello ${username}`;
//     console.log(message);
// }
// console.log(username);
// showMessage();
// console.log(username);

//Function expression
//Function can also be defined as expression

// let addition = function add(a, b) {
//     return a + b;
// }
// let result = addition(20, 15);
// console.log(result);

// let check_Score = function (currentScore, passScore) {
//     if (currentScore >= passScore) {
//         console.log("Pass");
//     }
//     else {
//         console.log("Fail");
//     }
// }

// check_Score(90, 35);

// //Function can be passed as values
// function add(x, y) {
//     return x + y;
// }
// function sub(x, y) {
//     return x - y;
// }
// function mul(x, y) {
//     return x * y;
// }

// //We can store functions in an array
// let arithmetic_op = [add, sub, mul];

// //for loop
// for (let op of arithmetic_op) {
//     let result = op(20, 30);
//     console.log(result);
// }

// Function accepts another function as an argument

//This function is called and taking as an argument as function, here the function is
//shout and cry which is a reference we are passing, indirectly we are calling shout()
//and cry() function2 times inside the call_function

// function call_function(func) {
//     func();
//     func();
// }
// function shout() {
//     console.log("Shout");
// }
// function Cry() {
//     console.log("Cry");
// }

// call_function(shout);
// call_function(Cry);

// function call_function(func, number) {
//     for (let i = 0; i <= number; i++){
//         func();
//     }
//  }
//  function shout() {
//      console.log("shout");
//  }
// function cry() {
//     console.log("cry");
//  }

//  call_function(shout, 7);
//  call_function(cry, 5);

//Example 3
// function PickOne(func1, func2) {
//     let random = Math.random();
//     if (random < 0.5) {
//         func1();
//     }
//     else {
//         func2();
//     }
//  }
//  function shout() {
//      console.log("shout");
//  }
// function cry() {
//     console.log("cry");
//  }

//  PickOne(shout, cry);
//  PickOne(cry, shout);

//Returning multiple values from a function using an array
// function names() {
//     let name1 = "Rahul";
//     let name2 = "Kiran";
//     let name3 = "Teena";
//     let name4 = "Seema";

//     return [name1, name2, name3, name4];
// }

// let names_array = names();

// console.log(`List of names:${names_array} and type is:${typeof names_array}`);

//function returns a function

// function multipleBy(num) {
//     return function (n1) {
//         return n1 * num;
//     }
// }

// let triple = multipleBy(3);
// console.log(triple(3));

// let double = multipleBy(2);
// console.log(double(2));

// let halves = multipleBy(0.5);
// console.log(halves(25));

// function makeBetween(x, y) {
//     return function (num) {
//         return num >= x && num <= y;
//     }
// }

// let range1 = makeBetween(0, 18);
// console.log(range1(20));
// console.log(range1(15));

//Anonymous function
// a function is without a name.
//This function has no name between function keyword and paranthesis

let func = function () {
    console.log("Anonymous function");
}
func();

//IIFE -> Immediate Invoked Function Expression
//If we want to create a function that will execute immediately after the declaration
//IIFE executed immediately as soon it is created

(function () {
    console.log("IIFE function");
})();

(function add(a, b) {
    let x = a + b;
    console.log(x);
})(5, 5);

let printme = function (value) {
    console.log(`Value is ${value}`);
}

printme(
    //IIFE
    (function (n) {
        return n * n;
    })(5)
);

//Pure Function
// Pure function doesn't access any external values
// code of pure function depends on the arguments
// Pure functions does not modify the arguments
// Pure function returns identical return value to identical arguments.

let getCube = function (x) {
    let cube = x * x * x;
    return cube;
}

console.log(getCube(3));

let validLogin = function (username, password) {
    if (username === "admin" && password === "admin1234") return true;
    else return false;
}

console.log(validLogin("admin", "admin1234"));
console.log(validLogin("admin", "wwwadmin1234"));

//Argument


