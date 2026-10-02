// slice()
// - it does not modifys the original value


//example 1 -
// let products = ["Laptop","Mouse","Keyboard","Monitor"];
// console.log(products.slice(0,3));

//example 2 - copy selected students
// let students = ["Ravi","Kiran","Suresh","Arjun"];
// console.log(students.slice(1,3));

//example 3 - recent orders
let orders = ["01","02","03","04"];
console.log(orders.slice(-2));

// splice() - adds , removes or replaces elements at a chose

//example - 1
let cart = ["Laptop","Mouse","Keyboard"];
cart.splice(1,1);
console.log(cart);  

//example - 2
let product1 = ["Laptop","Keyboard"];
product1.splice(1,0,"Mouse");
console.log(product1);

//example - 3
let products = ["Laptop","Old Mouse","Keyboard"];
products.splice(1,1,"New Mouse")
console.log(products);


//includes() - Checks whether an exact value exists in an array

//example - 1
let cartt = ["Laptop","Mouse"];
console.log(cartt.includes("Mouse"));


//example - 2
let skills = ["HTML","CSS","React"];
console.log(skills.includes("Java"));


//join() - combines array element into one string


//example - 1 
let skill2 = ["HTML","CSS","Javascript","React"];
console.log(skill2.join(","));

//example - 2
let items = ["Laptops","Mouse","Bag"];
console.log(items.join(" + "));

//example - 3


//concat() - combines two or more arryas and return a new one

//example - 1
let morning = ["Ravi","Kiran"];
let evening = ["SUresh" , "Arjun"];
console.log(morning.concat(evening));

//example - 2
let frontend = ["HTML","CSS"];
let js = ["Javascript","React"];
console.log(frontend.concat(js));



//find()

//example - 1
let prices = [1000,5000,45000,60000];
console.log(prices.find(price => price > 40000));


//example - 2
let marks = [75,65,32,28];
console.log(marks.find(mark => mark < 40));


//filter()

//example - 1
let price11 = [500,1500,5000,25000];
console.log(price11.filter(price => price > 1000));


//example -2
let marks11 = [35,45,60,72,80];
console.log(marks11.filter(mark => mark >= 40));


//forEach()

//example - 1
let students = ["Ravi","Kiran","Suresh"];
students.forEach(student => console.log(student));

//example - 2
let user2 = ["Ravi","Kiran"];
user2.forEach(user => console.log(`Hi ${user}`));

//example - 3
let pr = [100,200,300];
pr.forEach(price => console.log(price));