// ES6 

// 1. Destructuring
let arr = [1, 2, 3];
let [a, b, c] = arr; // array destructuring
console.log(a, b, c); // Output: 1 2 3

let obj = { x: 10, y: 20 };
let { x, y } = obj; // object destructuring
console.log(x, y); // Output: 10 20

// 2. Type convrersion
let str="123";
let a1=Number(str); // string to number
console.log(a1, typeof a1); 

let a2= +str; // string to number using unary plus
console.log(a2, typeof a2);

let a3= parseInt(str); // string to number using parseInt
console.log(a3, typeof a3);

let num=123

let a4=String(num);
console.log(a4, typeof a4); // number to string

let a5=num.toString(); // number to string using toString()
console.log(a5, typeof a5);

let a6= "";
a6+=num; // number to string using concatenation
console.log(a6, typeof a6);

let a7=num.toFixed();
console.log(a7, typeof a7); // number to string using toFixed()

// 3. Falsy Values in js
// false, 0, -0, 0n, "", null, undefined, NaN

if(101){
    console.log(1);
} else {
    console.log(2);
}

// And Operators
// and operator always searches for falsy value and returns it and if it doesn't find any falsy value then it returns the last value
console.log(10 && 20 && 0 && 30); // Output: 0
console.log(10 && 20 && 30); // Output: 30

// Or Operators
// or operator always searches for truthy value and returns it and if it doesn't find any truthy value then it returns the last value
console.log(0 || "" || null || 25 || 30); // Output: 25
console.log(0 || "" || null); // Output: null

console.log("ram" && "shyam"); // Output: shyam
console.log("ram" || "shyam"); // Output: ram

// console.log("hii" && 0 && !"hello" || "shyam" && 25); // Output: 25
console.log(("hii" && 0 && !"hello") || ("shyam" && 25)); // Output: 25


// sharing today class code for your reference.
// ======= [ ES6 Concepts ]=======



// 1. Destructing in js


// let arr = [1,2,3];

// let [a,b,c] = arr
// console.log(a,b,c);


// let obj = {a:1,b:2}

// let {a,b} = obj;

// console.log(a,b);



// 2. Type conversion

// convert str data type value ---> num data type

// let str =  "123";

// let ans1 = Number(str);
// console.log(ans1, typeof ans1);


// let ans2 = +str;
// console.log(ans2, typeof ans2);

// let ans3 = parseInt(str);

// console.log(ans3, typeof ans3);






// convert num data ---> str data

// let num = 123;

// let ans1 = String(num);
// console.log(ans1, typeof ans1);

// let ans2 = "";
// ans2+=num;

// console.log(ans2, typeof ans2);

// let ans3 = num.toFixed();
// console.log(ans3, typeof ans3);







// 3. Falsy Values in JavaScript

// 0 
// false 
// "" 
// undefined 
// null 
// NaN


if([]){
    console.log(1);
    
} else{
    console.log(2);
    
}


console.log("ram" && "shyam");

console.log("ram" || "shyam");


// console.log("hii" && !"byy" || "shy" && null || !undefined);