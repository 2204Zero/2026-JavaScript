// Conversions in DataTypes (nightmare)

let score = "30fdvf"

// we are trying to convert a string into a number
// it is not a pure number based string, it contains some other char too

let number = Number(score)
console.log(number);                        // reutrn NaN
console.log(typeof number);                 // return type = number


// let score = "30fdvf"    can't redclare
score = true
let num = Number(score)
console.log(num)
console.log(typeof num);
