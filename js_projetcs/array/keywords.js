// (1) var ----- can be re-declared and accesible it outer loop or function

var array = "sandeep"
console.log(array)
var array = "sandeep aanjana"
console.log(array)

// (2) let ----- can't re-declared and it accesible inside loop and function but value can be re-assign

let array2 = "sandeep"
console.log(array2)
array2 = "sandeep patel"
console.log(array2)

// (2) const ----- cannot be re-declared and re-assign

const table = [2,4,6,8,10,12,14,16,18,20]
console.log(table)