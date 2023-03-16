// Normal function

function name() {
    console.log("hello");
    return true;
}
console.log(name());

//  ** Firstly "first" Function create and then "second" Fucntion create that it call "first" function under the second Function
function first() {
    return "hello";
}

function second() {
    return first();
}
console.log(second());
