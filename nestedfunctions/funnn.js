// // // // function outer(){
// // // //     console.log("This is outer function")

// // // //     function inner(){
// // // //         console.log("This is inner function")
// // // //     }
// // // //     inner()
// // // // }
// // // // outer()

// // // // function outerr(){
// // // //     let branch = "Kochi"

// // // //     function innerr(){
// // // //         console.log("This is inner function!!!!!!!")
// // // //         console.log(branch)
// // // //     }
// // // //     innerr()
// // // // }
// // // // outerr()

// // // function f1(){
// // //     function f2(){
// // //         return "Hello This is Kalam"
// // //     }
// // //     let res = f2()
// // //     console.log(res);
// // //     return res +" outer";
// // // }
// // // let x = f1()
// // // console.log(x);


// // function calculateSalary(sal){
// //     function calculateBonus(){
// //         let Bonus = sal * 10 / 100;
// //         return Bonus;
// //     }
// //     let res = calculateBonus()
// //     return res + sal;
// // }
// // let totalSalary = calculateSalary(50000);
// // console.log( totalSalary );


// //  example - 1

// // const calcuateBill = (units) => {
// //     let bill;

// //     if(units <= 100){
// //         bill = units * 2;

// //     }
// //     else{
// //         bill = units * 5;
// //     }
// //     console.log( "Electricity Bill : : ",bill);
// // };
// // calcuateBill(80);

// // example - 2
// const calcuateBonus = (salary) => {
//     let bonus;

//     if(salary >= 30000){
//         bonus = salary * 0.10;
//     }
//     else{
//         bonus = salary * 0.05;
//     }
//     console.log(":Bonus:",bonus);
// };
// let x = calcuateBonus(40000);
// console.log(x)


// // example - 3

// const ticketPrice = (age) => {
//     let price;

//     if(age < 12){
//         price = 100;
//     }
//     else{
//         price = 200;
//     }

//     console.log("Ticket Price :",price);
// };
// let val = ticketPrice(10);
// console.log(val);


function company(){
    var companyname = "ajaj";
    console.log(companyname);
}
company()
console.log(companyname2);



