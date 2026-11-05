// let promise1 = fetch("https://fakestoreapi.com/users")
// // console.log(promise1)
// promise1.then((response) => {
//     // console.log(response);
//     let promise2 = response.json()
//     // console.log(promise2);
//     promise2.then((value) => {
//         console.log(value); 
//         console.log(value[1]);
//         console.log(value[1].username);
//         console.log(value[1].name.firstname);
//     })
// })
// .catch((reason) => {
//     console.log(reason);
// })


// let promise1 = fetch("https://fakestoreapi.com/products");
// promise1.then((respone) => {
//     let promise2 = respone.json()
//     promise2.then((value) => {
//         value.forEach((ele) => {
//             console.log("product ID :",ele.id);
//             console.log("Category :",ele.category);
//             console.log("Price :",ele.price);
//             console.log("Rating :",ele.rating.rate)
//         })
//     })
// })

// let promise1 = fetch("https://fakestoreapi.com/carts");
// promise1.then((response) => {
//     let promise2 = response.json()
//     promise2.then((value) => {
//         value.forEach((ele) => {
//             console.log("User ID :",ele.userId);
//             console.log("Product ID :",ele.products.productId);
//             console.log("Quantity : ",ele.products.quantity);
//             ele.forEach((products) => {
//                 console.log(products.productId)
//             })
//         })
        
//     })
// }).catch((reason) => {
//     console.log(reason);

// })





//Sending new data
// let promise1 = fetch("https://jsonplaceholder.typicode.com/posts",{

//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"

//     },
//     body:JSON.stringify({
//         name :"Liya",
//         course:"React"
//     })
// })
// promise1.then((response)=>{
//     let promise2 = response.json();
//     promise2.then((value)=>{
//         console.log(value);
//     })
// }).catch((error)=>{
//     console.log(error);
// })

//getting or receiving data
let promise3 = fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
})

 promise3.then((response)=>{
    let promise4 = response.json();
    promise4.then((value)=>{
        console.log(value);
    })
}).catch((error)=>{
    console.log(error);
})


//updating data
let promise5 = fetch("https://jsonplaceholder.typicode.com/posts/3",{
    method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        title:"title changedd brooo",
        body:"Body is changeddddd"

    })
})
promise5.then((response)=>{
    let promise6 = response.json();
    promise6.then((value)=>{
        console.log(value); 
    })
})
.catch((error)=>{
    console.log(error);
})

//delete existing data
let promise7 = fetch("https://jsonplaceholder.typicode.com/posts/3",{
     method:"DELETE"
})
promise7.then((response)=> {
    let promise8 = response.json()
    promise8.then((response)=>{
        console.log(response)
    })
})
.catch((error)=>{
    console.log(error);
})