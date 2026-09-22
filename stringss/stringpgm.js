//Strings - sequence of characters used to represent text data


//using single quotes
let city = 'Kochi';
console.log("using single quote",city);

//using double quotes
let state = "Kerala";
console.log("Using double quote",state);

//using backtick
let information =  `we have 2 days holidays`
console.log("using backtick",information);

//using backtick(Template literal)
let inf = `helloo broo
how are you
doinnn`
console.log(inf);

//hiw to acces string characters
let name = "Albert";//012345
console.log(name);
console.log(name[0]);
console.log(name[5]);

name[0] = "B";
console.log(name);
name = "Blbert";
console.log(name);
console.log(name[-1]);
console.log(name[6]);


//string - interpolation

let namee = "Karthik";
let age = 20;
console.log("My name is",namee,"; I am ",age," years old!!");
console.log(`My name is ${name} and i am ${age} years old....`);


let a = 10
let b = 20
console.log(`sum of ${a} + ${b} = ${a + b}`);


