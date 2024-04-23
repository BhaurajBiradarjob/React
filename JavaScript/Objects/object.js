/*
Object is an unordered collection of key value pairs where each key value pair is
called property.
The key can be string, or number whereas number is used very rarely as a key, and
the value can be any valid type like string, number, array or even a function.
When we declare a function as a property of an object, we can call this as a method
*/

// let obj = {};
// console.log(obj);
// console.log(typeof obj);

// let person = {
//     firstName: "Sam",
//     lastName: "Kumar"
// };

// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);

//Array notation for accessing properties
// objectName["propertyName"]
// console.log(person["firstName"]);
// console.log(person["lastName"]);

// let person1 = {
//     name:"sam",
//     age: "35",
//     "Full Address": "Mumbai, Andheri",
//     job: "Designer",
//     dob: 1990,
//     1990:"DOB"
// };
// console.log(person1);
// console.log(person1[1990]);
// console.log(person1["Full Address"]);
// console.log(person1.age);

// modifying the value of a property
// let person = {
//     firstName: "Sam",
//     lastName: "Kumar"
// };
 
// console.log(person);
// person.firstName = "Shyam";
// console.log(person);
// person["lastName"] = "Shetty";
// console.log(person);

// let person = {
//     firstName: "Rakesh",
//     lastName: "Kumar",
//     age: 2024 - 1990,
//     job: "Designer",
//     friends: ["Teena", "Suraj", "Raj"]
// };

// console.log(person);
// console.log(`First Name is : ${person.firstName} \n Last Name is : ${person.lastName}
//                             \n Age is : ${person.age} \n Job is : ${person.job}
//                             \n Friend 1 : ${person.friends[0]} \n Friend 2 : ${person.friends[1]}
//                             \n Friend 3 : ${person.friends[2]}`);


// let nameKey = "Name";
// console.log(person["last" + nameKey]);

// let interestedIn = prompt("What do you want to know about this person? Choose between firstname");

// if (person[interestedIn]) {
//     console.log(person[interestedIn]);
// }
// else {
//     console.log("Wrong input");
// }

//adding parameters to property
// person.location = "San Fransisco";
// person["twitter"] = "@Bhauraj";
// console.log(person);

// let person = {
//     firstName: "Kiran",
//     lastName: "Kumar",
//     age: 25
// };

// function welcome() {
//     console.log("Welcome Kiran");
// }
// function call_Person() {
//     console.log("Person Called");
// }

// person.welcome = welcome;
// person.call_Person = call_Person;
// console.log(person);
// person.welcome();
// person.call_Person();

//It is also possible to define methods of an object using object literal syntax
//ES6(Ecma Script 6) provides us with the method syntax that allows us to make it
//shorter to define a method for an object
//  let person = {
//      firstName: "Kiran",
//      lastName: "Kumar",
//      age: 25,
//      welcome: function () {
//          console.log("Welcome Kiran");
//      },
// };
 
// person.welcome();

// let person = {
//      firstName: "Rakesh",
//      lastName: "Kumar",
//      age: 2024 - 1990,
//      job: "Designer",
//      friends: ["Teena", "Suraj", "Raj"],
//     calcAge: function (birthyear) {
//         return 2024 - birthyear;
//      },
// };
 
// let age = person.calcAge(1986);
// console.log(age);

// if let -> we can't verify with window.name1 property -> property can't be visible
// if property type is nothing or var -> we can verify with window.name1 property from browser
// let name1 = "Javascript";
// console.log(name1);

// function func() {
//     console.log("func");
// }

// func();
// window.func();

//setTimeout, setInterval these are all part of window object
// window is an object which represents the browser window in which the current script is
// running. It is top level object in browser and provides several properties and
// methods that allow to interact with the browser window
// window.setTimeout(func, 1000);
// window.alert("hello");
// window.prompt("What is your name?");

// let result = window.confirm("Are you sure, you want to delete the item?");

// if (result) {
//     console.log("deleted");
// }
// else {
//     console.log("Not deleted");
// }

// window.open("https://www.bing.com", "_blank");

//this keyword
//If we use this keyword in a method then this keyword points to owner of the object
//If we use this keyword alone, then it points to the global object.
//If we use this keyword in a function which is in strict mode, then we will get undefined
//If we use this keyword in a function then this points to global object.
//In case of DOM manipulation suppose inside the button if we use this keyword, then
//this will point to the element which will receive the event.

// console.log(this);

// function fnc() {
//     console.log(this);
// }

// fnc();
// window.fnc();

//use strict is a directive that tells the browser to execute the code in strict mode.
//only const and let works with use strict mode

