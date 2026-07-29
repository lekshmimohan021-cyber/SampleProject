function greet(){ //function without parameter
    console.log("Welcome to Javascript");
}
greet();  //call the function

//parametrized function
function greet1(name){     //name-parameter
console.log(name);
}
greet1("Anu");

function add(a,b){   //fn with return value
    return a+b;
}
let result=add(10,20);     //result - variable--fn is assigned to var
console.log(result);

function square(number){     //fn with return value
return number*number;
}
console.log(square(5));

