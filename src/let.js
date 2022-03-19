/**
 * Var and let variable
*/

let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x);

//global object
var a = 10;
console.log(window.a); // 10

let b = 20;
console.log(window.b); // undefined

// JavaScript let and callback function in a for loop
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// 5
// 5
// 5
// 5
// 5

// In this example, the variable i is a global variable. After the loop, its value is 5. When the callback functions are passed to the setTimeout() function executes, they reference the same variable i with the value 5.
// In ES5, you can fix this issue by creating another scope so that each callback function references a new variable. And to create a new scope, you need to create a function.

for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}
// Output:

// 0
// 1
// 2
// 3
// 4

// In ES6, the let keyword declares a new variable in each loop iteration. 

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}


// Redeclaration
var counter = 0;
var counter;
console.log(counter); // 0

let counter = 0;
let counter;
console.log(counter);
// Uncaught SyntaxError: Identifier 'counter' has already been declared


// JavaScript let variables and hoisting

{
    console.log(counter); // 
    let counter = 10;    
}
// Uncaught ReferenceError: Cannot access 'counter' before initialization
