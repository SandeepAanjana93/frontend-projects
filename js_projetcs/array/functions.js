// normal function

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
