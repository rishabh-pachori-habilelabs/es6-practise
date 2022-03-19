/**
 * How to pass default parameters in js
*/

// JavaScript Default Parameters
function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say('Hello') // 'Hello'
// The default value of the message paramater in the say() function is 'Hi'.

// Arguments vs. Parameters


function add(x, y) {
    return x + y;
}

add(100,200);
// In this example, the x and y are the parameters of the add() function, and the values passed to the add() function 100 and 200 are the arguments.

// Setting JavaScript default parameters for a function

function say(message) {
    console.log(message);
}

say(); // undefined

// ES6 provides you with an easier way to set the default values for the function parameters like this:
function fn(param1=default1, param2=default2,) {
}

function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); // 'Hello'

// How it works.

// In the first function call, we didn’t pass any argument into the say() function, therefore message parameter took the default value 'Hi'.
// In the second function call, we passed the undefined into the say() function, hence the message parameter also took the default value 'Hi'.
// In the third function call, we passed the 'Hello' string into the say() function, therefore message parameter took the string 'Hello' as the default value.


// More JavaScript default parameter examples
// 1) Passing undefined arguments

function createDiv(height = '100px', width = '100px', border = 'solid 1px red') {
    let div = document.createElement('div');
    div.style.height = height;
    div.style.width = width;
    div.style.border = border;
    document.body.appendChild(div);
    return div;
}

createDiv();
// Suppose you want to use the default values for the height and width parameters and specific border style. In this case, you need to pass undefined values to the first two parameters as follows:

createDiv(undefined,undefined,'solid 5px blue');

// 2) Evaluating default parameters
// JavaScript engine evaluates the default arguments at the time you call the function.

function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put('Toy Car'));
// -> ['Toy Car']
console.log(put('Teddy Bear'));
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']


function date(d = today()) {
    console.log(d);
}
function today() {
    return (new Date()).toLocaleDateString("en-US");
}
date();


function requiredArg() {
   throw new Error('The argument is required');
}
function add(x = requiredArg(), y = requiredArg()){
   return x + y;
}

add(10); // error
add(10,20); // OK

// 3) Using other parameters in default values
// You can assign a parameter a default value that references to other default parameters

function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add()); // 4


// Using functions
// You can use a return value of a function as a default value for a parameter

let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}

let fullPrice = getPrice(100);
console.log(fullPrice); // 110

// The arguments object
// The value of the arguments object inside the function is the number of actual arguments that you pass to the function.
function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3