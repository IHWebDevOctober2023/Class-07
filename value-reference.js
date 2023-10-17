// PRIMITIVE DATA TYPES

// numbers, strings, booleans...

let a = 5

let b = a
console.log("This is the value of B before changing it: ", b);

b = 4
console.log("This is the value of B after changing it: ", b);

console.log("This is the value of A: ", a); // A is still 5


// NON PRIMITIVE DATA TYPES

const arrayA = [1, 2, 3, 4]

// Array B it's a reference to array A. If we modify one of them they both change
const arrayB = arrayA

arrayA.push(5)

console.log("This is array A: ", arrayA);
console.log("This is array B: ", arrayB);

const objectA = {
    name: "Albert",
    role: "Success manager"
}

const objectB = objectA

objectA.role = "Assistant to the Regional Manager"

console.log(objectB);

// To make a copy we can use the spread operator

const objectC = { ...objectA }

objectC.name = "Michael"

console.log(objectC);

// Another way 
const objectD = Object.assign({}, objectA)
objectD.role = "Program Manager"

console.log(objectD);

// AVOID MUTATING DATA. It's considered a BAD PRACTICE. It can lead to bugs in your code. It's better to create copies of the original data and modify the copies

const arrayConcat = [23, "saads", 32.3, 344463]

const arrayConcatCopy = arrayConcat.concat()

console.log(arrayConcatCopy);