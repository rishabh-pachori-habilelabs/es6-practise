/**
 * Const variable
*/

let a = 10;
a = 20;
a = a + 5;
console.log(a); // 25

const RATE = 0.1;
RATE = 0.2; // TypeError

const RED; // SyntaxError

// JavaScript const and Objects
const person = { age: 20 };
person.age = 30; // OK
console.log(person.age); // 30


// Even though the person variable is a constant, you can change the value of its property.

// However, you cannot reassign a different value to the person constant like this:


person = { age: 40 }; // TypeError

// If you want the value of the person object to be immutable, you have to freeze it by using the Object.freeze() method:

const person = Object.freeze({age: 20});
person.age = 30; // TypeError

// Note that Object.freeze() is shallow, meaning that it can freeze the properties of the object, not the objects referenced by the properties.


const company = Object.freeze({
    name: 'ABC corp',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
    }
});

company.address.country = 'USA'; // OK


// JavaScript const and Arrays
const colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
console.log(colors); // []

colors = []; // TypeError

// In this example, we declare an array colors that has one element using the const keyword. Then, we can change the array’s elements by adding the green color. However, we cannot reassign the array colors to another array.


// JavaScript const in a for loop

let scores = [75, 80, 95];

for (let score of scores) {
	console.log(score);
}

// If you don’t intend to modify the score variable inside the loop, you can use the const keyword instead:

let scores = [75, 80, 95];
for (const score of scores) {
    console.log(score);
}

// Notice that the const will not work in an imperative for loop. Trying to use the const keyword to declare a variable in the imperative for loop will result in a TypeError:

for (const i = 0; i < scores.length; i++) { // TypeError
    console.log(scores[i]);
}