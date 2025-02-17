const favMovie = "Avatar"
let guess = prompt("Guess my favourite movie :")

while((guess !== favMovie) && (guess !== "quit") ){
    guess = prompt("Wrong guess! Guess again : ")
}

if(guess === favMovie){
    console.log("Congratulations!")
}

else{
    console.log("Quit")
}

