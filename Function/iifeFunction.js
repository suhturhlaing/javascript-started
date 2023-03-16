
// **** IIFE function work
// const result = (function (a) {
//     return a;
// })(8);
// console.log(result);


// let temp = (function () {

//     let sum = function (n1, n2) {
//         return n1 + n2;
//     }
//     return sum;
// })();
// console.log(temp)
// console.log(temp(1, 2))

//  Correct
// let result = (function (n1, n2) {
//     let sum = n1 + n2;
//     return sum;
// })(1, 2)
// console.log(result);

// Wrong
// let result = (function (n1, n2) {
//     let sum = n1 + n2;
//     return sum;
// })()
// console.log(result);


// let result = (function () {
//     let sum = function (n1, n2) {
//         return n1 + n2;
//     }
//     return sum;
// })()

// console.log(result(1, 2));


// let result = (function () {
//     let sum = function (n1, n2) {
//         return n1 + n2;
//     }
//     return sum;
// })()
// console.log(result)
// console.log(result(1, 2))


// let sum = (function () {
//     let total = 0;
//     let tmpFun = function (data = null) {
//         if (data != null) {
//             total += data;
//             return tmpFun
//         }
//         else {
//             return total;
//         }
//     }
//     return tmpFun
// })();
// console.log(sum(2)(1)(2)())

// let sum = (function () {
//     let total = 0;
//     let firstFunction = function (data = null) {
//         if (data != null) {
//             total += data;
//             return firstFunction;
//         } else {
//             return total;
//         }
//     }
//     return firstFunction;
// })()
// console.log(sum(2)(1)(2)())


// ***** IIFE and closure function 
let result = (function () {
    let total = 0;
    let sum = function (num = null) {
        if (num != null) {
            total += num;
            return sum;
        }
        else {
            return total;
        }
    }
    return sum;
})()
console.log(result(1)(2)(3)(4)())


// const result = (function () {
//     let sum = function (n1) {
//         console.log(n1);
//         return sum(n1 + 1);
//     }
//     return sum;
// })()
// console.log(result(4)(2));




