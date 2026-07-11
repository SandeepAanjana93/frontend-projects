console.log("----------------q1---------------------------------")

let evennum = function (num){
    if(num % 2 == 0){
        return true
    }else{
        return false
    }
};
console.log("-------------------q2------------------------------")
console.log(evennum(7))

for(let i = 1; i<11;i++){
    console.log(i)
}
console.log("------------------q3-------------------------------")

let i = 10
while(i > 0){
    console.log(i)
    i--
}

console.log("-------------------q4------------------------------")

let a = 1
do{
    console.log(a)
    a++
}while(a < 6)
console.log("--------------------q5-----------------------------")

number = 0;
if(number > 0){
    console.log("number is positive")
}
else if(number < 0){
    console.log("number is nagative")
}
else{
    console.log("zero")
};

console.log("-------------------q6------------------------------")
const student = { name: 'Payal', age: 22, city: 'Ujjain' };

for(key in student){
    console.log(student[key])
}
console.log("-------------------------q7------------------------")


const marks = [75, 82, 91, 64];

for(item of marks){
    console.log(item)
}

console.log("--------------------q8-----------------------------")

let large = function(a,b){
    if(a>b){
        console.log("a is greater than b")
    }
    else{
        console.log("b is greater than a")
    }
}
large(89,65)
console.log("------------------------q9-------------------------")

for(let i = 1; i<21; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

console.log("---------------------q10----------------------------")

const name = { name: 'sandeep', age: 22, city: 'Ujjain',skills:"ml" };

for (key in name) {
    console.log(name[key])
}

console.log("------------")
const num2 = [10,15,20,80,56,76,45];

for (i of num2) {
    console.log(i)
}