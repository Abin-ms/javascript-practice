// //one
// let companyName = "TestYantra"
// function employeeDetails(){
//     console.log("Employee works at"+companyName)
// }

// function companyDetails(){
//     console.log("Company:"+companyName)
// }

// employeeDetails();
// companyDetails();



// //two
// let currency = "₹";
// function showProductPrice(){
//     let price = 25000;
//     console.log("Price:",currency+price);
// }
// showProductPrice()

// function showCartTotal(){
//     let total = 45000;

//     console.log("Cart Total : ",currency + total)
// }
// showCartTotal();


// //three
// let deliveryCharge = 40;
// function calculateFoodBill() {
//     let foodPrice = 500;
//     console.log("Food Bill:", foodPrice + deliveryCharge);
// }
// calculateFoodBill();
// function calculateOrderBill() {
//     let orderPrice = 800;
//     console.log("Order Bill:", orderPrice + deliveryCharge);
// }
// calculateOrderBill();


// //four
// //function scope
// function calculateSalary() {
//     let salary = 30000;
//     let bonus = 5000;
//     let totalSalary = salary + bonus;
//     console.log(employee);
//     console.log("Total Salary:", totalSalary);
// }
// calculateSalary();
// console.log(salary); 


// //five
// function checkBalance() {

//     let balance = 25000;
//     let accountNumber = "12345";

//     console.log("Balance:", balance);
//     console.log("Account:", accountNumber);
// }

// checkBalance();

// console.log(balance); 


// //six
// function calculateElectricityBill() {

//     let units = 180;
//     let rate = 6;

//     let bill = units * rate;

//     console.log("Electricity Bill:", bill);
// }

// calculateElectricityBill();

// console.log(units); 


// //seven
// let product = "Laptop";

// if (product === "Laptop") {

//     let discount = 10;
//     const message = "10% discount available";

//     console.log(product);
//     console.log(discount);
//     console.log(message);
// }

// console.log(product);  
// console.log(discount);

// //eight
// let employeePresent = true;

// if (employeePresent) {

//     let attendanceMessage = "Employee is Present";

//     console.log(attendanceMessage);
// }

// console.log(employeePresent);     
// console.log(attendanceMessage)


// //nine
// let products = ["Laptop", "Mobile", "Watch"];

// for (let i = 0; i < products.length; i++) {

//     console.log(products[i]);
// }

// console.log(products); 
// console.log(i);     


// //ten
// //Mixed Example
let company = "Amazon"; // Global Scope

function employeeDetails() {

    let employeeName = "Ravi"; // Function Scope

    if (employeeName === "Ravi") {

        let salary = 40000; // Block Scope

        console.log(company);      
        console.log(employeeName); 
        console.log(salary);       
    }

    console.log(company);      
    console.log(employeeName); 
     console.log(salary);    
}

employeeDetails();

console.log(company);      
 console.log(employeeName); 
 console.log(salary); 