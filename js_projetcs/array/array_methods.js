let arr = [22,"sandeep",93,1,58,50,"aanjana",20,4,55,6]
console.log(arr)

let narr = new Array ("aanjana",23,343,543)
console.log(narr)

// -------methods------------

// (1) push----(add direct element an array in the last)--------

arr.push("apple","banana","java scripts")
console.log(arr)

// (2) pop----(remove direct last element an array)--------

arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr)
// arr.pop()
console.log(arr)

// (3) unshift----(add direct element an array in the first)--------

arr.unshift("java scripts","html","css")
console.log(arr)

// (4) shift----(remove direct first element an array)--------

arr.shift()
console.log(arr)
arr.shift()
arr.shift()
console.log(arr)

// (5) splice----(item index, item quantity, item)--------

arr.splice(3,1,"frontend")
console.log(arr)
arr.splice(3,3,"frontend")
console.log(arr)
// arr.splice(0,8,"frontend")
// console.log(arr)

// (6) slice----(firstindex, last index)--------------------

let arr2 = arr.slice(3,8)
console.log(arr2)

let arr3 = arr.slice(1,5)
console.log(arr3)

let arr4 = arr.slice(8,12)
console.log(arr4)

// (7) indexOf----(find the index an element)--------------------

console.log(arr.indexOf("aanjana"))
console.log(arr.indexOf("apple"))
console.log(arr.indexOf(55))
console.log(arr.indexOf(93))

// (8) lastIndexOf----(find the index of same last element)--------------------

let table = [2,4,6,8,10,12,14,16,18,2,12,2,16,20,2]
console.log(table.lastIndexOf(2))
console.log(table.lastIndexOf(12))
console.log(table.lastIndexOf(16))

// (9) includes----(It gives the output in boolean)--------------------

console.log(table.includes(12))
console.log(table.includes(20))
console.log(table.includes(10))
console.log(table.includes(5))
console.log(table.includes(15))

// (10) find----(The output will be based on the conditions and given in element)--------------------

let found = table.find(num => num > 7)
console.log(found)

let chack = table.find(num => num = 12)
console.log(chack)

let show = table.find(num => num <= 18)
console.log(show)

// (11) findIndex----(The output will be given in index)--------------------

let found2 = table.findIndex(num => num < 7);
console.log(found2)

