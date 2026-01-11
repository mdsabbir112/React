// here we discuss about truthy and falsy values in JavaScript

// Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// Truthy: everything else (e.g., true, "0", " ", [], {}, function(){}, 1, -1, Infinity)

// const isTrue = true;

// if (isTrue) {
//     console.log("This is the Truthy Values ");
// }
//     else {
//         console.log("This is the Falsy Values");
//     }



// Here  is some Examples of Ternary operator 

const isActive = true ;

// this is console it self Automatically and this is also Ternary Operator
isActive ? console.log('yes this is True') : console.log("No this is False ")

// when we are allow to insert it into the variable
const showMessage = isActive ? 'This is True' : 'This is False';
// console.log(showMessage);


// here we can also use it in function

const ShowFunction = () => console.log("yes it is True");
const HideFunction = () => console.log("No it is False");
//here we use the ternary operator 
isActive ? ShowFunction(): HideFunction();
// if we want that it only show the ShowFunction() when it is true and if it is false then it will not show about the results anymore 
// for taht kind of situation we can use logical AND (&&) operator 
isActive && ShowFunction(); // it will only show the ShowFunction when it is true otherwise it will not show anything when it is false
// then we are also able to use the logical OR (||) operator
isActive || HideFunction(); // it will only show the HideFunction when it is false otherwise it will not show anything when it is true