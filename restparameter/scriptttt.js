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

let account = {
  holder: "Kalam",
  balance: 5000,
  withdraw: function (amount) {
    if (amount <= this.balance) {
      this.balance = this.balance - amount;
      console.log("Withdrawn: " + amount);
      console.log("Remaining balance: " + this.balance);
    } else {
      console.log("Insufficent balance");
    }
  },
  showBalance: function () {
    console.log("Remaining balance: " + this.balance);
  },
};
account.withdraw(1000);
