let arr = [1, 2, 3, 4, 5];
let ans= arr.reverse();
console.log(ans,arr); // [5,4,3,2,1]
// The reverse() method reverses an array in place.
// The first array element becomes the last, and the last becomes the first.

// join
let ans1 = arr.join("");
console.log(ans1);
console.log(typeof ans1); // "54321" "string"

let str="HelloWorld";
let ans2 = str.split("");
console.log(ans2); // ['H','e','l','l','o','W','o','r','l','d']
let a3= str.split("o");
console.log(a3); // ['Hell', 'W', 'rld']

let str2=" hello world"
// ans3="world hello"
let arr2= str2.split(" ");
let ans3= arr2.reverse().join(" ");
console.log(ans3); // "world hello"

// 13. function with default parameters
function add(x,y){
    console.log(x+y);
}
add(2,3); // 5
add(2); // NaN

// 14. callback function
function HOF(callback){
    console.log(1);
    callback();
    console.log(2);
}
function greet(){
    console.log(3);
}
HOF(greet);
// Output:
// 1
// 3
// 2
// A higher-order function is a function that takes another function as an argument, or returns a function as a result.
// callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// 15. Array hof methods
// map
let arr4 = [1,2,3,4,5];
let mappedArr = arr4.map(function(ele){
    return ele * 2;
});
console.log(mappedArr); // [2,4,6,8,10]
// map is a array method that creates a new array populated with the results of calling a provided function on every element in the calling array.
// always returns a new array
// forEach
let arr5 = [1,2,3,4,5];
arr5.forEach(function(ele){
    console.log(ele);
});
// Output:
// 1
// 2
// 3
// 4
// 5
// forEach method executes a provided function once for each array element.
// does not return anything
// difference between map and forEach is that map returns a new array, while forEach does not return anything.

// filter
let arr6 = [1,2,3,4,5,6,7,8,9,10];
let ans4= arr6.filter(function(ele){
    return ele % 2 === 0;
});
console.log(ans4); // [2,4,6,8,10]
// filter method creates a new array with all elements that pass the test implemented by the provided function.

// sort
let arr7 = [5,3,8,1,2];
let ans5 = arr7.sort();
console.log(ans5); // [1,2,3,5,8]

let arr8 = [5,3,8,1,2];
let ans6 = arr8.sort(function(a,b){
    return a - b;
});
console.log(ans6); // [1,2,3,5,8]

// reduce
let arr9 = [1,2,3,4,5];
let sum =arr9.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15
// reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

let arr10=[1,2,3,4,5];
let ans7=arr10.reduce((acc,el)=>{
    return acc + el;
})
console.log(ans7); // 15

// let ans= "dlrow olleh"
// let ans2= "olleh dlrow"
let str3="hello world"
let ans8= str3.split(" ").map((el)=>{
    return el.split("").reverse().join("");
}).join(" ");
console.log(ans8); // "olleh dlrow"
//dlrow olleh
let ans9= str3.split(" ").reverse().join(" ");
console.log(ans9);

// 1. 
let str4="hello world";
let ans10=str4.split(" ").reverse().map((el)=>{
    return el.split("").reverse().join("")
}).join(" ");
console.log(ans10); // "dlrow olleh"

