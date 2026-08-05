//Arrow functions with no parameters
const welcome = ()=>{
    console.log("Welcome");
}
welcome();

//Arrow function with one parameter
const square = num=>{
    return num*num;
}
console.log(square(5));

//Arrow function with more than one parameters
const add= (a,b)=>{
    return a+b;
}
console.log(add(1,2));

//another way
const add1=(a,b)=>a+b;
console.log(add1(1,2));