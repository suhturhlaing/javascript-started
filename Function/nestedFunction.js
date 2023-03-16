// function outer() {
//     function inner() {
//         return "hello"
//     }
//     inner();
// }
// console.log(outer());

// function getName() {            // outerFunction
//     getAge(1);                   // innerFunction
// }

// function getAge() {
//     return "hello"
// }
// console.log(getName());

function add(a) {
    return function (b) {
        return a + b;
    }
}
console.log(add(1)(4));


