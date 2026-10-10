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


// let product = {
//     item : "Mobile",
//     price : 75000,
//     color : "Black",
//     brand : "Samsung",
//     battery : "6000mAh"
// }

// console.log(product.keys);
// console.log(Object.keys(product));
// console.log(Object.values(product));
// console.log(Object.entries(product))




//for of() example - this method is an arrray method used to fetch each values from the array.

// let arr = ["AA","BB","CC","DD"];
// for(let a of arr){
//     console.log(a);
// }


//for of() - this method is used to fetch keys from the object.
// let obb = {
//     name :"Abin",
//     age : 21,
//     place : "Alappuzha"
// }
// for(let x in obb){
//     console.log(x);
// }


// fetching values of the properties using "for in()".
// for(let y in obb){
//     console.log(obb[y]);
// }



//example -1 
// let noise = {
//     name : "firstRowFirstboy",
//     id : 101,
//     course : "Javascript"
// }

// for(let n in noise){
//     // console.log(n);
//     // console.log(noise[n])
//     console.log("Properties :",noise[n]);

// }


// let pricess = [20,40,60,70];
// let res = pricess.map((ele,ind,arr) => {
//     console.log(ele);
//     return ele;
// })
// console.log(res);

// let ob = [{
//     name : "aa",
//     id : 101
// },
// {
//     name : "bb",
//     id : 102
// },
// {
//     name : "cc",
//     id : 103
// },
// {
//     name : "dd",
//     id : 104
// }]

// let res = ob.map((ele) => {
//     // console.log(ele);
//     // console.log(ele.name);
//     // console.log(ele.id);
//     return ele.name;
// })

// let res2 = ob.map((ele) => {
//     return ele.id;
// })

// console.log(res);
// console.log(res2);

// let data2 = [{
//     item:"Mobile",
//     price : 50000,
//     details : {
//         brand : "samsung",
//         color : "blye"
//     }
// },{item:"Laptop",
//         price : 90000,
//         details : {
//             brand :"HP",
//             color : "Grey"
//         }},{
//             item : "Keyboard",
//         price : 800,
//         details : {
//             brand :"KREO",
//             color : "blue"
//         }
//         }]



// data2.map((ele) => {
//     console.log(ele);
//     console.log(ele.details.color);
//     console.log(ele.details.brand);
//     console.log(ele.price);
// })


// let users = [ {name:"Aparna", Hobbies:["Comming","Struggling","Going"],course :"Python"},
// {name:"AAAA", Hobbies:["Comming","Struggl","Going"],course : "Java"},
// {name:"BBBB", Hobbies:["Comming","Strugglin","Going"],course : "java"}];

// users.map((ele) => {
//     console.log(ele.Hobbies[1]);
// })

// let res = users.map( (ele) => {
//     return ele.Hobbies[1];
// })
// console.log(res);



// let products = [
//     {
//     id :1,
//     name : "Laptop",
//     price : "50000",
//     category :{
//         name : "Electronics",
//         department : "Computers"
//     },
//     reviews :[
//         {user : "Ravi" , rating :5},
//         {user : "Priye" , rating : 4}
//     ]
// },{
//     id :1,
//     name : "Laptop",
//     price : "50000",
//     category :{
//         name : "Electronics",
//         department : "Computers"
//     },
//     reviews :[
//         {user : "Ravi" , rating :5},
//         {user : "Priye" , rating : 4}
//     ]
// }]


// let restaurants = [{
//     name : "Spicy Kitche",
//     location : {
//         city : "Kochi",
//         area : "Palarivattom"
//     },
//     menu : [{
//         item : "Chicken Biriyani",
//         price : "250",
//         ingredients : ["Rice",""]
//     },{}]
// }, {} , {}]
// products.map( (ele) => {
//     console.log(ele.menu.chef.name);
// })


//use filter salary > 45000
let employees = [{
    employeeName : "Jhon Doe",
    employeeId : 102,
    salary : 35000
} , {
    employeeName : "Clark Kent",
    employeeId : 103,
    salary : 46600
} , {
    employeeName : "Martin",
    employeeId : 104,
    salary : 50000
}];

let res = employees.filter((ele) => {
    return ele.salary > 45000;
});
console.log(res);

let res2 = res.map((ele) => {
    console.log(ele.employeeName);
    console.log(ele.salary);
    // return ele.employeeName;
    // return ele.salary;
})
// console.log(res2)

// Desteucturing
// keyword[var1 , var2 .....] = Arrayname;
let names = ["AAA","BBB","CCC","DDD"];
let[a,b,c,d] = names;
console.log(b);


