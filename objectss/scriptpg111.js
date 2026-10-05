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

let product = {
    productName : "Samsung Galaxy S25",
    price : 74999,
    brand : "Samsung",
    inStock : true,
    colors : ["Black","Blue","Silver"],
    specifications : { 
        ram : "12GB",
        storage : "256GB",
        display : "6.2 inch"
    },
    discount : 10,
    rating : 4.5,
    warranty : null,
    deliveryDate : undefined,
    category : "Mobile Phone"
}
console.log(product);
console.log(product.productName);
console.log(product.price);
console.log(product.colors);
console.log(product.specifications.display);
console.log(product.specifications.ram);