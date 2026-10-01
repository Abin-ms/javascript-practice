// let a = [10,20,40,50,60];
// let res = a.slice(1,4);
// console.log(res);

// //splice() - splice(startindex,endindex);


// let cc = ["Apple","Mango","Orange","Grape"];
// cc.splice(1,0,"hello","haii")
// console.log(cc)

// cc.splice(1,2)
// console.log(cc)

// let bb =  ["Apple","Mango","Orange","Grape"];
// console.log(bb)
// bb.splice(1,2);
// console.log(bb);

// let bbb =  ["Apple","Mango","Orange","Grape"];
// bbb.splice(2,1,"Banana");
// console.log(bbb)

// //reverse()
// let vimalj = ["Aswathi","Rose","Anugraha","Aiswarya","Dhyan","Abhishek","Bazim"];
// console.log("Before reverse",vimalj);
// vimalj.reverse();
// console.log("After reverse",vimalj)


// //forEach()
// let prices = [100,200,300,400,500];
// prices.forEach((ele,ind) =>{
//     console.log(ele)
//     console.log(ind)
// })


//example - 2

// let pricess = [2000,999,3500,500,700];
// pricess.forEach((ele,ind,arr) =>{
//     console.log(ele + 20)
//     console.log(ind)
//     console.log(arr)
// })

//forEach()
// let names = ["Rose","Anugraha","Aswathi"];
// let res2 = names.forEach((ele) => {
//     console.log(ele);
//     return "Hii";//forEach() will not return anything.
// })
// console.log(res2);

//map()
// let names = ["Rose","Anugraha","Aswathi"];
// let res = names.map((ele) => {
//     return ele;
// })
// console.log(res)

// let names3 = ["Rose","Anugraha","Aswathi"];
// let rr = names3.map((ele,ind) => {
//     console.log(ele);
//     console.log(ind);
//     return "hhh";
// })
// console.log(rr);


// let prices = [100,200,300,400,500];
// let ree = prices.map((element) => {
//     return element + 50;
// })
// console.log("Returned Array",ree);
// console.log("Original Array",prices)

//map() example

let users = ["Basil","Vasudev","Anugraha","Aswathi"];
let ress = users.map((ele) => {
    return ele.toUpperCase();
    
})
let ress2 = users.map((ele) => {
    return ele.toLowerCase()
})
console.log("Original array",users)
console.log(ress)
console.log(ress2)
