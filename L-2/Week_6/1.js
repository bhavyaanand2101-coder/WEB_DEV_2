// // 4. Lexical Scope in js -> visibility/accessibility

// function hello() {
//     var name="bhavya";
//     let age= 19;

//     console.log(name);
//     console.log(age);

//     if (true){
//         name="Bhanu";
//         age=222;
//         console.log(name);
//         console.log(age);
//     }
// console.log(name);
// console.log(age);
// }

// hello()

// 5. Execution Context
console.log(one());
console.log("start");

function one() {
    console.log(name);
    var name = "bhavya";

    three();
    console.log(name);
    return "Bahu"
}
console.log("mid");
function three() {
    return "hello dear"
}
function two() {
    console.log("error");
    let age = 19;
      console.log(three());
    console.log(age);
}

console.log(two());
console.log("end");
one()
