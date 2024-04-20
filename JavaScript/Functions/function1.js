//setTimeout function

//setTimeout(function, milliseconds, param1, param2...paramN)

//milliseconds -> the number of milliseconds to wait before executing the code.
//param1, param2 ...... paramN

//setTimeout is a function that is used to execute a function or a piece of code after a
//specified delay in millisecond, which allows to execute a function, after waiting a
//specified time of milliseconds

// function welcome() {
//     console.log("Welcome");
// }

// function greet(data) {
//     console.log("Welcome "+data);
// }

// setTimeout(welcome, 2000);
// setTimeout(greet, 4000, "Sam");

//setTimeout returns an integer value that represents the ID of the timeout, this value
//can be used to cancel the timeout before it executes using the cleartimeout() method.

// let timeoutID = setTimeout(function () {
//     console.log("New Timeout");
// }, 5000);

// console.log(timeoutID);
// clearTimeout(timeoutID);

//setInterval function
//setInterval function repeatedly executes a function at specified time intervals.
//As it continue to execute we can stop using clearInterval() method

function welcome() {
    console.log("Welcome");
}

let intervalID = setInterval(welcome, 1000);

setTimeout(function () {
    clearInterval(intervalID);
}, 6000);