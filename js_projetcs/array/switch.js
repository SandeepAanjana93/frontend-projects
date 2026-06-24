// print day name if condition true break switch and exit

let day = 6;
switch (day){
    case 1:
    console.log("monday");
    break;
    case 3:
    console.log("wednesday");
    break;
    case 5:
    console.log("friday");
    break;
    default:
    console.log("invalid day name");
}
console.log("-----------------------------------------------")

// use nested switch case to solve complex problem 

let department = "electricity";
let priority = "high"
let citizen = "senior"
let fee = 0;
let discount = 0;
let resolution = ""

switch (department){
    case "electricity":
        fee = 100;
        break;
    case "water":
        fee = 80;       
        break;
    case "property":
        fee = 150;
        break;
    case "transport":
        fee = 120;
        break;
    default:
        console.log("invalid department")
}
switch (priority){
    case "low":
       resolution = "7 days"
        break;
    case "high":
        resolution = "1 day"
        break;
    case "medium":
        resolution = "3 days"
        break;
    default:
        console.log("invalid priority")
}
switch (citizen){
    case "normal":
        discount = 0;
        break;
    case "senior":
        discount = 50
        break;
    case "disabled":
        discount = 100
        break;
    default:
        console.log("invalid citizen")
}

let totalfee = fee - (fee * discount / 100);

console.log("Department:", department);
console.log("Priority:", priority);
console.log("Citizen Type:", citizen);

console.log("Original Fee: " + fee);
console.log("Discount: " + discount + "%");
console.log("Final Fee: " + totalfee);
console.log("Resolution Time:", resolution);

if (citizen === "disabled") {
    console.log("VIP Support Enabled");
}