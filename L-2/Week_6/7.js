//  8.Curring

//  8.Curring 

// function add(a){
//      return function(b){
//        return   function(c){
//             return  function(d){
//              return    a+b+c+d;
//             }
//         }
//     }
// }

// let ans = add(1)(2)(3)(4);
// console.log(ans);

// arrow function
const add = (a)=>(b)=>(c)=>(d)=>a+b+c+d;
 
let ans = add(1)(2)(3)(4);
console.log(ans);