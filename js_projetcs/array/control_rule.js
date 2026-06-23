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