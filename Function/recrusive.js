// const showCount = (num1) => {
//     return (num1 <= 10 ? showCount(num1) && num1++ : "done")
// }
// showCount(1)

// if (num1 <= 10) {
//     showCount(num1)
//     num1++
// }
// else {
//     num1
// }


// *** Recrusive function
// const a = function (num) {
//     return num < 10 ? a(++num) : num;
// }
// console.log(a(1));

// const result = function (num) {
//     if (num < 10) {
//         console.log(num);
//         num++;
//         return result(num++);
//     }
//     else {
//         console.log(num)
//     }
// }
// result(1);


const count = function (num1) {
    num1 < 10 ? console.log(num1) || count(++num1) : console.log(num1)
}
count(1);

