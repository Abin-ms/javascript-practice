let user = "kalam"
let result = user.charAt(3);
console.log(user);
console.log(result);

let user2 = "kalam";
let a= user.indexOf("l");
console.log("index of 'l' is : ",a); 


let user3 = "kalam"
let b = user3.charCodeAt(4)
console.log(user3);
console.log("ascci code :",b)

//replaceAll()
let message = "I like icecream , icecream is tasty";
let var1 = message.replace("icecream","choclate");
let var2 = message.replaceAll("icecream","choclate");
console.log(var1);
console.log(var2);

//endsWith()
let company = "Wipro";
let res = company.startsWith("W");
let res2 = company.endsWith("o");
let res3 = company.endsWith("O")
console.log(res);
console.log(res2);
console.log(res3);

