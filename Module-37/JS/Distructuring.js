// Array Destructuring মানে
// 👉 array থেকে value গুলো সহজে variable-এ বের করে আনা
// 👉 code আরও clean ও professional করা

// here is an Example about array destructuring

// here we get an Example Array 

const myFriends = ["Rafi", "Shafi", "Safi", "Jafi"];
// old way to get value from array
const firstFriend = myFriends[0];
console.log(firstFriend);

// new way to get value from array using destructuring
const [friends1, friends2, friends13, friends4] = myFriends;
console.log(friends2);


// Object Destructuring মানে
// 👉 object থেকে value গুলো সহজে variable-এ বের করে আনা
// 👉 code আরও clean ও professional করা

// here is an Example about object destructuring
const persons = {
    name: "sabbir",
    age: 24,
    friends1: ["Rafi", "Shafi", "Safi", "Jafi"],
    country : "Bangladesh"
}
// old way to get value from object
const personName = persons.name;
console.log(personName);

// new way to get value from object using destructuring
const {name, age, country} = persons;
console.log(country);