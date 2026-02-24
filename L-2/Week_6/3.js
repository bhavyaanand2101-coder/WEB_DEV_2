// console.log("start");
// setInterval(() => {
//     three()
// }, 2000);

// function one() {
//     console.log(name);
//     var name = "bhavya";
//     return name;
//     console.log(three());
// }

// srtTimeout(() => {
//     console.log(one());
// },3000);

// function two(){
//     console.log(age);
//     var age = 19;
//     return age;
// }

// function three() {
//     console.log("hello dear");

// }

// console.log("mid");

// setTimeout(() => {
//     console.log(two());
// }
// , 5000);
// console.log("end");



// 7. Event loop
console.log("start");

setInterval(() => {
    three()
},10000)

function one(){
    console.log(name);
    var name = "priyanshu";

    return name;
    console.log(three());
}

setTimeout(() => {
    console.log(one());
}, 3000);

function two(){
    console.log(age);
    var age = 25;
    console.log(three());

    return age;

}
function three(){
    console.log("abb kya hi bolu ... ");

}

console.log("mid");
setTimeout(() => {
    console.log(two());
}, 5000);

console.log("end");