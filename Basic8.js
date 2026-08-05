//To join 2 arrays-- use concat
let boys =["Rahul","Rohit"];
let girls=["Lechu","Anu"];
let students=boys.concat(girls);
console.log(students);

//To slice a particular element--returns a portion of an array
let numbers=[10,20,30,40,50];
let result=numbers.slice(1,5);
console.log(result);

//to add an element to a particular position
let fruits=["Apple","Orange"];
fruits.reverse();   //to reverse an array
console.log(fruits);
fruits.sort();   // to sort in alphabetical order
console.log(fruits);

let numbers1=[10,20,30,40,50]; //to remove particular elements
numbers1.splice(1,2);
console.log(numbers1);