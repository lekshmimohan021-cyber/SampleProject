let student1="Anu";
let student2="Lechu";
let student3="Abhi";
let students = ["Anu","Lechu","Abhi"];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

//Length of array
let fruits=["Apple","Orange","Grapes"];
console.log(fruits.length); //to find length of an array

fruits.push("Banana"); //to add element to an end of an array
console.log(fruits);

fruits.pop(); //to remove last element of an array
console.log(fruits);

fruits.unshift("Kiwi"); //to add element to beginning of an array
console.log(fruits);

fruits.shift(); //to remove first element of an array
console.log(fruits);

console.log(fruits.indexOf("Grapes")); //to find index of a particular element in an array
console.log(fruits.indexOf("Strawberry")) //give an element which is not in array

console.log(fruits.includes("Apple"));  // to check a particular element that exists in array--use includes
console.log(fruits.includes("Berry"));