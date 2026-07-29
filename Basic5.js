//Types of functions --fn declaration
function display(){
    console.log("Hello");
}
display();

const display1=function(){      //  ---fn expresion--fn is stored in a variable
console.log("Welcome");
}
display1();

const add=(a,b)=>{        //arrow functions
     return a+b;
}
console.log(add(20,40));

