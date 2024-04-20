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
window.alert("hello");
window.prompt("What is your name?");

let result = window.confirm("Are you sure, you want to delete the item?");

if (result) {
    console.log("deleted");
}
else {
    console.log("Not deleted");
}

window.open("https://www.bing.com", "_blank");
