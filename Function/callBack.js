// *** Call back function

// function myFunction(data) {
//     console.log(data);
// }

// function First() {
//     myFunction("hibi")
// }

// First();



//  another way
// function result(some) {
//     console.log(some);
//     return some;
// }

// function calculate(num1, num2) {
//     let sum = num1 + num2;
//     return sum;

// }
// result(calculate(3, 5));

// *** JavaScript Callbacks *** //
// A callback is a function passed as an argument to another function.


// function display(some) {
//     console.log(some)
// }

// function calculate(num1, num2, mycallback) {
//     let sum = num1 + num2;
//     mycallback(sum)
// }
// calculate(10, 5, display);

// ko ko ko may yan

// const myNumbers = [1, -5, 8, 9, 11, -23, -100];

// function myFunction(x) {
//     x >= 0;
// }
// function mainFunction(numbers, callFun) {
//     let result = [];
//     for (const x of numbers) {
//         if (callFun(x)) {
//             result.push(x)
//         }
//     }
//     return result;
// }
// const a = mainFunction(myNumbers, myFunction);
// console.log(a);

const myNumbers = [1, -5, 8, 9, 11, -23, -100];

function mainFunction(numbers, callFun) {
    let result = [];
    for (const x of numbers) {
        if (callFun(x)) {
            result.push(x)
        }
    }
    return result;
}
const a = mainFunction(myNumbers, (x) => x >= 0);
console.log(a);


