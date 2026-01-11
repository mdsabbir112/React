// here we will practice some JavaScript concepts

//here is the use of some array methods 
// there are 4 types of array methods : these are 
// Map, Filter, find, ForEach
const persons = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jim", age: 35 },
    { name: "Jill", age: 28 }
]

// USe of Map methods
// we use map method to create a new array by calling a function for every array element
// it returns a new array

// const PersonDetails = persons.map(person => {
//     return person.name +' - '+ person.age;
// });
// console.log(PersonDetails);

// Use of For Each Methods
//it does not return anything, that why we dont store it in any variable 

// persons.forEach (person => {
//     console.log(person.name +' is '+ person.age + ' years old');
// });


// Use of Filter Methods
// it creates a new array with all elements that pass the test implemented by the provided function

// const Adults = persons.filter (person =>{
//     return person.age >= 30;
// });
// console.log(Adults);


//Use of Find Methods
// it returns the value of the first element that passes a test
//it always returns a single object with the first match

// const FirstAdult = persons.find (person => {
//     return person.age >= 30;
// })
// console.log(FirstAdult);





// here i write a normal Function on there 
// function sum (a, b){
    // console.log(arguments);
//     const result = a + b;
//     return result ;
// }
// const total = sum(4, 5);
// console.log(total);


// here i write a arrow Function on there

// const sum = (a, b) => {

// }