// Adding, Updating, and Deleting Properties--------------------

// (1) Object.assign(target, source)-------------------

let object = {name:"sandeep",age:22}
let object2 = {lastname:"aanjana",dob:"04-01-2004"}

Object.assign(object,object2);
console.log(object2)

console.log("-----------------------------")
// (2) Object.defineProperty(obj, prop, descriptor)------------

let collage = {};

Object.defineProperty(collage,"name",{
    value : "ats",
    writable : false,//ture,
    enumerable : true
})

console.log(collage.name)
collage.name = "aits"
console.log(collage.name)

console.log("-----------------------------")
// (3) Object.defineProperties(obj, prop)------------

let city = {};

Object.defineProperties(city, {
    name : {value:"avantika",writale:true},
    area:{value:10000,writable:false}
})
console.log(city.name)
collage.name = "ujjain"
console.log(collage.name)

console.log("-----------------------------")
// (4) delete obj.property - Removes a property from an object------------

let user = {
    name : "shyam",
    age : 22,
    course : "b.tech",
    address : "mahidpur"
}

console.log(user);
delete user.course
console.log(user);

console.log("-----------------------------")
// (5) Object.keys(obj) - Returns an array of keys-----------

console.log(Object.keys(user));

console.log("-----------------------------")
// (6) Object.values(obj) - Returns an array of values-----------

console.log(Object.values(user));

console.log("-----------------------------")
// (7) Object.entries(obj) - Returns an array of key - value pairs

console.log(Object.entries(user));

console.log("-----------------------------")
// (8) hasOwnProperty(prop) - Checks if an object has a property

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("course"));

console.log("-----------------------------")
// (9) in operator - Checks if a property exists----------------

console.log("age" in user);
console.log("course" in user);

console.log("-----------------------------")
// (10) Object.assign() - Clones an object----------------------

let num = {
    a : 1, b : 2, c : 3
};

console.log(Object.assign({}, num));
console.log(num);

console.log("-----------------------------")
// (11) structuredClone(obj) - Deep clones an object------------

let deepcopy = structuredClone(num);
console.log(deepcopy)

console.log("-----------------------------")
// (12) JSON.stringify() & JSON.parse() ---------------------

let deepClone = JSON.parse(JSON.stringify(num));
console.log(deepClone); 

console.log("-----------------------------")
// (13) Object.freeze(obj) - Prevents adding, deleting, or modifying properties

Object.freeze(num);
num.a = 6
console.log(num)

console.log("--------------------------------")
// (14) Object.seal(obj) - Prevents adding or deleting properties but allows modifications

let num2 = {
    a: 1, b: 2, c: 3
};

Object.seal(num2);

num2.b = 4
delete num2.c; 
console.log(num2)
