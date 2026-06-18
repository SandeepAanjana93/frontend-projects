// object creating--------------------

let person = {
    name : "sandeep",
    age : 22,
    address : "ujjain",
    course : "javascript"
};

console.log(person)
console.log("--------------------------------------")

function Person (name,age,course){
    this.name = name
    this.age = age
    this.course = course
}
let person2 = new Person("nirmal", 21, "gate")
console.log(person2)

