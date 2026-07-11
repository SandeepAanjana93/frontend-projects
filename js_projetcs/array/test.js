// q3 
console.log("------------------q3--------------------------")

let num = "25";

if (num > 0){
    console.log("given num is positive");
}
else if (num == 0){
    console.log("given num is zero");
}
else{
    console.log("given num is nagative");
}
console.log("------------------q4--------------------------")
// q4 

let arr = [67, 45, 99, 12, 88, 54];

arr.sort();
console.log(arr[0])
console.log("------------------q6--------------------------")

// q6

for (let i = 0; i <=50; i++){
    console.log(i)
}
console.log("------------------q7--------------------------")

// q7
for(let i = 0; i<=100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}
// q9
console.log("-------------------------q9-------------------")
let n = 8;
for(let i = 1; i <= 10; i++){
    console.log(`${8 * i}`)
}

console.log("------------------q8--------------------------")
// q8

for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}
// q15
console.log("--------------------------q15------------------")

for(let i = 20; i >= 1; i--){
    console.log(i)
}
console.log("--------------------q16------------------------")
// q16

let day = 5;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
}
console.log("------------------q18--------------------------")

// q18
let month = 11;
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("fabruary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("agust");
        break;
    case 9:
        console.log("setember");
        break;
    case 10:
        console.log("octuber");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("december");
        break;
}
console.log("---------------------q19-----------------------")

// q19

let array = [10, 20, 30, 40, 50];

sum = array.reduce((acc,array) => acc + array)
console.log(sum)
console.log("----------------------q25----------------------")

// q25

let z = [0, 5, 0, 8, 10, 0, 15];
z.sort()
for(let i = 0; i<z.length; i++){
    if(z[i] === 0){
        newz = z.shift()
        console.log(newz)
    }
}

console.log("----------------------q26----------------------")
// q26

let sum2 = [2, 4, 6, 8, 10]

add = sum2.map(add => (add * 2))
console.log(add)

console.log("---------------q17-----------------------------")

// q17

let num1 = 20;
let num2 = 10;
operator = "*"
switch(operator){
    case "*":
        console.log(`${num1 * num2}`);
        break;
    case "/":
        console.log(`${num1 / num2}`);
        break;
    case "-":
        console.log(`${num1 - num2}`);
        break;
    case "+":
        console.log(`${num1 + num2}`);
        break;
    case "**":
        console.log(`${num1 ** num2}`);
        break;
}
console.log("-----------------------q2---------------------")

// q2 
let evencount = 0;
let oddcount = 0;
let list = [12, 7, 9, 20, 15, 18, 3, 6];
for(let i = 0; i<list.length; i++){
    if(i % 2 == 0){
        evencount++
    }
    else{
        oddcount++
    }
}
console.log(evencount)
console.log(oddcount)
console.log("-----------------------q4---------------------")

// q4

let year = 2028;
if(year % 4 == 0 || year % 400 == 0){
    console.log(`${year} is a leap year`)
}
else{
    console.log(`${year} is not a leap year`)
}
console.log("----------------------q10----------------------")

// q10

let fac = 6;
let fact = 1;
for(let i = 1; i < (fac + 1); i++){
    fact = fact * i 
}
console.log(fact);
console.log("----------------------q12----------------------")

// q12

let str = 'JavaScript';
let reverse = ""
for(let i = (str.length)-1; i >= 0; i--){
    reverse += str[i]
}
console.log(reverse);
console.log("-----------------q13---------------------------")

// q13

let word = "madam";
let com = ""
for(let i = (word.length)-1; i >= 0; i--){
    com += word[i]
}
if(com == word){
    console.log(`${word} is palindrom`)
}
else{
    console.log(`${word} is not palindrom`)
}
console.log("------------------q21--------------------------")

// q21
let duplicate = false;
let numb = [2, 4, 6, 2, 7, 8, 4, 9];
for(let i = 0; i < numb.length; i++){
    for(let j = 0; j < numb.length; j++){
        if(i == j && numb[i] == numb[j]){
            duplicate = true;
        }
    }
}

if (duplicate) {
    console.log("Duplicate value is present");
}
else {
    console.log("Duplicate value does not exist");
}

console.log("------------------q27--------------------------")

// q27

let even = [11, 22, 35, 48, 59, 60];
evenarr = []
for(let i = 0; i<even.length; i++){
    if(even[i] % 2 == 0){
        evenarr.push(even[i])
    }
}
console.log(evenarr)

// q28
console.log("------------------q28--------------------------")

let sumarry = [5, 10, 15, 20];
sumarr = sumarry.reduce((acc, sumarry) => acc + sumarry)
console.log(sumarr)