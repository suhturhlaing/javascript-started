// ------------------------------  *** logical Operator *** ---------------------------------------


// -----------------------   AND && logical Operator  --------------------------

let a = true, b = false;
let c = 5;

console.log(a && a);            // output true

console.log(a && b);            // output false

console.log(b && b);            // output false

console.log(c < 10 && c > 10);      // output false





// -----------------------   OR || logical Operator  --------------------------

console.log(a || a);            // output true

console.log(b || a);            // output true

console.log(b || b);            // output false

console.log(c < 10 || c > 10);         // output true





// -----------------------   NOT ! logical Operator  --------------------------

console.log(!a);                // output false

console.log(!b);                // output true