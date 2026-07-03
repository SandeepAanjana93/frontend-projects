//function decleration

function hello(){
    console.log("hello coder, i am sandeep patel")
}
console.log("----------------------------------------------")

function add(a , b){
    let adding = a + b;
    console.log(adding);
    let subtract = a - b;
    console.log(subtract);
    let multiply = a * b;
    console.log(multiply);
    let devide = a / b;
    console.log(devide);
    
}

add(45,35)
console.log("----------------------------------------------")

hello()

function student(percentage){
    if(percentage > 35){
        console.log("pass")
    }
    else{
        console.log("fail")
    }
}

student(45)
console.log("----------------------------------------------")


// function expression

let square = function (x){
    let num = x * x;
    console.log(num);
    let num2 = x ** x;
    console.log(num2);
}

square(4)
console.log("----------------------------------------------")


let voting = function (age){
    if(age > 18){
        console.log("you are eligible for vote ");
    }
    else{
        console.log("you are not eligible for vote ");
    }
}

voting(34)
console.log("----------------------------------------------")

// Arrow Function

let convert = (str) => {
    let upper = str.toUpperCase()
    console.log(upper)
}

convert("javascript")

console.log("----------------------------------------------")


let arr = [3,5,7,4,6,34,5,9,24,22]

let count = () => {
    let even = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            even++
        }
    }
    console.log(even)
}

count(arr)

console.log("----------------------------------------------")
// Parameters vs Arguments----------------------------------


// Parameters – Variables in the function definition.

// Arguments – Actual values passed when calling the function.

function welcome(user) {  // user is a parameter
    console.log("Welcome " + user);
}

welcome("Priya");  // "Priya" is an argument

// -----------------------------------------------------


// Return Statement
// If you want to send a value back from the function, use return.


// -------------------------------------------------------------

console.log("----------------------------------------------")

// Callback Functions(Function inside Function)
// A callback function is passed as an argument to another function, and is called after some operation is completed.

function showMessage(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

showMessage("Sonia", sayBye);
console.log("----------------------------------------------")


// Anonymous Functions
// 📘                   What is an Anonymous Function ?
//                       An anonymous function is a function without a name.


let say = function () {
    console.log("Hello!");
};

say();
console.log("----------------------------------------------")

setTimeout(function () {
    console.log("This message appears after 2 seconds.");
}, 2000);
console.log("----------------------------------------------")

const numbers = [1, 2, 3];

const squares = numbers.map(function (num) {
    return num * num;
});

console.log(squares);
console.log("----------------------------------------------")

// IIFE(Immediately Invoked Function Expression)

(function () {
    console.log("This runs immediately!");
})();
console.log("----------------------------------------------")

const counter = (function () {
    let count = 0;
    return function () {
        count++;
        return count;
    };
})();

console.log(counter()); 
console.log(counter()); 

console.log("----------------------------------------------")

// Higher - Order Functions(HOF)

function greetUser(name, callback) {
    console.log("Hello", name);
    callback();
}

greetUser("Payal", function () {
    console.log("Hope you're doing well!");
});


function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); 
