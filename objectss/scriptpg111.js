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



let student2 = {
    name:"Liya",
    id:103,
    skills:["Html","Css","Js",["Rose","Anu"],"Python","SQL"],
    address : {
        city:"Ernakulam",
        pincode:"67899",
        contact:108
    }
}

console.log(student2.skills);
console.log(student2.skills[3]);
console.log(student2.skills[3][0]);
console.log(student2.address);
console.log(student2.address.city);
console.log(student2.address.pincode);
console.log(student2.address.contact);