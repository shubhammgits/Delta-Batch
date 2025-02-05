// alert("Hello")
console.log("Shubham")

let a = 5;
let b = 10;
console.log("Sum is " , a+b);

let pencilPrice = 5;
let penPrice = 10;

// let output = "The total price is :" + (pencilPrice + penPrice) + "Rupees"
// console.log(output)

// or we can use template literals:

let output = `The total price is : ${penPrice+pencilPrice} rupees`
console.log(output)

let age=18;
console.log(age > 18)



//Conditional Statements:


console.log("Before my if statement")
let personAge = 23
if(personAge >=18){
    console.log("You can vote!")
    console.log("You can drive!")
} 
console.log("After my if statement")

let firstName = "Shubham"
if(firstName = "Shubham"){
    console.log(`Welcome ${firstName}!`)
}



//else-if:

let myAge = 23
if(myAge >= 18){
    console.log("you can vote!")
}

else if(age = 18){
    console.log("you can vote next year")
}

else if(age < 18 ){
    console.log("you cannot vote")
}


let marks = 10

if(marks >= 80) console.log("A+")
else if(marks >= 60) console.log("A")
else if(marks >= 33) console.log("B")
else if(marks < 33) console.log("F")



