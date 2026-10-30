//clearTimeout
//clearInterval
// console.log("Start")
// let id = setTimeout(()=> {
//     console.log("This is setTimeout.")

// },2000)
// clearTimeout(id)
// console.log("Timer Removed");

//counter
// let count = 0;
// let id = setInterval(()=>{
//     count++
//     console.log("Count down:",count);
//     if(count==5){
//         clearInterval(id)
//     }
// },1000)


// let payment = new Promise((resolve,reject) => {
//     console.log("Payment processing...");
//     setTimeout(()=>{
//         let paymentStatus = true;
//         if(paymentStatus){
//             resolve("Payment succesfulll....");
//         }
//         else{
//             reject("payment Failed! Please try again....");
//         }
//     },3000)
// })
// //how to handle promise
// payment.then((message)=>{
//     console.log(message)u
// })
// .catch((reason)=>{
//     console.log(reason)
// })

// let foodOrder = new Promise((resolve,reject) => {
//     console.log("Placing your food order..");
//     setTimeout(() =>{
//         let orderAccepted = true
//         if(orderAccepted){
//             resolve("Your food order has been accepted...");
//         }
//         else{
//             reject("Sorry! your food order has been rejected...")
//         }
//     },3000)
// })
// foodOrder.then((message)=>{
//     console.log(message)
// })
// .catch((resolve) => {
//     console.log(resolve)
// })
// .finally(() => {
//     console.log("Process completed ")
// })


let bus = new Promise((resolve,reject) => {
    console.log("Waiting for a bus...")
    setTimeout(() => {
        let busHasArrived = true
        if(busHasArrived){
            resolve({
                travells : "Morning star",
                busNo : "KS07123",
                status : "Arrived"

            })
        }
        else{
            reject("Bus is not arrived yet....")
        }
    })
},4000)
bus.then((message) => {
    console.log(message.travells)
    console.log(message.busNo)
    console.log(message.bus)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("Thank you for using morning star...")
})