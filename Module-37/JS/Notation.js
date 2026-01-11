// here we know anout the notations 
// there are Two types of notation
// 1. Dot Notation
// 2. Bracket Notation

const person = {
    name: 'Sabbir',
    age: 22,
    profession: 'Web Developer'
}


//dot notations 
// console.log(person.name);
// console.log(person.age);
// console.log(person.profession);

// bracket notation
// console.log(person['name']);
// console.log(person['age']);
// console.log(person['profession']);

//Questations : 
  // 1) Why we use bracket notation? over an Dot notation 
    // Ans: it depends on the object key name
    const person1 = {
        name: 'Sabbir',
        10 : 'ten',
        pro_fession : 'Web Developer'
    }

    console.log(person1.pro_fession);
    // console.log(person1.10); // then arrises an Syntex error , for that reason we need to use the bracket notation 
    // bracket notation 
    console.log(person1["10"]); // then it will work properly like that manner 
    // Like that Bracket notation are very much powerfull when we use variable as an key name
