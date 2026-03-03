// setTimeout(()=>{
//     console.log("Timeout");
// },4000); // 4000ms = 4seconds

// setInterval(()=>{
//     console.log("Interval");
// },2000); // 2000ms = 2seconds

// function greet(){
//     console.log("Hello Bhavya");
// }
// function welcome(){
//     console.log("Welcome to the world of js");
// }
// welcome();    

// function homework(callback){
//     console.log("Homework started");
//     setTimeout(()=>{
//         console.log("Homework completed");
//         callback();
//     },2000);
// }
// function play(){
//     console.log("Playing now");
// }
// homework(play);

// function makingPizza(){
//     console.log("making pizza");
//     setTimeout(()=>{
//         console.log("dought");
//         setTimeout(()=>{
//             console.log("sauce");
//             setTimeout(()=>{
//                 console.log("toppings");
//                 setTimeout(()=>{
//                     console.log("baking");
//                     setTimeout(()=>{
//                         console.log("pizza is ready");
//                     },2000);
//                 },2000);
//             },2000);
//         },2000);
//     },2000);
// }
// makingPizza();

// function homework(callback){
//     console.log("Startting homework");
//     setTimeout(()=>{
//         console.log("Homework completed");
//         callback();
//     },2000);
// }
// function Dinner(callback){
//     console.log("Dinner time");
//     setTimeout(()=>{
//         console.log("Timeout")
//         callback();
//     },2000);
// }
// function Play(){
//     console.log("playing")
// }
// homework(()=>{
//     Dinner(()=>{
//         Play();
//     });
// });

// Promises
// const MyPromise1 = new Promise((resolve,reject)=>{
//     if(success){
//         resolve("Promise resolved");
//     }else{
//         reject("Promise rejected");
//     }
    
// });

// const success = true;   // or false

// const MyPromise = new Promise((resolve, reject) => {
//     if (success) {
//         resolve("Promise resolved");
//     } else {
//         reject("Promise rejected");
//     }
// });
// const success = true;

// const MyPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (success) {
//             resolve("Promise resolved");
//         } else {
//             reject("Promise rejected");
//         }
//     }, 2000);
// });

// MyPromise
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));

// const homework = new Promise((resolve,reject)=>{
//     console.log("promise");
//     setTimeout(()=>{
//         const didhomework= true;
//         if(didhomework){
//             resolve("complted");
//         }else{
//             reject("forgot");
//         }
//     },3000);
// });
// console.log("start");
// console.log(homework);


// function dohomework(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let homeowrkDone= true;
//             if(homeowrkDone){
//                 resolve("homework completed");
//             }else{
//                 reject("homework not done");
//             }
//         },3000);
//     });
// }
// console.log("start");
// dohomework()
//  .then((result)=>{
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// console.log("end");

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(Math.random()>0.5){
//                 resolve({ success:true, data:'Fetched data' });
//             }else{
//                 reject("Error");
//             }
//         },1000);
//     });
// }

// console.log("Fetchingg data...");
// fetchData()
//     .then((response)=>{
//         console.log("Success:",response);
//     })
//     .catch((error)=>{
//         console.log("Error:");
//     });


// Microtask Vs Macrotask
console.log("start");
setTimeout(()=>{
    console.log("setTimeout");
},0);
Promise.resolve().then(()=>{
    console.log("Promise")
});
console.log("end");