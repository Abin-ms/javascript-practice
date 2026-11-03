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


let promise1 = fetch("https://fakestoreapi.com/products");
promise1.then((respone) => {
    let promise2 = respone.json()
    promise2.then((value) => {
        value.forEach((ele) => {
            console.log("product ID :",ele.id);
            console.log("Category :",ele.category);
            console.log("Price :",ele.price);
            console.log("Rating :",ele.rating.rate)
        })
    })
})