// // Global scope

// let a = 10;
// var b = 20;
// const c = 30;

// console.log("outside function and block", a);
// console.log("outside block and function", b);
// console.log("Outside block and function", c);

// function fnn1() {
//   console.log("inside function", a);
//   console.log("inside function", b);
//   console.log("inside function", c);
// }
// fnn1();

// if (true) {
//   console.log("inside block", a);
//   console.log("inside block", b);
//   console.log("inside block", c);
// }

// // function scope

// function f1(){
//     var aa = 10;
//     let bb = 20;
//     const cc = 30;
//     console.log("Inside function",aa);
//     console.log("Inside function",bb);
//     console.log("Inside function",cc);
// }
// f1();
// console.log("Outside function",bb);
// console.log("Outside function",aa);
// console.log("Outside function",cc);

// Block scope

if (true) {
  var bbb = 20;
  let aaa = 10;
  const ccc = 30;
  console.log("Inside bloc", aaa);
  console.log("Inside block", bbb);
  console.log("Inside block", ccc);
}
console.log("Outside block", bbb);
console.log("Outside block", ccc);
console.log("Outside block", aaa);
// the variables declared using the 'var' can only be accessed outside the block , if the variables are declared using 'const' or 'let' those cannot be used outside block.