// "use strict";
// //x=35; console.log(x); we will get reference error
// let x = 35;
// console.log(x);


// function fnc() {
//     console.log(this); //Undefined
// }
// fnc();

// let student = {
//     firstName: "Raj",
//     lastName: "K",
//     age: 25,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     },
//     getfullName: function () {
//         return this.fullName;
//     }
// }

// console.log(student);
// console.log(student.fullName());

//Implicit binding
//the value of this is determined by the object on which a function is invoked
//when a function is called as a method of an object, the object before the
//dot becomes this
// let PersonFunction = function (obj) {
//     obj.printPerson = function () {
//         console.log(this.name);
//     };
// };

// let suresh = {
//     name : "Suresh",
//     age : 44
// };

// let rakesh = {
//     name : "Rakesh",
//     age : 44
// };

// console.log(PersonFunction);

// PersonFunction(suresh);
// suresh.printPerson();

// PersonFunction(rakesh);
// rakesh.printPerson();

// let Person = function (name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function () {
//             console.log(this.name);
//         },
//         friend: {
//             name: "Reema",
//             printName: function () {
//                 console.log(this.name);
//             },
//         },
//     };
// };

// console.log(Person);
// let suresh = Person("Suresh", 44);
// let rakesh = Person("Rakesh", 54);

// console.log(suresh);
// suresh.printName();
// console.log(rakesh);
// rakesh.printName();

// console.log(suresh.friend);
// suresh.friend.printName();
// rakesh.friend.printName();

//Explicit Binding
//in explicit binding, we can directly set the value of this using call(), apply()
//and bind() methods

//call()
//the call() method calls a function with given this value and arguments provided
//individually

// name1 = "Ramesh";
// let displayFunc = function () {
//     console.log(this.name1);
// };

// let suresh = {
//     name1: "Suresh",
//     age:44
// };

// console.log(this);
// displayFunc.call(suresh); // this refers to owner of the object which is suresh object

// displayFunc.call(this);// as name is present in window object, this refers to the name
// //present in window object

// displayFunc.call(window);

// let displayFunc = function (x,y) {
//     console.log(this.name1);
//     console.log(`${this.name1} is learning ${x} and ${y}`);
// };

// let suresh = {
//     name1:"Suresh",
//     age : 44
// };
// let ramesh = {
//     name1:"Ramesh",
//     age : 54
// };
// let a = "Java";
// let b = "JavaScript";
// displayFunc.call(suresh, a, b);
// displayFunc.call(ramesh, "Flutter", "Dart");

// apply method -> accepts array parameter
// displayFunc.apply(suresh, [a, b]);
// displayFunc.apply(ramesh, "Flutter", "Dart");

//bind -> will return new function
// let newFunc = displayFunc.bind(ramesh, "Flutter", "Dart");
// newFunc();

// let newFunc1 = displayFunc.bind(suresh, ["Flutter", "Dart"]);
// newFunc1();

// let person = {
//     fullName: function (age, city) {
//         return `First Name:${this.firstName} \n
//                 Last Name:${this.lastName} \n
//                 Age:${age} \n
//                 city:${city}`
//     }
// };

// let person1 = {
//     firstName: "Bhauraj",
//     lastName: "Biradar"
// };

// let person2 = {
//     firstName: "Mahesh",
//     lastName: "Biradar"
// };

// console.log(person.fullName());

// let fullName = person.fullName.call(person1, 34, "Mumbai");
// console.log(fullName);

// let fullName2 = person.fullName.apply(person1, [34, "Mumbai"]);
// console.log(fullName2);


// let fullName3 = person.fullName.bind(person1, 34, "Mumbai");
// console.log(fullName3());

//new keyword creates object of function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
//     console.log(`Name:${this.name} Age:${this.age}`);
// }

// let suresh = new Person("Mahesh", 34);
// console.log(suresh);
// console.log(Person);
// console.log(Person.prototype.constructor);

//window() binding
// name = "Bhauraj";
// var displayFunc = function () {
//     console.log(this);
//     console.log(this.name);
// };

// displayFunc();
// window.displayFunc();
// console.dir(displayFunc);

//The below code this inside the call back function is pointing to window, so to
//fix this problem we can solve in different ways.
let javaScript = {
    name1: "JavaScript",
    framework: ["Angular", "Vue"],
    printFramework: function () {
        console.log(this);
        this.framework.forEach(function (framework) {
            console.log(this);
            console.log(`${this.name1} loves ${framework}`);
        }
        );
    },
};

javaScript.printFramework();
//tobe continued..