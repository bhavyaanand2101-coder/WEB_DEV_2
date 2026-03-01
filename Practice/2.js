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

