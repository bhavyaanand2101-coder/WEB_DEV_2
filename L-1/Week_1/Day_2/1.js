// ES6 concepts

// 4. Ternary Operator

// syntax: condition ? expr1 : expr2 exp

const ans = !true ? "yes" : "no";

console.log(ans); // no

// 5. Nullish Coalescing Operator (??)
// a??b

let ans1 = null ?? "user";
let and2= false ?? "admin";

console.log(ans1); // user
console.log(and2); // false
let ams= undefined ?? null;
console.log(ams); // null

// 7. array add and remove operations

let arr = [1,2,3,4,5];

// add element at last
arr.push(6);
console.log(arr); // [1,2,3,4,5,6]
// remove element from last
arr.pop();
console.log(arr); // [1,2,3,4,5]
// add element at first
arr.unshift(0);
console.log(arr); // [0,1,2,3,4,5]
// remove element from first
arr.shift();
console.log(arr); // [1,2,3,4,5]
// add element at specific position
arr.splice(2,0,2.5); // (index, deleteCount, item1, item2,...)
console.log(arr);

// 8. array indexOf
let index = arr.indexOf(3);
console.log(index); // 3
let index2 = arr.indexOf(10);
console.log(index2); // -1

// Spread operators - always returns an array after performing operations
// Spread operator to copy/merge/join arrays
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let ans5 = [...arr1,...arr2];
console.log(ans5); // [1,2,3,4,5,6,7,8,9,10].  Spread op



let obj1 = {a:1};
let obj2 = {b:2};

let ans6 = {...obj1, ...obj2,b:3,c:4};
console.log(ans6); // {a:1,b:3,c:4} Spread op

// Rest Operator
 function add(a,b){
    console.log(a);
    console.log(b);
 };
add(1,2)
add(1)
add(1,2,3,4,5)


// Template Literalslet 
let name="Shyam";
console.log(`Hello ${name}, How are you?`);
console.log('Hello '+name+', How are you?');

// Hello Student,
// Sharing today class code for your reference.


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


// if([]){
//     console.log(1);
    
// } else{
//     console.log(2);
    
// }


// console.log("ram" && "shyam");

// console.log("ram" || "shyam");


// console.log("hii" && !"byy" || "shy" && null || !undefined);















// 4. Ternary Operator


// synx: condition?"1st expression":"2nd expression"

// const ans = !!undefined?"hello":"byy"
// console.log(ans);



// 5. Nullish Coalescing Operator (??)
// if 1st value is either null/undefined then 2nd value is our answer
// a??b

// let ans = null ?? "user";
// let ans1 = false ?? "love"
// let ans2 = undefined ?? null

// console.log(ans , ans1,ans2);
















// 6. String toLowerCase() and toUpperCase()

// let str = "HeLLo";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());





















// 7. Array add and remove operation

// let arr = [1,2,3,4];
// // add element at last
// arr.push(5);
// console.log(arr);

// // remove element from last
// arr.pop();
// console.log(arr);

// // add element at first
// arr.unshift(0);
// console.log(arr);

// // remove element from first
// arr.shift();
// console.log(arr);

// // add element at specific position
// arr.splice(2,0,2.5); // (index, deleteCount, item1, item2,...)
// console.log(arr);

// // remove element from specific position
// arr.splice(2,1);
// console.log(arr);





















// 8. Array indexOf()


// let arr = [1,2,3,1,2,3];

// let ans = arr.indexOf(1)
// let ans1 = arr.indexOf(100);

// console.log(ans, ans1);
















// 9. Rest and Spread Operator

// Spread Operator - merge/join/copy

// array

// let arr1 = [1,2,3];
// let arr2 = [3,4,5];

// let ans = [...arr1,...arr2,10,20]
// console.log(ans);


// let o1 = {a:1};
// let o2 = {b:2};

// let o3 = {...o1,...o2,b:3,c:4}
// console.log(o3);


// Rest operator - always return an arr


// function add(a,...b){
//     console.log(a);
//     console.log(b);
    
// }


// add(1,2)
// add(1)
// add(1,2,3)



/*Practice all these important concepts and try to read more about the topics below:

10.⁠ ⁠reverse(), join() and split() Method
11.⁠ ⁠Array slice() and splice()
15.⁠ ⁠Array Higher Order Function Methods
•⁠  ⁠map()
•⁠  ⁠filter()
•⁠  ⁠sort()
•⁠  ⁠reduce()
•⁠  ⁠forEach()
•⁠  ⁠includes()
16.⁠ ⁠Problems on String Pattern
let str = "hello world"; */

// Reverse
let name2="Shyam";
console.log(`Hello ${name2}, How are you?`);
console.log('Hello '+name2+', How are you?');

// Join and Split
let list =[1,2,3,4,5,6,7,8,9];
let joined = list.join("-");
console.log(joined); // "1-2-3-4-5-6-7-8-9"

let splitted = joined.split("-");
console.log(splitted); // ["1","2","3","4","5","6","7","8","9"]

// Slice and Splice
let arr3 = [1,2,3,4,5,6,7,8,9];
let sliced = arr3.slice(2,5); // from index 2 to index 5->(not included)
console.log(sliced); // [3,4,5]

let arr4 = [1,2,3,4,5];
arr4.splice(2,0,2.5); // at index 2, delete 0 elements, add 2.5
console.log(arr4); // [1,2,2.5,3,4,5]

// map()
let mapped = arr4.map(x => x * 2);
console.log(mapped); // [2,4,5,6,8,10]

// filter()
let filtered = arr4.filter(x => x % 2 === 0);
console.log(filtered); // [2,4]

// sort()
let unsorted = [5,3,8,1,2];
let sorted = unsorted.sort((a,b) => a - b);
console.log(sorted); // [1,2,3,5,8]

// reduce()
let sum = arr4.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 17

// forEach()
arr4.forEach(x => console.log(x)); // prints each element

// includes()
let hasThree = arr4.includes(3);
console.log(hasThree); // true
let hasTen = arr4.includes(10);
console.log(hasTen); // false

// Problems on String Pattern
let str = "hello world";
// Reverse the string
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // "dlrow olleh"

// Count vowels in the string
let vowelsCount = str.split("").filter(char => "aeiou".includes(char.toLowerCase())).length;
console.log(vowelsCount); // 3
