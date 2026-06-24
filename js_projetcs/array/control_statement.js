// if ------------------------------

let n = 18
if (n > 14){
    console.log("he is younger or adult")
}

// if with else ----------------------------

let n1 = 18
if (n1 > 14) {
    console.log("he is younger or adult")
}
else{
    console.log("he is now child")
}

// if   -   else  -   else if ------------------------

let age = 23
let state = "mp"
let efucation = "mtech"

if ((age >= 18 && age <= 24) && state == "mp"){
    console.log("you are eligible for intern position")
}
else if ((age >= 25 && age <= 30) && state == "up"){
    console.log("you are eligible for software engineer position")
}
else if ((age >= 31 && age <= 40) && state == "kerala"){
    console.log("you are eligible for senior software engineer position")
}
else if ((age >= 41 && age <= 50) && education == "mtech"){
    console.log("you are eligible for product manager position")
}
else if (age > 50){
    console.log("you are eligible for any position")
}
else{
    console.log("you are eligible for any position")
}

// task-------------------------------

console.log("--------------------------------------------------");

let hindi = 88;
let english = 82;
let maths = 79;
let marks = (hindi + english + maths) / 3;
let attendance = 44;
let state = "mp";

if (hindi < 35 || english < 35 || maths < 35) {
    console.log("Fail");
}
else if (marks >= 90 && attendance >= 85) {
    console.log("You are eligible for Full Scholarship");
}
else if (marks >= 70 && marks < 90 && attendance >= 85) {
    console.log("You are eligible for Half Scholarship");
}
else if (marks >= 50 && marks < 70 && attendance >= 85) {
    console.log("You are eligible for Less Scholarship");
}
else if (marks >= 40 && marks < 50 && attendance >= 85 && state == "mp") {
    console.log("You are pass but not eligible for scholarship (MP)");
}
else {
    console.log("You are not eligible for scholarship");
}

console.log(marks >= 95 ? "You will take admission in best college" : "Try other college");