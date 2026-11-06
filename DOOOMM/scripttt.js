// let p1 = document.getElementById("vv")
// console.log(p1);

// let p2 = document.getElementsByClassName("x");
// console.log(p2);
// console.log(p2[0]);
// console.log(p2[1]);

let h2 = document.querySelector("h2");
let h1 = document.querySelectorAll(".a");
let h3 = document.querySelector("#head");
console.log(h2);
console.log(h1)
console.log(h1[2])

let hu = document.querySelectorAll("h2")
hu.forEach((ele,ind)=>{

    console.log(ind);
    console.log(ele);

})

