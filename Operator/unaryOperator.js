// ------------------------------  *** Unary Operator *** -----------------------------------


// ------------------------------ Unary plus -------------------------------------
const number = 10;
console.log(+number);

const number1 = '50';
console.log(+number1);


// ------------------------------ Unary minus -------------------------------------
const value = "10";
console.log(-value);

const value1 = 20;
console.log(-value1);

const value3 = "hello";
console.log(-value3);

// ------------------------------ Logical Not (!) -------------------------------------
const logical = "10";
console.log(!logical);      //output false

const logical1 = true;
console.log(!logical1);       //output false

const logical2 = 30;
console.log(!logical2);        //output false

// or

console.log(!!logical2);        //output true


// ------------------------------ Bitwise NOT (~) -------------------------------------

const bitwise = 6;
console.log(~bitwise);       //output -7

const bitwise1 = -9;
console.log(~bitwise1);     //output 8




// ------------------------------ Increment Operator(++) -------------------------------------
let increase = 10;
increase++;
console.log(increase);      //output 11




// ------------------------------ Decrement Operator(++) -------------------------------------

let decrease = 10;
decrease--;
console.log(decrease);      //output 9



// ------------------------------ void Operator -------------------------------------
let myVoid = void function () {
    return "hello";
}
console.log(myVoid);        //output undefined


// ------------------------------ delete Operator -------------------------------------

const myObject = {
    name: "John",
    age: 24
}
delete myObject.name;
console.log(myObject);   //output { age: 24 }


// ------------------------------ typeof Operator -------------------------------------

const myString = "name"
console.log(typeof (myString));         // output string

const myNumber = 21;
console.log(typeof (myNumber));         // output number