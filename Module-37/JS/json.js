//here we are form the basics of json and its related topics

// fetch the json data 
// fetch('data.json')
// .then (response => response.json())
// .then (data => console.log(data))

// here declare an object  
const person = {
    name : "sabbir hasan ",
    age : 24 ,
    profession : "web developer"
}

// convert object to json using json.stringify
const ConJson =JSON.stringify(person);
// console.log(ConJson);
const ConObject  = JSON.parse(ConJson);
// console.log(ConObject);

// Suppose we are getting the object data and apply some array methods and also apply ]
// Apply Spread operator

const users =[
    {id:1, nick:"sabbir", age:24},
    {id:2, nick:"rakib", age:26},
    {id:3, nick:"jamal", age:22},
    {id:4, nick:"kamal", age:28}
]

//here we use the spread operator to copy the object data from the users object

const newData = [...users];
console.log(newData);

//here declare a new object to add this with the new object 
const newUser = {id:5, nick:"rafi", age:25};

const UpdateUsers = [newData , newUser];
console.log(UpdateUsers);