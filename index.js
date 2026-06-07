// console.log("hello");


// Coding Questions


// 1
// function TransferNumber(num2) {
//     let num = 123
//     return String(num+num2)
// }

// console.log(TransferNumber(7));



// 2
// function checkNumber(num) {
//     if (num == 0) {
//         return "Invalid";

//     } else {
//         return "Valid";
//     }
// }

// console.log(checkNumber(5));



// 3
// let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < numb.length; i++) {
//     if (numb[i] % 2 == 0) {
//         continue
//     } else {
//         console.log(numb[i]);

//     }

// }



// 4
// let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numb.filter((ah , al , asll)=>{
// if (ah % 2 == 0) {
//     console.log(ah);
// };
// })



// 5
// let numb1 = [1, 2, 3, 4, 5];
// let numb2 = [6, 7, 8, 9, 10];
// const total = [...numb1 , ...numb2]
// console.log(total);



// 6
// const day = 3
// switch (day) {
//     case 0:
//         console.log("Satarday");
//         break;
//     case 1:
//         console.log("Sunday");

//         break;
//     case 2:
//         console.log("Monday");

//         break;
//     case 3:
//         console.log("Tusday");

//         break;
//     case 4:
//         console.log("Wensday");

//         break;
//     case 5:
//         console.log("Tursday");

//         break;
//     case 6:
//         console.log("Friday");

//         break;
// }



// 7
// let numb1 = ["a", "ab", "abc"];
// numb1.filter((value , index)=>{
//     console.log(value.length);
// })



// 8
// function chaeckNum(num) {
//     if (num%3 == 0 && num%5==0) {
//        return console.log("Divisible by both");    
//     }
//     else{
//         return console.log("go out😅");    
//     }
// }
// chaeckNum(10)



// 9
// const Square = (num)=>{
//     return console.log(num * num);
// }
// Square(3)



// 10
// const data = {name : "jone" , age : 14 , Nation : "sudan"}
// function destr() {
//     let {name , age , Nation} = data;
//     return console.log(`My name is ${name} and My age is ${age} and My nationlaity is ${Nation}`);
// }
// destr()



// 11
// function MakeTotal(...params) {
//     let tot = 0;
//     for (const i of params) {
//         tot+=i
//     }
//     return tot
// }
// console.log(MakeTotal(1 , 2 , 3 , 4 , 5));



// 12
// function hello(params) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (params == "Hello") {
//                 resolve("Success");
//             } else {
//                 reject("Error");

//             }

//         }, 3000)
//     })
// }
// hello("Helloo")
//     .then((resolve) => {
//         console.log(resolve);
//     }).catch((reject) => {
//         console.log(reject);
//     })



// 13
// num = [1, 3, 7, 2, 4];
// let max = Math.max(...num);
// console.log(max);



// 14
// const chech = { name: "John", age: 30, Nationlity: "Franse" }
// console.log(Object.keys(chech));



// 15
// let shol = "hello"
// console.log(shol.split(""));





// Essay Questions


// 01
// forEach is an Array Method that uses an Arrow Function and accepts parameters such as element, index, and array.
// One disadvantage of forEach is that it does not work as expected with await.
// for...of is a For Loop and works better with await.
// It supports Destructuring.
// It can be used to access both index and value through entries().
// When working with Async/Await, for...of is generally a better choice than forEach.



// 2
// Hoisting is a """behavior""" in JavaScript where the JavaScript engine prepares declarations before the code is executed.
// console.log(num);
// var num = 5
// The Temporal Dead Zone (TDZ) is the """period""" of time between the creation of a variable and the point where its declaration is reached in the code.
// console.log(num);
// let num = 5



// 3
// == Meaning Value 
// === Meaning Value & Datatype



// 4
// How does try...catch work?
// -The code that may throw an error is placed inside the try block.
// -If no error occurs, the code executes normally.
// -If an error occurs, execution of the try block stops immediately.
// -JavaScript jumps to the catch block.
// -Error information is passed to the parameter inside catch.
// -The error can then be handled, logged, or displayed to the user.
// Why is it important in asynchronous operations?
// -Asynchronous operations such as fetch() and API requests can fail for various reasons.
// -It prevents the application from crashing when an error occurs.
// -It allows developers to provide user-friendly error messages.
// -It helps handle network and server-related errors.
// -It prevents unhandled promise rejections.
// -It improves code reliability and maintainability.



// 5
// A- Type Coercion
// Performed automatically by JavaScript.
// let num1 = 5;
// let num2 = "5";
// let result = num1 + num2
// console.log(result);
// console.log(typeof result);
// B- Type Conversion
// Performed by the developer.
// let num1 = 5;
// let num2 = Number("5");
// let result = num1 + num2
// console.log(result);
// console.log(typeof result);








