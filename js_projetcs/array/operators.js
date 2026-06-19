// Arithmetic Operators - Arithmetic operators perform mathematical operations on numbers.
    //  (+,  -,  *,  /,  %,   **,   ++,    --)

let a = 7;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)
console.log("----------------------------------------------------------")

// Assignment Operators - Assignment operators assign values to variables.
//    (=,    +=,    -=,     *=,     /=,    %=)

let num = 15;
console.log(a = 3);
console.log(a += 15);
console.log(a -= 5);
console.log(a *= 5);
console.log(a /= 6);
console.log(a %= 6);
console.log("----------------------------------------------------------")

// Comparison Operators - These operators compare values and return true or false.
//    (==,    ===,    !=,    !==,    >,    <,    >=,   <=)

let x = 8;
let y = 9;
let z = "9";

console.log(x == y);
console.log(z == y);
console.log(z === y);
console.log(x === y);
console.log(x != y);
console.log(x != z);
console.log(z != y);
console.log(x !== y);
console.log(x !== z);
console.log(z !== y);
console.log(x > y);
console.log(z > y);
console.log(x < y);
console.log(z < y);
console.log(x <= y);
console.log(z <= y);
console.log(x <= z);
console.log(x >= y);
console.log(z >= y);
console.log(x >= z);
console.log("----------------------------------------------------------")

// String Operators - String operators allow manipulation of text.
//    (+      +=)

let str1 = "Hello";
let str2 = " coders!";
console.log(str1 + str2); 

let str3 = "JavaScript ";
str3 += "is awesome!";
console.log(str3); 
console.log("----------------------------------------------------------")


// Logical Operators - These operators return boolean values based on conditions.
//    (AND(&&),     OR(||)      NOT(!))

let n = 13;
let m = 16;

console.log(n > m && n < m);
console.log(n < m && n < 14);
console.log(n > m || n < m);
console.log(n > m || n > 14);
console.log(n != m );
console.log("----------------------------------------------------------")

// Ternary Operator - A shorthand for if-else statements.
//    ((),     ?,      :)

let age = 20;
let age2 = 17;
let status = (age >= 18) ? "Adult, you can watch movie" : "child, you go home and watch pogo on tv";
let status2 = (age2 >= 18) ? "Adult, you can watch movie" : "child, you go home and watch pogo on tv";
console.log(status); 
console.log(status2); 
console.log("----------------------------------------------------------")

// typeof() and instanceof() - both are find type of veriable

console.log(typeof 10);         
console.log(typeof "Hello");    
console.log(typeof true);       
console.log([1, 2, 3] instanceof Array); 
console.log("----------------------------------------------------------")
