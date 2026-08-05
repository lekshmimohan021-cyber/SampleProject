//Array Methods (Most common -3)
//1. For each Method Syntax
/*Array.forEach((element,index)=>{

})*/
const numbers=[10,20,30];
numbers.forEach((num)=>{
    console.log(num)
})

const fruits=["Apple","Orange","Grapes"];
fruits.forEach((fruit,index)=>{
    console.log(index + " "+ fruit );
})