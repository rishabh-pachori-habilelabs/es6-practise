/** Template literals */

const name1 = 'Jack';
console.log(`Hello ${name1}!`); // Hello Jack!

/** Template Literals for Strings */

const str1 = 'This is a string';

// cannot use the same quotes
const str2 = 'A "quote" inside a string';  // valid code
const str3 = 'A 'quote' inside a string';  // Error

const str4 = "Another 'quote' inside a string"; // valid code
const str5 = "Another "quote" inside a string"; // Error

// To use same quotes 
// escape characters using \
const str6 = 'A \'quote\' inside a string';  // valid code
const str7 = "Another \"quote\" inside a string"; // valid code

/** Or using template literals */
const str8 = `This is a string`;
const str9 = `This is a string with a 'quote' in it`;
const str10 = `This is a string with a "double quote" in it`;

// Multiline Strings Using Template Literals

// using the + operator
const message1 = 'This is a long message\n' + 
'that spans across multiple lines\n' + 
'in the code.'

console.log(message1)

// with

const message2 = `This is a long message
that spans across multiple lines
in the code.`

console.log(message2)

