// arrow function new eassy way to initialize functions


// Basic fat arrow 
const a = () =>{
    console.log("I am basic fat arrow");
}

// fat arrow function with one parameter ,we can remove parentheses when we want to pass one para......
var b = parm => {
    console.log("you arguement is : " + parm); 
}

// fat arrow function with implicit return ,when we don't need to write return for return 

var c = () => 18;


// Fucntions calling
a()
b("hello caller")
console.log(c())

