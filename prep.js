// function claculate(num1,mun2) {
//     return num1*num2
// }
// function displyData(name, age) {
//     console.log(`$`);
// }


// "Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
// setTimeout(() => {
//     console.log("1") ;

// setTimeout(() => {
//     console.log("2") ;
//     setTimeout(() => {
//         console.log("3") ;
//         setTimeout(() => {
//             console.log("4") ;
//             setTimeout(() => {
//                 console.log("5") ;
//                 setTimeout(() => {
//                     console.log("6") ;
//                     setTimeout(() => {
//                         console.log("7") ;
                        
//                     }, 1000);
//                 }, 2000);
//             }, 3000);
//         }, 4000);
//     }, 5000);
// }, 6000);

// }, 7000);

// "Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"





//"Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed 
// then it should go to reject the state and catch the error and print Promise Rejected " 

// let variable =true;
// let myPromise = new Promise((res, rej )=>{
//     if (variable ===true){
//         res('Promise resolve Succesfully')
//     }
//     else{
//         rej("Promis Reject")
//     }
// }) 
// myPromise
// .then((item)=> console.log(item))
// .catch((err)=> console.log(err)); 


// let p =true;

// function Prom02(p) {
//     return new Promise((a,b)=>{
//         if (p===true) {
//             a("pass")
//         }
//         else{
//             b("Not Pass")
//         }
//     }
//     )
// }
// Promise
// .then((item02)=> console.log(item02))
// .catch((err02)=> console.log(err02)); 




// var a = 12;
// (function () {
//   alert(a);
// })();

// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();
// function resolvePromise(a,b){
// return new Promise((resovle,reject)=>{
//     setTimeout(()=>{
//         console.log(a);
//         resovle("promis Succesfully...");
//     },b)
// })
// }
// function vowelAlpha() {
//     resolvePromise('1',1000)
//     .then(()=>resolvePromise('2',2000))
//     .then(()=>resolvePromise('3',3000))
// }vowelAlpha();

