// start loop 1 to 30 time 

for (let i = 1; i <= 30; i++) {
    console.log(`Student ${i} is present`);
}
console.log("--------------------------------------------------------------")

// start loop 1 to 10 time 

for (let a = 1; a <= 10; a++) {
    console.log(`Student ${a} is present`);
};
console.log("--------------------------------------------------------------")

// print table of n number 

for (let b = 1; b <= 10; b++) {
    let c = 5;
    console.log(`${c} * ${b} = ${c * b} `);
};
console.log("--------------------------------------------------------------")

// print table of 18 number 

for (let b = 1; b <= 10; b++) {
    let c = 18;
    console.log(`${c} * ${b} = ${c * b} `);
};
console.log("--------------------------------------------------------------")

// print name of days one by one 

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (i = 0; days.length > i; i++) {
    console.log(days[i]);
}
console.log("--------------------------------------------------------------")

// print name of months one by one

let months = [
    'january',"fabruary","march","april","may","june","july","agust","september","octuber","november","december"
]
for (i = 0; months.length > i; i++) {
    console.log(months[i]);
}

// print even number 1 to 50 count 

console.log("--------------------------------------------------------------")

for (let i = 0; i <= 50; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}
console.log("--------------------------------------------------------------")

// find book and filter with the help of loop

let total_book = 0;
let availablebook = 0;
let borrowedbook = 0;
let book = [
    { book: "JS", borrowed: true },
    { book: "Python", borrowed: false },
    { book: "Java", borrowed: true },
    { book: "C++", borrowed: false }
]
for(let i = 0; i < book.length; i++){
    if(book[i].borrowed){
        borrowedbook++
    }
    else{
        availablebook++
    }
}
total_book = borrowedbook + availablebook
console.log("total book",total_book);
console.log("borrowed book",borrowedbook);
console.log("available book",availablebook);
console.log("available book percentage",(availablebook / total_book)*100,"%");
console.log("borrowed book percentage", (borrowedbook / total_book) * 100,"%");