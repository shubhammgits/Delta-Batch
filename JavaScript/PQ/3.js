//A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a program to find if a string s good or not.

let string = "bcdefg"

if(string.length>3 && string[0]==="a"){
    console.log("Good string!")
}

else{
    console.log("Not a good string!")
}