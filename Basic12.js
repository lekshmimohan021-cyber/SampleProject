//converting js object to json string
let students={ 
name: "Lekshmi",
age: 29,
course: "Playwright"
};
let JSONdata=JSON.stringify(students);
console.log(JSONdata);
console.log(typeof JSONdata);

//convert json string to object
const JSONdata1='{"name": "Lechu","age":29}';
const student=JSON.parse(JSONdata1);
console.log(student);
console.log(typeof student);

