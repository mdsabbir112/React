//In JavaScript, Type Coercion happens when JavaScript 
// automatically changes one type of value into another. 
// Sometimes, this automatic conversion can cause unexpected 
// results if you’re not aware of how it works.

// Example 1: String to Number Coercion

const StringValue = "10";

const results = +StringValue; // adding + before StringValue converts it to a number
console.log(results);
console.log(typeof results);

// here is the another process to convert string to number
// which is to Substract something from this String 
const number = "Sabbir";
console.log(typeof number);
const results2 = number - 0; // here the string "20" is coerced to number 20
console.log( results2);
console.log(typeof results2);



// Example 2: Number to String Coercion
const numValue = 42;
const strValue = numValue + ""; // adding an empty string converts number to string
console.log(strValue);
console.log(typeof strValue);

