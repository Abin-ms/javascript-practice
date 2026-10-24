// let details = ["Kochi",33839,["Amaresh","Sathya","Dhanish"]]
// let[a,b,[x,y,z]] = details;
// console.log(y);

// let numbers = [1,2,3,4,5,6];
// let[first,second,third,fourth,,sixth] = numbers;
// console.log(fifth);

// let trainers = ["Amares",["Dhanish","Sathya","kalam"]]
// let[a,[trainer1 , trainer2 , trainer3],,]=trainers;
// console.log(trainer1);
// console.log(trainer2);

// let random = ["Parvathi","Aparna",["Basil","Vasudev",["Rose","Anugraha"],"Liya"]]
// let[a,b,[c,d,[e,f],g]] =random;
// console.log(g)

// let user = {
//     actor : "Karthik",
//     city : "Kottayam",
//     noOfMovies : 0,
//     details : {
//         upComingMovie : undefined,
//         actress : "Anonymous",
//         skills : ["Calling","Story Telling"]
//     }
// }
// let {actor,city,noOfMovies,details,details:{upComingMovie,actress,skills:[a,b]}} = user;
// console.log(b);
// console.log(details);
// console.log(actress);
// console.log(details.skills);


let user = {
    actor : "Karthik",
    city : "Kottayam",
    noOfMovies : 0,
    details : {
        upComingMovie : undefined,
        actress : "Anonymous",
        skills : ["Calling",{branch:"Kochi",course:"Java",feeDetails:["Incubation","Dying"]},"Story telling"]
    }
}

let{actor,city,noOfMovies,details:{upComingMovie,actress,skills:[a,{branch,course,feeDetails:[b,c]},d]}}= user;
console.log(a);
console.log(b);
console.log(d);


