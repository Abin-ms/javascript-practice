// function cart(item1,...x){
//     console.log(item1)
//     console.log(...x)
// }
// cart("Laptop")

// //spread Operator()
// //By using this we can copy an array/Object

// let vimalj = ["Anugraha","Rose","Aswathi","Aishu"]
// let newVimal = ["Bazimm",...vimalj,"Abhishek"]
// console.log(vimalj)
// console.log(newVimal)

// let kochii = {
//     areaName : "Palarivattom",
//     noOfStudents : 450,
//     BranchHead : undefined
// }
// console.log("Original Object",kochii)
// let coppp = {namee:"ggg",...kochii,age:33}d
// console.log("Copied object",coppp)

// let student = {
//     user : "Liya",
//     age : 23,
//     display:function liya(){
//         console.log(this);
//         console.log(this.user);
//     }
// }
// student.display()

//non - strict mode
// function f1(){
//     console.log(this)//this keyword points to window
// }
// f1()

// "use strict"//strict mode
// function f1(){
//     console.log(this);//this keyword value will be undefined
// }
// f1()

//arrow functions does not have there own "this" keyword
//it takes from outer scope.
//Inside outer scope we have window object , so it points to window object only
// let a = () => {
//     console.log(this)
// }
// a()

// let student2 = {
//     user : "Liya",
//     age : 22,
//     display : () => {
//         console.log(this)
//     }
// }
// student2.display()

// let account = {
//   holder: "Kalam",
//   balance: 5000,
//   withdraw: function (amount) {
//     if (amount <= this.balance) {
//       this.balance = this.balance - amount;
//       console.log("Withdrawn: " + amount);
//       console.log("Remaining balance: " + this.balance);
//     } else {
//       console.log("Insufficent balance");
//     }
//   },
//   showBalance: function () {
//     console.log("Remaining balance: " + this.balance);
//   },
// };
// account.withdraw(1000);


// let cart = {
//     item : "Headphone",
//     price : 1500,
//     quantity : 2,
//     showTotal : function (){
//         console.log("Item: "+ this.item);
//         console.log("Total amount: "+ (this.price * this.quantity));
//     }
// };
// cart.showTotal()

// let student = {
//     name : "Kalam",
//     maths :  80,
//     science : 90,
//     English : 70,
//     showResult : function() {
//         let total = this.maths + this.science + this.English;
//         let average = total/3;
//         console.log("Student name: "+this.name);
//         console.log("Total marks:"+total);
//         console.log("Average: "+average);
//     }
// };
// student.showResult()

// let employee = {
//     name : "Ravi",
//     monthlySalary : 25000,
//     showYearlySalary : function () {
//         let yearlySalary = this.monthlySalary * 12;
//         console.log("Name : "+name);
//         console.log("Yearly salary : "+yearlySalary);

//     }
// };
// employee.showYearlySalary()


// let basil = {
//     user : "Basil",
//     course : "Java",
//     city : "Ernakulam",
//     display : function showDetails(){
//         console.log(this.course);
//     }
// }
// basil.display()

// let adwaith = { 
//     user : "Adwaith",
//     course : "python",
//     city : "Kochi",
//     display : function showDetails(){
//         console.log(this.course);
//     }
// }
// adwaith.display()

// let liya = {
//     user : "Liya",
//     course : "Python",
//     city : "Kochi",
//     display : function showDetails(){
//         console.log(this.course);
//     }
// }
// liya.display()





//call(),apply() and bind() ---> used to control the value of this inside a function

//call() -- it invokes/Executes the function immediately.
//we can specify which object the this keyword should refer to inside the function.

let basil = {
    user : "Basil",
    course : "Java",
    city : "Ernakulam",
}

let adwaith = { 
    user : "Adwaith",
    course : "python",
    city : "Anonymous",
}

let liya = {
    user : "Liya",
    course : "Python",
    city : "Kochi",
}
function showDetails(Trainer){
    console.log("User name: ",this.user);
    console.log("Course name: ",this.course);
    console.log("Trainer name: ",Trainer)
}
// showDetails.call(liya , "Sathya" , 22);
// showDetails.call(adwaith , "Sri mathi" , undefined);
// showDetails.call(basil , "kalam" , "22");



showDetails.apply(liya , ["Sathya" , 22]);
showDetails.apply(adwaith , ["Sri mathi" , undefined]);
showDetails.apply(basil , ["kalam" , "22"]);





// bind() -- it will not execute the function immediately.
// it returns new function with specified object.
//bind()

let newfn = showDetails.bind(liya,'Amareshhhhh',22)
newfn()





