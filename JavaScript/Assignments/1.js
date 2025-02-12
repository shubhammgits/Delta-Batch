// Create a number variable num with some value. Now, print "good" if the nuber is divisible by 10 and print "bad" if it is not.

let num = 30
if(num%10 == 0) console.log("good")
else if(num%10!=0) console.log("bad")




// Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert 

// let userName = prompt("Enter your name :")
// let userAge = prompt ("Enter your age :")
// let msg = `${userName} is ${userAge} years old`
// alert(msg)




// A string is a golden string if it starts with the charcater 'A' or 'a' and has a total length greater than 5. For a given string print if it is golden or not.

let goldenString = "Alalalala"
if((goldenString[0] === "A" || goldenString[0] === "a") && goldenString.length > 5){
    console.log("Golden String")
}
else console.log("Not a golden string!")




// Write a program to find the largest of 3 numbers

let num1 = 100
let num2 = 120
let num3 = 90

if((num1 > num2) && (num1 > num3)) console.log(`${num1} is the largest`)
else if((num2 > num1) && (num2 > num3)) console.log(`${num2} is the largest`)
else if((num3 > num1) && (num3 > num2)) console.log(`${num3} is the largest`)




// Wrie a program to check if 2 numbers have the same last digit

let number1 = 32
let number2 = 47852

if(number1[number1.length - 1] == number2[number2.length - 1]) console.log(`${number1} and ${number2} have the same last digit which is`, number1%10)
else console.log(`${number1} and ${number2} DON'T have the same last digit`)