// let marks = prompt("Enter your marks")

// if(marks>=35){
//     alert("Congratulations! You passed")
// }
// else{
//     alert("Sorry! you failed")
// }

// let age = Number(prompt("Enter you age"))
// // let age = prompt("Enter you age")  "if we use "

// if(age === 18){
//     alert("you can watch the movie")

// }
// else{
//     alert("Sorry! you are not eligible")
// }

// let balance = 5000;

// let amount = Number(prompt("Enter withdrawal amount"));

// if (amount <= balance) {
//   balance = balance - amount;
//   alert("Withdrawal Successfull!");
//   alert("Remaining Balance: " , balance);
// } else {
//   alert("Insufficient balance");
// }


// let amount = Number(prompt("Enter your purchase amount"))

// if(amount >= 5000){
//     alert("Congratulations! You got 20% discount")

// }
// else if( amount >= 2000){
//     alert("Congratulations! You got a 10% discount")
// }
// else{
//     alert("No discount available")
// }

// let result = confirm("Are you sure you want to delete you account")

// if(result){
//     alert("Account deleted succesfully")
// }
// else{
//     alert("Account deletion cancelled")
// }


// let product = prompt("Enter the product name")

// let result = confirm("Do you want to buy "+ product+"?")

// if(result){
//     alert(product+ " ordered successfully!!")
// }
// else{
//     alert("Order cancelled!!!")
// }

let food = prompt("Enter food name");
let quantity = Number(prompt("Enter quantity"))

if(quantity > 0){ 
    let result = confirm("Do you want to order " + quantity + " " +food+ "?");
if(result){
    alert("Your order for " + quantity + " "+ food + "is confirmed");
}
else{
    alert("Order cancelled!!")
}}
else{
    alert("Please enter a valid Quantity!");
}

