// (1) length - The length property returns the total number of characters 
//     in a string include space.

let name = "sandeep"
console.log(name.length)
let name2 = "sandeep learn javascript"
console.log(name2.length)
let name3 = ""
let name4 = " "
console.log(name3.length)
console.log(name4.length)
console.log("-----------------------------------------")

// (2) toUpperCase - Converts a string to uppercase.

let upper = "sandeep"
let upper2 = "sandeep learn javascript"
console.log(upper.toUpperCase())
console.log(upper2.toUpperCase())
console.log("-----------------------------------------")

// (3) toLowerCase() - Converts a string to lowercase.

let lower = "JAVAsCRiPT"
let lower2 = "sandeep IS LIVING in FARMES"
console.log(lower.toLowerCase())
console.log(lower2.toLowerCase())
console.log("-----------------------------------------")

// (4) includes() - Checks if a string contains a given word / character.

let word = "ramayan"
let sentence = "shree ram in ramayan"
console.log(word.includes("y"))
console.log(word.includes("N"))
console.log(sentence.includes("IN"))
console.log(sentence.includes("ram"))
console.log(sentence.includes(" "))
console.log("-----------------------------------------")

// (5)  startsWith() - Checks if a string starts with a specific word / character.

let title = "ramayan"
let para = "shree ram in ramayan"
console.log(title.startsWith("r"))
console.log(title.startsWith("R"))
console.log(para.startsWith("shree"))
console.log(para.startsWith("shree ram"))
console.log(para.startsWith("Shree ram"))
console.log("-----------------------------------------")

// (6) endsWith() - Checks if a string ends with a specific word / character.

let title2 = "ramayan"
let para2 = "shree ram in ramayan"
console.log(title2.endsWith("an"))
console.log(title2.endsWith("An"))
console.log(para2.endsWith("ramayan"))
console.log(para2.endsWith("in ramayan"))
console.log(para2.endsWith("in Ramayan"))
console.log("-----------------------------------------")

// (7) indexOf() - Returns the position of the first occurrence of a character / word.

let title3 = "ramayan"
let para3 = "shree ram in ramayan"
console.log(title3.indexOf("a"))
console.log(title3.indexOf("n"))
console.log(title3.indexOf("ay"))
console.log(para3.indexOf("ramayan"))
console.log(para3.indexOf("in"))
console.log(para3.indexOf("in ramayan"))
console.log("-----------------------------------------")

// (8) slice() - Extracts part of a string.

let new_word = "sandeep"
let string = "sandeep aanjana patel"
console.log(new_word.slice(2))
console.log(new_word.slice(2,5))
console.log(string.slice(7))
console.log(string.slice(7,12))
console.log(string.slice(-7,-1))
console.log("-----------------------------------------")

// (9) replace() - Replaces part of a string with another.

let new1 = "sandeep aanjana"
let str = "sandeep aanjana patel"
console.log(new1.replace("a","A"))
console.log(str.replace("patel","engineer"))
console.log("-----------------------------------------")

// (10) trim() - Removes extra spaces from start and end.

let username = "      sandeep     ";
console.log(username.trim());
console.log("-----------------------------------------")

// (11) concat() - Joins(merges) two or more strings together.

let fname = "sandeep"
let lname = "aanjana"
console.log(fname.concat(lname))
console.log(fname.concat(" ",lname))
console.log(fname.concat(" ","'",lname,"'"))
console.log("-----------------------------------------")

// (12) split() - Splits a string into an array based on a separator.

let line = "I love ujjain";
console.log(line.split(" ")); 
console.log("-----------------------------------------")

// (13) repeat() - Repeats a string multiple times.

console.log("*".repeat(5)); 
console.log("-----------------------------------------")

// (14) substring(start, end) - Extracts characters between two indexes.

let my_name = "sandeep";
let my_name2 = "sandeep aanjana";
console.log(my_name.substring(0, 4));
console.log(my_name2.substring(7));
console.log("-----------------------------------------")

// (15) charAt(index) - Returns the character at a given position.

let char = "sandeep";
console.log(char.charAt(4))
console.log(char.charAt(2))
console.log("-----------------------------------------")

// (16) padStart() - Pads string with characters at the start until it reaches given length.

let invoice = "25";
console.log(invoice.padStart(5, "0")); 
let number = "98765";
console.log(number.padStart(10, "*")); 
console.log("-----------------------------------------")

// (17) padEnd() - Pads string with characters at the end until it reaches given length.

let product = "iPhone";
console.log(product.padEnd(10, "."));
let id = "42";
console.log(id.padEnd(6, "0")); 
console.log("-----------------------------------------")

// (18) search() - Finds the position of a match using regex.

let email = "user@gmail.com";
console.log(email.search(/@/)); 
let post = "I love #coding";
console.log(post.search(/#/)); 
console.log("-----------------------------------------")

// (19) localeCompare() - Compares two strings(alphabetically).

console.log("apple".localeCompare("banana")); 
console.log("hello".localeCompare("hello")); 
console.log("hello".localeCompare("HELLO")); 

