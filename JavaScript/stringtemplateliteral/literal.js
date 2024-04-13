let name1 = "Rahul";
let age = 25;

let sentence = "My name is " + name1 + "and age is " + age;
console.log(sentence);

//template literal

/*
Template literals use backticks(``), with the template literal we can use both double
and single quotes inside a string. It also allows multiline strings.

It provides an easy way to interpolate variables and expressions into strings which is
called string interpolation (${})

*/

let name2 = "Rahul";
let age1 = 25;

let sentence1 = `My name is  ${name2} and age is  ${age1}`;
console.log(sentence1);

let firstname = "Shyam";
let lastname = "Shetty";
let job = "developer";
let birthyear = 1990;
let year = 2024;

console.log(`My name is ${firstname} ${lastname} and I'm working as ${job} and I'm ${year - birthyear} old `);

console.log(`Addition of 13 and 13 is ${13 + 13}`);