// ------------------------------  *** Unary Operator *** ---------------------------------------



// ------------------------------  == equal to opreator ------------------------------
const eq1 = 10;
const eq2 = "10"

console.log(eq1 == eq2);        //output true



// ------------------------  === equal to opreator (with type checking) ---------------

console.log(eq1 === eq2);        //output false (because type is not equal => eq1 is number and eq2 is string)



// ------------------------  > more than (greater than) operator ---------------
const num1 = 10;
const num2 = 20;

console.log(num1 > num2);           //output false

//  or 

console.log(num2 > num1);                //output true



// ------------------------  >= more than equal (greater than equal) operator ---------------

console.log(num1 >= num2);          //output false

console.log(num2 >= num1);               //output true




// ------------------------ < less than operator ---------------

console.log(num1 < num2);                //output true

console.log(num2 < num1);                //output false



// ------------------------ <= less than equal operator ---------------

console.log(num1 <= num2);              //output true

console.log(num2 <= num1);              //output false

console.log(num2 <= num2);                  //output true



// ------------------------ != not equal operator ---------------

console.log(num1 != num2);           //output true



// ------------------------ !== not equal operator (with type checking) ---------------
console.log(num1 !== num2);         //output true


console.log(eq1 !== eq2);            //output true
// 10 !== "10" 