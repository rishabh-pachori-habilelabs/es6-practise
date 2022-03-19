/** Array destructuring */

let [greeting, pronoun] = ["Hello", "I" , "am", "Rishabh"];

console.log(greeting);//"Hello"
console.log(pronoun);//"I"

// Declaring Variables before Assignment

let greeting1, pronoun1;
[greeting, pronoun] = ["Hello", "I" , "am", "Rishabh"];

console.log(greeting1);//"Hello"
console.log(pronoun1);//"I"

// Skipping Items in an Array
let [greeting2,,,name1] = ["Hello", "I" , "am", "Rishabh"];

console.log(greeting2);//"Hello"
console.log(name1);//"Rishabh"

// Assigning the rest of an array

let [greeting3,...intro] = ["Hello", "I" , "am", "Rishabh"];

console.log(greeting3);//"Hello"
console.log(intro);//["I", "am", "Rishabh"]

// Destructuring Assignment with Functions
function getArray() {
	return ["Hello", "I" , "am", "Rishabh"];
} 
let [greeting4,pronoun4] = getArray();

console.log(greeting4);//"Hello"
console.log(pronoun4);//"I"

// Using Default Values
let [greeting5 = "hi",name3 = "Rishabh"] = ["hello"];

console.log(greeting5);//"Hello"
console.log(name3);//"Rishabh"

// Swapping Values using the Destructuring Assignment
let a = 3;
let b = 6;

[a,b] = [b,a];

console.log(a);//6
console.log(b);//3

/** Object Destructuring */

let person = {name: "Rishabh", country: "India", job: "Developer"};

let {name: personName, country, job} = person;

console.log(personName);//"Rishabh"
console.log(country);//"India"
console.log(job);//Developer"

// Variables declared before being assigned
// let person1 = {name: "Rishabh", country: "India", job: "Developer"}; 
// let name, country, job;

// {name, country, job} = person;

// console.log(name);// Error : "Unexpected token ="

let person1 = {name: "Rishabh", country: "India", job: "Developer"}; 
let personName1, country1, job1;

({name: personName1, country: country1, job: job1} = person);

console.log(personName1);//"Rishabh"
console.log(job);//"Developer"

// Using Default Values 
// Using a new Variable Name

let person2 = {name: "Rishabh", country: "India", job: "Developer"};

let {name: personName2 = "myName", friend = "Rishabh2"} = person;

console.log(personName2);//"Rishabh"
console.log(friend);//"Rishabh2"


// Object Destructuring and Functions
function person({personName3: x = "Rishabh", job: y = "Developer"} = {}) {
	console.log(x);
}

person({personName3});//"Rishabh"

// Rest in Object Destructuring

let person = {name: "Rishabh", country: "India", job: "Developer", friends: ["Rishabh2", "Rishabh3"]};

let {personName4, friends, ...others} = person;

console.log(personName4);//"Rishabh"
console.log(friends);//["Rishabh2", "Rishabh3"]
console.log(others);// {country: "India", job: "Developer"}