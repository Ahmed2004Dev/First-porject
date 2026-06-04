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



