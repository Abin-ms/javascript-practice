// let student = {
//     user:"Abhishek",
//     city:"Kannur",
//     course:"Python Fullstack",
//     isPlaced:false,
//     hasMarried:undefined,
//     hasGirlfriend:null,
//     hasgululu:5,
//     "@gmail":"abhi@gmail.com",
//     "Phone-number":2828283838,
//     101:1221212
// }
// console.log(student);
// console.log(student.user);
// console.log(student["user"]);
// console.log(student.course);
// console.log(student["isPlaced"]);
// console.log(student["@gmail"]);
// console.log(student["Phone-number"]);
// console.log(student[101]);



// let student2 = {
//     name:"Liya",
//     id:103,
//     skills:["Html","Css","Js",["Rose","Anu"],"Python","SQL"],
//     address : {
//         city:"Ernakulam",
//         pincode:"67899",
//         contact:108
//     }
// }

// console.log(student2.skills);
// console.log(student2.skills[3]);
// console.log(student2.skills[3][0]);
// console.log(student2.address);
// console.log(student2.address.city);
// console.log(student2.address.pincode);
// console.log(student2.address.contact);

// let product = {
//     productName : "Samsung Galaxy S25",
//     price : 74999,
//     brand : "Samsung",
//     inStock : true,
//     colors : ["Black","Blue","Silver"],
//     specifications : { 
//         ram : "12GB",
//         storage : "256GB",
//         display : "6.2 inch"
//     },
//     discount : 10,
//     rating : 4.5,
//     warranty : null,
//     deliveryDate : undefined,
//     category : "Mobile Phone"
// }
// console.log(product);
// console.log(product.productName);
// console.log(product.price);
// console.log(product.colors);
// console.log(product.specifications.display);
// console.log(product.specifications.ram);

//employee details
// let employee = {
//     employeeId : "TY212",
//     name : "Ramesh",
//     age : 25,
//     salary : 25000,
//     isActive : true,
//     skills : ["HTML","CSS","Javascript","React"],
//     experience : {
//         years : undefined,
//         company : "ABC technologies",
//         address :{
//             branch: "Kochi",
//             pincode: 653222
//         },
//         role : "Frontend developer",

//     },
//     married : false,
//     manager : null,
//     joiningDate : undefined,
//     location : "Hyderabad"
// };
// console.log(employee);
// console.log(employee.name);
// console.log(employee.salary);
// console.log(employee.skills);
// console.log(employee.experience.company);
// console.log(employee.experience.address.branch);


//order details
// let order = {
//     orderId : "ORD12344",
//     customerName : "Kiran",
//     amount : 2599,
//     paymentSuccesfull : true,
//     products : [
//         "T-shirt",
//         "Jeans",
//         "Shoes"
//     ],
//     deliveryAddress : {
//         houseNo : "12-45",
//         street : "Main road",
//         city : "Vijayawada",
//         pincode : 520001
//     },
//     couponApplied : false,
//     discountAmount : 200,
//     deliverycharge : 50,
//     "Tracking-Id" : null,
//     expectedDeliver : undefined,
//     "Payment-method" : "UPI"
// };
// console.log(order["Payment-method"]);
// console.log(order);
// console.log(order.orderId);
// console.log(order.amount);
// console.log(order.products);
// console.log(order.deliveryAddress.city);


// let vimalJyothiVictim = {
//     victim : "Rose",
//     vId : 101
// }

// console.log("Details of victim :",vimalJyothiVictim);
// console.log(vimalJyothiVictim.vId);
// console.log(vimalJyothiVictim["vId"]);

// vimalJyothiVictim.collage = "Vimaljyothi";
// console.log(vimalJyothiVictim);

// vimalJyothiVictim.vId = 301;
// console.log(vimalJyothiVictim);

// delete vimalJyothiVictim.collage;
// console.log(vimalJyothiVictim);

// vimalJyothiVictim = null;
// console.log(vimalJyothiVictim);

// let product = {
//     item : "Mobile",
//     price : 75000
// }
// console.log("Before seal : ",product);

// Object.seal(product)


// product.brand = "Samsung galaxy";
// console.log(product);// we cannot add a property after sealing

// delete product.price;
// console.log(product);// we cannot delete a property after sealing

// product.price = 80000;
// console.log(product);

// let prodcut = {
//     item : "Mobile",
//     price : 75000
// }
// console.log("Before freeze",prodcut);
// Object.freeze(prodcut);

// product.brand = "Samsung galaxy";
// console.log(product);

// product.price = 80000;
// console.log(product);

// delete product.price;
// console.log(product);


let product = {
    item : "Mobile",
    price : 75000,
    color : "Black",
    brand : "Samsung",
    battery : "6000mAh"
}

console.log(product.keys);
console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product))






