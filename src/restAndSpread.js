/** Rest parameter */

function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}

sum(1, 2, 3);


function sum(...args) {
  return args
    .filter(function (e) {
      return typeof e === 'number';
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}

let result = sum(10,'Hi',null,undefined,20); 
console.log(result);


const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + ' ' + curr;
  });
};

let message = combine('JavaScript', 'Rest', 'Parameters'); // =>
console.log(message); // JavaScript Rest Parameters


/** Spread parameter */

const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);

// output [ 2, 4, 6, 1, 3, 5 ]

function f(a, b, ...args) {
	console.log(args);
}

f(1, 2, 3, 4, 5);

// Output [ 3, 4, 5 ]

const odd1 = [1,3,5];
const combined1 = [...odd, 2,4,6];
console.log(combined1);

// Output [ 1, 3, 5, 2, 4, 6 ]

let initialChars = ['A', 'B'];
let output = [...initialChars, 'C', 'D'];
console.log(output); // ["A", "B", "C", "D"]

let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]

let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]

let chars = ['A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]


const circle = {
  radius: 10
};

const coloredCircle = {
  ...circle,
  color: 'black'
};

console.log(coloredCircle);
//Output
// {
//   radius: 10,
//   color: 'black'
// }


//  clone an object
const clonedCircle = {...circle};

console.log(clonedCircle);

// Output { radius: 10 }

// Merging objects
const style = { backgroundColor: 'red' };
const solidCircle = { ...circle, ...style };

console.log(solidCircle);
// Output { radius: 10, backgroundColor: 'red' }