// What is json
// JSON - Javascript object notation
// it is a format used to store or send the data between client(frontend) and  server(backend)
// we have two methods:
// 1.JSON.stringify() - it converts javascript obejct to json
// 2.JSON.parse() - Json to javascript object

let student = {
    name : "Johan",
    isActive : true,
    hasGirlFriend : 5
}

// converting javascript object to json
let x = JSON.stringify(student)
console.log(x);


//converting json to javascript object
let res = JSON.parse(x);
console.log(res)

console.log(res.hasGirlFriend);