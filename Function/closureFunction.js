//  *** Closure Function ***

const result = (function () {
    let sum = function () {
        let innerSum = function (n1) {
            return n1;
        }
        return innerSum;
    }
    return sum;
})()
console.log(result()(1))

// Main Function into the another function again and again still exist