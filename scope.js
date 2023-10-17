// -------- GLOBAL SCOPE --------

const imInGlobalScope = "This variable is in global scope"

function myFunction() {
    // -------- LOCAL SCOPE --------
    const userName = "Marina" // this variable is in the function/local scope
    console.log(imInGlobalScope);// we can access variables in the global scope from the local scope but not the other way around
}

// myFunction()

// console.log(userName); // ReferenceError: userName is not defined

// -------- HOISTING --------

// In ECMAScript 5 variables were declared with the keyword "var"
console.log(myVariable); // The variable is accessible before it's declared, this is called HOISTING, but the value is undefined

var myVariable = "This is the var variable"

var myVariable = "Now this is also the var variable with the same name" // I'm redeclaring with the same name

let thisisLet = "This is a let variable"

// thisisLet = "This is the new value of let"

sayHi() // we can call the function before it's declared, this is HOISTING as well

// Hoisting is making a variable available before it's declared
// With let and const we can't do that, we get a reference error
// Javascript is trying to avoid hoisting with let and const
function sayHi() {
    console.log(this); // when we are in the global scope this is the window object or global object
}

// Shadowing

const array = [1, 2, 3, 4, 5]

function checktheArray(array) { // array is a parameter, so it's a new variable

    array.forEach((element) => {
        console.log(element);
    })
}

checktheArray([31, 2, 342342432, 1])
// IMPORTANT: Try to avoid declaring a variable in the global scope with the same name as a variable in the local/function scope


// To avoid Hoisting in functions we can use arrow functions and store them in a variable (this is the most common way, function expressions)

const greetings = () => {
    console.log("Welcome to Ironhack sir! You are not going to suffer with javascript, no worries");
}
greetings()

