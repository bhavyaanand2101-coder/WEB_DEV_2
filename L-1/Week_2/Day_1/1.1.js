
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




















// 7. Array add and remove operation

// let arr = [1,2,3,4];





















// 8. Array indexOf()


// let arr = [1,2,3,1,2,3];

// let ans = arr.indexOf(1)
// let ans1 = arr.indexOf(100);

// console.log(ans, ans1);
















// 9. Rest and Spread Operator [...]

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














// 10. reverse(), join() and split() Method

// let arr = [1,20,3,40,5];

// let ans = arr.reverse();

// console.log(ans, arr);


// let ans = arr.join("");

// console.log(ans, typeof ans);

// let str = "hello";

// let ans = str.split("e");
// console.log(ans);


// let str = "hello world";

// let ans = str.split(" ").reverse().join(" ")
// console.log(ans);

// let ans = "world hello";

// let ans1 = "dlrow olleh";
// let ans2 = "olleh dlrow";

// let str = "hello world";

// let ans = str.split(" ").reverse().map((el)=>{
//     return el.split("").reverse().join("")
// }).join(" ")

// console.log(ans);

// console.log(ans[0].split("").reverse().join(""));






















// 11. Array slice() and splice()

// let arr = [1,2,3,4,5];



















// 12. Template Literals -


// let name = "love porwal";

// console.log("My name is: ",name);
// console.log(`My Name is ${name}`);


















// 13. Function with Default Parameter

// function add(x=0,y=0){
//     console.log(x,y);
    
// }


// add(1,2)
// add()















// 14. Callback and Higher Order Function

// function HOF(callback){
//     console.log(1);
//     callback()
//     console.log(2);
    
    
// }

// function greet(){
//     console.log(3);
    
// }
// HOF(greet)















//15. Array Higher Order Function Methods

// a) map()

// let arr = [1, 2, 3, 4, 5];

// // arr.map((el,i,arr)=>{
// // console.log(el,i,arr);

// // })

// let ans = arr.map((el)=>{
//     return el+5
// })

// console.log(ans);

// b) filter()

// let arr = [1, 2, 3, 4, 5];

// let ans = arr.filter((el)=>{
// return el%2==1
// })

// console.log(ans);


// 1%2==1 
// 2%2==1
// 3%2==1

// c) sort()


// let arr = [10,5,-20,25,30];

// let aans = arr.sort((a,b)=>a-b);
// console.log(aans);

// let dans = arr.sort((a,b)=>b-a);
// console.log(dans);




// d) reduce()


// let arr = [1,2,3,4,5];

// let ans = arr.reduce((acc,el)=>{
//     return acc+el
// },"")

// console.log(ans);






// e) forEach()

// let arr = [1,2,3,4,5];

// arr.forEach((el)=>{
// console.log(el+2)
// })

// console.log(ans);


// f) includes()

// let arr = [1,2,3,4,5];




// 16. Problems on str pattern [Extra]


// let str = "hello world";


